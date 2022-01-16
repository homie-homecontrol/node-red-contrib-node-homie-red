import { NodeAPI, Node, NodeMessage, NodeDef } from "node-red";
import { distinctUntilChanged, map, Subject, switchMap, takeUntil } from "rxjs";
import { IHomieConfig } from "../homie-config/homie-config";

export interface IHomieDeviceNodeConfig extends NodeDef {
    homieCfg: string;
    device: string;
}

export interface IHomieDeviceNode extends Node {
    config: IHomieDeviceNodeConfig;
}


module.exports = function (RED: NodeAPI) {
   


    function HomieDeviceNode(config: IHomieDeviceNodeConfig) {

        RED.nodes.createNode(this, config);
        const node = <Node>this;

        const onClose$ = new Subject<boolean>();
        const homieCfg = RED.nodes.getNode(config.homieCfg) as IHomieConfig;

        if (config.device){
            homieCfg.devices.selectDevice(config.device).pipe(
                takeUntil(onClose$),
                switchMap(device => device.attributes$.pipe(map(attr => attr.state), distinctUntilChanged()))
            ).subscribe({
                next: state => {
                    const msg = {
                        device: config.device,
                        payload: state
                    };
                    node.status({fill: state === "ready" ? "green" : "red",shape:"ring",text:state});
                    node.send(msg);
                }
            })
        }
        
        node.on('input', function (msg: NodeMessage) {           
            if (homieCfg){
                const d = homieCfg.devices.getDevice(config.device);

                msg.payload = d?.attributes.state;
                msg['device'] = config.device;
                node.send(msg);
            }
        });

        node.on('close', async (removed: boolean, done: () => void) => {
            node.debug(`Close called: Removed: ${removed}`);
            onClose$.next(true);
            done();
        })

 

    }
    RED.nodes.registerType("homie-device", HomieDeviceNode);



}