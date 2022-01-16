import { NodeAPI, Node, NodeMessage, nodes, log } from "node-red";
import { LogLevelName, LogLevels, SimpleLogger } from "node-homie/misc";



import { DeviceDiscovery, HomieDeviceManager } from 'node-homie';
import { Subject, takeUntil } from "rxjs";
import { NodeDef } from "@node-red/registry";
import { MQTTConnectOpts } from "node-homie/model";


export interface Credentials {
    username?: string;
    password?: string;
}

export interface IHomieConfigCfg extends NodeDef {
    mqttUrl: string;
    homieRoot: string;
}

export interface IHomieConfig extends Node<Credentials> {
    config: IHomieConfigCfg;
    discovery: DeviceDiscovery;
    devices: HomieDeviceManager;
    vDevices: HomieDeviceManager;
    getMqttOpts: () => MQTTConnectOpts
}


module.exports = function (RED: NodeAPI) {
    SimpleLogger.loglevel = LogLevels.debug;
    SimpleLogger.domain = 'node-homie';
    SimpleLogger.logOutput = (domain: string, type: string, name: string, logLevel: number, level: number, text: string, obj?: any) => {
        if (level <= logLevel) {
            if (obj) {
                RED.log.debug(`${LogLevelName[level < LogLevelName.length ? level : LogLevelName.length - 1]} [${domain}:${type}:${name}]: ${text} -- ${JSON.stringify(obj, undefined, 2)}`);
            } else {
                RED.log.debug(`${LogLevelName[level < LogLevelName.length ? level : LogLevelName.length - 1]} [${domain}:${type}:${name}]: ${text}`);
            }
        }
    }

    function HomieConfig(config: IHomieConfigCfg) {

        RED.nodes.createNode(this, config);
        const node = <IHomieConfig>this;

        const onClose$ = new Subject<boolean>();

        node.debug('==================>>>>>>>>>>>>>>>> Creating homie config');
        node.debug(`Config: ${JSON.stringify(config, undefined, 2)}`);
        node.devices = new HomieDeviceManager();
        node.vDevices = new HomieDeviceManager();


        node.getMqttOpts = () => {
            return {
                url: config.mqttUrl,
                username: node.credentials.username,
                password: node.credentials.password,
                topicRoot: config.homieRoot
            }
        }

        node.discovery = new DeviceDiscovery(node.getMqttOpts(), false, 3000, 500);


        node.on('input', function (msg: NodeMessage) {
            msg.payload = typeof msg.payload === 'string' ? msg.payload.toLowerCase() : String(msg.payload).toLowerCase();
            node.send(msg);
        });

        node.on('close', async (removed: boolean, done: () => void) => {
            node.debug(`Close called: Removed: ${removed}`);
            onClose$.next(true);
            await Promise.all([node.discovery.onDestroy(), node.devices.onDestroy(), node.vDevices.onDestroy()]);
            done();
        })

        node.discovery.events$.pipe(takeUntil(onClose$)).subscribe({
            next: msg => {
                if (msg.type === 'add') {
                    if (!node.devices.hasDevice(msg.deviceId)) {
                        // node.debug(`New device: ${msg.deviceId}`);
                        const device = node.devices.add(msg.makeDevice());
                        device.onInit();
                    }
                } else if (msg.type === 'remove') {
                    node.debug(`Remove device: ${msg.deviceId}`);
                    const device = node.devices.removeDevice(msg.deviceId);
                    if (device) {
                        device.onDestroy();
                    }
                }
            }
        });


        node.discovery.onInit();

    }
    RED.nodes.registerType("homie-config", HomieConfig, {
        credentials: {
            username: { type: "text" },
            password: { type: "password" }
        }
    });


    RED.httpAdmin.get("/nodeHomie/deviceList", RED.auth.needsPermission('node-homie.read'), function (req, res) {
        const config = req.query;
        const homieCfg = RED.nodes.getNode(config?.homieCfg as string) as IHomieConfig;
        if (homieCfg) {
            const list = Object.entries(homieCfg.devices.devices).sort(([aid, adevice], [bid, bdevice]) => {
                // return adevice.attributes.name.localeCompare(bdevice.attributes.name);

                const nameA = adevice?.attributes?.name?.toUpperCase(); // Groß-/Kleinschreibung ignorieren
                const nameB = bdevice?.attributes?.name?.toUpperCase(); // Groß-/Kleinschreibung ignorieren
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // identical
                return 0;

            }).map(([id, device]) => {
                return { ...device.attributes, pointer: device.pointer }
            })
            res.json(list);
        } else {
            res.json([]);
        }

    });

    RED.httpAdmin.get("/nodeHomie/nodesList", RED.auth.needsPermission('node-homie.read'), function (req, res) {
        const config = req.query;
        const homieCfg = RED.nodes.getNode(config?.homieCfg as string) as IHomieConfig;

        if (homieCfg && config?.deviceId) {
            const device = homieCfg.devices.getDevice(config.deviceId as string);
            if (!device) {
                res.json([]);
                return;
            }

            const list = Object.values(device?.nodes)?.sort((a, b) => {
                const nameA = a?.attributes?.name?.toUpperCase(); // Groß-/Kleinschreibung ignorieren
                const nameB = a?.attributes?.name?.toUpperCase(); // Groß-/Kleinschreibung ignorieren
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // identical
                return 0;
            }).map(node => {
                return { ...node.attributes, pointer: node.pointer };
            })

            res.json(list);
        } else {
            res.json([]);
        }

    });


    RED.httpAdmin.get("/nodeHomie/propertiesList", RED.auth.needsPermission('node-homie.read'), function (req, res) {
        const config = req.query;
        const homieCfg = RED.nodes.getNode(config?.homieCfg as string) as IHomieConfig;
        if (homieCfg && config?.deviceId && config?.nodeId) {


            const device = homieCfg.devices.getDevice(config.deviceId as string);
            if (!device) {
                res.json([]);
                return;
            }
            const node = device.get(config.nodeId as string);
            if (!node) {
                res.json([]);
                return;
            }
            const list = Object.values(node.properties)?.sort((a, b) => {
                const nameA = a?.attributes?.name?.toUpperCase(); // Groß-/Kleinschreibung ignorieren
                const nameB = a?.attributes?.name?.toUpperCase(); // Groß-/Kleinschreibung ignorieren
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // identical
                return 0;
            }).map(prop => {
                return { ...prop.attributes, pointer: prop.pointer, value: prop.value };
            })

            res.json(list);
        } else {
            res.json([]);
        }

    });


}