import { HomieLogLevel, isHomieLogLevel } from "node-homie";
import { notNullish } from "node-homie/model";
import { NodeAPI, Node, NodeMessage } from "node-red";
import { IHomieVDeviceConfigNode } from "../homie-vdevice-config/homie-vdevice-config";

module.exports = function (RED: NodeAPI) {

    function HomieVDeviceLogUpdateNode(config) {

        RED.nodes.createNode(this, config);
        const node = <Node>this;

        const deviceCfg = RED.nodes.getNode(config.deviceCfg) as IHomieVDeviceConfigNode;
        if (!deviceCfg) { return; }

        node.on("input", function (msg: NodeMessage & { level?: string }) {
            const device = deviceCfg.device;
            if (!device) { return; }

            const level = String(msg.level || config.level || "").trim().toLowerCase();
            if (!isHomieLogLevel(level)) {
                node.status({ fill: "red", shape: "ring", text: "invalid log level" });
                return;
            }

            if (!notNullish(msg.payload)) {
                node.status({ fill: "grey", shape: "ring", text: "missing payload" });
                return;
            }

            const message = String(msg.payload);
            device.publishLog$(level as HomieLogLevel, message).subscribe({
                next: () => {
                    node.status({ fill: "blue", shape: "dot", text: `${level}: ${message}` });
                }
            });
        });

    }

    RED.nodes.registerType("homie-vdevice-log-update", HomieVDeviceLogUpdateNode);
};
