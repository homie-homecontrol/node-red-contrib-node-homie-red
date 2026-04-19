import { NodeAPI, Node, NodeMessage, NodeDef } from "node-red";
import { map, Subject, switchMap, takeUntil } from "rxjs";
import { IHomieConfig } from "../homie-config/homie-config";

export interface IHomieDeviceAlertNodeConfig extends NodeDef {
    homieCfg: string;
    device: string;
}

module.exports = function (RED: NodeAPI) {

    function HomieDeviceAlertNode(config: IHomieDeviceAlertNodeConfig) {

        RED.nodes.createNode(this, config);
        const node = <Node>this;

        const onClose$ = new Subject<boolean>();
        const homieCfg = RED.nodes.getNode(config.homieCfg) as IHomieConfig;

        function makeEventMessage(deviceId: string, alertId: string, message: string | null) {
            return {
                device: deviceId,
                alertId,
                topic: `${deviceId}/$alert/${alertId}`,
                payload: message,
                cleared: message === null,
                action: message === null ? "clear" : "set"
            };
        }

        if (homieCfg && config.device) {
            homieCfg.devices.selectDevice(config.device).pipe(
                takeUntil(onClose$),
                switchMap(device => device.alertEvent$.pipe(map(evt => ({ evt, device }))))
            ).subscribe({
                next: ({ evt }) => {
                    node.status({
                        fill: evt.message === null ? "grey" : "yellow",
                        shape: evt.message === null ? "ring" : "dot",
                        text: `${evt.alertId}: ${evt.message === null ? "cleared" : evt.message}`
                    });
                    node.send(makeEventMessage(evt.deviceId, evt.alertId, evt.message));
                }
            });
        }

        node.on("input", function (msg: NodeMessage) {
            if (!homieCfg || !config.device) { return; }
            const device = homieCfg.devices.getDevice(config.device);
            if (!device) { return; }

            const alerts = Array.from(device.alerts.entries()).map(([alertId, message]) => ({ alertId, message }));
            const snapshotMsg = {
                ...msg,
                device: config.device,
                topic: `${config.device}/$alert`,
                payload: alerts,
                alerts
            };
            node.status({ fill: "blue", shape: "dot", text: `${alerts.length} alert(s)` });
            node.send(snapshotMsg);
        });

        node.on("close", async (removed: boolean, done: () => void) => {
            node.debug(`Close called: Removed: ${removed}`);
            onClose$.next(true);
            done();
        });

    }

    RED.nodes.registerType("homie-device-alert", HomieDeviceAlertNode);

};
