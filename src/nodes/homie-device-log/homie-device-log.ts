import { NodeAPI, Node, NodeDef } from "node-red";
import { Subject, switchMap, takeUntil } from "rxjs";
import { IHomieConfig } from "../homie-config/homie-config";

export interface IHomieDeviceLogNodeConfig extends NodeDef {
    homieCfg: string;
    device: string;
}

module.exports = function (RED: NodeAPI) {

    function HomieDeviceLogNode(config: IHomieDeviceLogNodeConfig) {
        RED.nodes.createNode(this, config);
        const node = <Node>this;

        const onClose$ = new Subject<boolean>();
        const homieCfg = RED.nodes.getNode(config.homieCfg) as IHomieConfig;

        if (homieCfg && config.device) {
            homieCfg.devices.selectDevice(config.device).pipe(
                takeUntil(onClose$),
                switchMap(device => device.logEvent$)
            ).subscribe({
                next: evt => {
                    node.status({ fill: "blue", shape: "dot", text: `${evt.level}: ${evt.message}` });
                    node.send({
                        device: evt.deviceId,
                        level: evt.level,
                        topic: `${evt.deviceId}/$log/${evt.level}`,
                        payload: evt.message,
                        message: evt.message
                    } as any);
                }
            });
        }

        node.on("close", async (removed: boolean, done: () => void) => {
            node.debug(`Close called: Removed: ${removed}`);
            onClose$.next(true);
            done();
        });
    }

    RED.nodes.registerType("homie-device-log", HomieDeviceLogNode);
};
