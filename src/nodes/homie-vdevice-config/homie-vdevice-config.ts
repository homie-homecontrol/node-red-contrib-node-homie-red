import { NodeAPI, Node, NodeMessage, NodeDef } from "node-red";
import { distinctUntilChanged, map, Subject, switchMap, takeUntil } from "rxjs";
import { VirtualDeviceSpec } from "../../model/vrdevice.model";
import { IHomieConfig } from "../homie-config/homie-config";
import { VirtualDevice } from "./VirtualDevice";
import { Validator } from "jsonschema";


const schema = require('../../vDevice.schema.json');

export interface IHomieVDeviceConfigNodeConfig extends NodeDef {
    homieCfg: string;
    deviceSpecStr: string;
}

export interface IHomieVDeviceConfigNode extends Node {
    deviceSpec: VirtualDeviceSpec;
    device: VirtualDevice;
}

export interface IValidationResult<T = any> {
    valid: boolean;
    error: boolean;
    validationErrors: string[];
    object?: T;
}


module.exports = function (RED: NodeAPI) {

    const validateVDevice = <T = any>(vDeviceSpec: string, includeParsed: boolean = false): IValidationResult<T> => {
        try {
            const virtualDeviceSpec = JSON.parse(vDeviceSpec);
            const validator = new Validator();

            const result = validator.validate(virtualDeviceSpec, schema, { nestedErrors: true })
            const validationErrors = [];
            if (!result.valid) {
                result.errors.forEach(error => {
                    RED.log.error(`Validation failure: ${error.toString()}`);
                    validationErrors.push(error.toString());
                })
                return <IValidationResult>{ valid: false, error: false, validationErrors };
            }

            return <IValidationResult>{ valid: true, error: false, validationErrors: [], object: includeParsed ? virtualDeviceSpec : undefined };

        } catch (err) {
            return { valid: false, error: true, validationErrors: [err.toString()] };
        }


    }



    function HomieVDeviceConfigNode(config: IHomieVDeviceConfigNodeConfig) {

        RED.nodes.createNode(this, config);
        const node = <IHomieVDeviceConfigNode>this;

        const onClose$ = new Subject<boolean>();
        const homieCfg = RED.nodes.getNode(config.homieCfg) as IHomieConfig;

        if (!homieCfg || !config.deviceSpecStr) { return; }

        const validation = validateVDevice<VirtualDeviceSpec>(config.deviceSpecStr, true);
        if (!validation.valid) {
            node.error(`Validation of deviceSpec failed: ${JSON.stringify(validation.validationErrors, undefined, 2)}`);
            
            return;
        }
        node.deviceSpec = validation.object!;

        node.device = homieCfg.vDevices.add(new VirtualDevice(node.deviceSpec, homieCfg.getMqttOpts()));

        node.device.onInit();

        node.on('input', function (msg: NodeMessage) {
            if (homieCfg) {

            }
        });

        node.on('close', async (removed: boolean, done: () => void) => {
            node.debug(`Close called: Removed: ${removed}`);
            onClose$.next(true);
            if (node.device && homieCfg) {
                homieCfg.vDevices.removeDevice(node.device.attributes.id);
                await node.device.onDestroy();
            }
            done();
        })



    }
    RED.nodes.registerType("homie-vdevice-config", HomieVDeviceConfigNode);


    RED.httpAdmin.get("/nodeHomie/vNodesList", RED.auth.needsPermission('node-homie.read'), function (req, res) {
        const config = req.query;
        const vDeviceCfgNode = RED.nodes.getNode(config?.vDeviceCfgNode as string) as IHomieVDeviceConfigNode;

        if (vDeviceCfgNode) {
            const device = vDeviceCfgNode.device
            if (!device) {
                res.json([]);
                return;
            }

            const list = Object.values(device?.nodes)?.sort((a, b) => {
                const nameA = a?.attributes?.name?.toUpperCase();
                const nameB = a?.attributes?.name?.toUpperCase();
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


    RED.httpAdmin.get("/nodeHomie/vPropertiesList", RED.auth.needsPermission('node-homie.read'), function (req, res) {
        const config = req.query;

        const vDeviceCfgNode = RED.nodes.getNode(config?.vDeviceCfgNode as string) as IHomieVDeviceConfigNode;

        if (vDeviceCfgNode && config?.nodeId) {


            const device = vDeviceCfgNode.device;
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

    RED.httpAdmin.post("/nodeHomie/validateVDevice", RED.auth.needsPermission('node-homie.read'), function (req, res) {

        RED.log.debug(`Received data: ${req.body.data}`);

        const result=validateVDevice(req.body.data);

        res.json(result);


    });



}