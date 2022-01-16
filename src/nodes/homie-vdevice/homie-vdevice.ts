import { DeviceState, notNullish } from "node-homie/model";
import { isNotNullish } from "node-homie/rx";
import { NodeAPI, Node, NodeMessage, NodeDef } from "node-red";
import { distinctUntilChanged, map, Subject, switchMap, takeUntil } from "rxjs";
import { IHomieConfig } from "../homie-config/homie-config";
import { IHomieVDeviceConfigNode } from "../homie-vdevice-config/homie-vdevice-config";

export interface IHomieVDeviceNodeConfig extends NodeDef {
    homieCfg: string;
    device: string;
}

export interface IHomieVDeviceNode extends Node {
    config: IHomieVDeviceNodeConfig;
}


module.exports = function (RED: NodeAPI) {



    function HomieVDeviceNode(config: IHomieVDeviceNodeConfig) {

        RED.nodes.createNode(this, config);
        const node = <Node>this;

        const onClose$ = new Subject<boolean>();
        const homieCfg = RED.nodes.getNode(config.homieCfg) as IHomieConfig;
        const dn = RED.nodes.getNode(config.device) as IHomieVDeviceConfigNode;
        if (!dn) { return; }

        const device = dn.device;

        device.attributes$.pipe(takeUntil(onClose$), map(attrs => attrs.state), distinctUntilChanged()).subscribe(
            {
                next: state => {
                    const msg = {
                        device: config.device,
                        payload: state
                    };
                    node.status({fill: state === "ready" ? "green" : "red",shape:"ring",text:state});
                    node.send(msg);
                }
            }
        )

        node.on('input', function (msg: NodeMessage) {
            if (!homieCfg || !device) { return; }
            if (notNullish(<string>msg.payload)) {
                device.updateState$(msg.payload as DeviceState).subscribe();
            }else{
                const msg = {
                    device: config.device,
                    payload: device.attributes.state
                };
                node.send(msg);
            }
        });

        node.on('close', async (removed: boolean, done: () => void) => {
            node.debug(`Close called: Removed: ${removed}`);
            onClose$.next(true);
            done();
        })



    }
    RED.nodes.registerType("homie-vdevice", HomieVDeviceNode);



}