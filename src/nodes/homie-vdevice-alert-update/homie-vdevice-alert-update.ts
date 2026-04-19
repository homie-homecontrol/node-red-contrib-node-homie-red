import { notNullish } from "node-homie/model";
import { NodeAPI, Node, NodeMessage } from "node-red";
import { IHomieVDeviceConfigNode } from "../homie-vdevice-config/homie-vdevice-config";

module.exports = function (RED: NodeAPI) {

    function HomieVDeviceAlertUpdateNode(config) {

        RED.nodes.createNode(this, config);
        const node = <Node>this;

        const deviceCfg = RED.nodes.getNode(config.deviceCfg) as IHomieVDeviceConfigNode;
        if (!deviceCfg) { return; }

        node.on("input", function (msg: NodeMessage & { alertId?: string; clear?: boolean }) {
            const device = deviceCfg.device;
            if (!device) { return; }

            const alertId = String(msg.alertId || config.alertId || "").trim();
            if (!alertId) {
                node.status({ fill: "red", shape: "ring", text: "missing alertId" });
                return;
            }

            if (msg.clear === true || !notNullish(msg.payload)) {
                device.clearAlert$(alertId).subscribe({
                    next: () => {
                        node.status({ fill: "grey", shape: "ring", text: `${alertId} cleared` });
                    }
                });
                return;
            }

            const message = String(msg.payload);
            device.publishAlert$(alertId, message).subscribe({
                next: () => {
                    node.status({ fill: "yellow", shape: "dot", text: `${alertId}: ${message}` });
                }
            });
        });

    }
    RED.nodes.registerType("homie-vdevice-alert-update", HomieVDeviceAlertUpdateNode);

};
