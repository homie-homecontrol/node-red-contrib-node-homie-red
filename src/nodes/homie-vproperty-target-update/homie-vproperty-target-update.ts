import { notNullish } from "node-homie/model";
import { parsePropertySelector } from "node-homie/util";
import { NodeAPI, Node, NodeMessage } from "node-red";
import { IHomieVDeviceConfigNode } from "../homie-vdevice-config/homie-vdevice-config";

module.exports = function (RED: NodeAPI) {

    function HomieVPropertyTargetUpdateNode(config) {

        RED.nodes.createNode(this, config);
        const node = <Node>this;

        const deviceCfg = RED.nodes.getNode(config.deviceCfg) as IHomieVDeviceConfigNode;

        if (!deviceCfg || !config.property) { return; }

        const { nodeId, propertyId } = parsePropertySelector(config.property);
        node.debug(JSON.stringify({ nodeId, propertyId }));

        const prop = deviceCfg.device.get(nodeId)?.get(propertyId);
        if (!prop) { return; }

        node.on("input", function (msg: NodeMessage) {
            if (notNullish(msg.payload)) {
                const value = String(msg.payload);
                prop.publishTarget$(value).subscribe({
                    next: () => {
                        node.status({ fill: "blue", shape: "dot", text: value });
                    }
                });
                return;
            }

            prop.publishTarget$(undefined).subscribe({
                next: () => {
                    node.status({ fill: "grey", shape: "ring", text: "target cleared" });
                }
            });
        });

    }

    RED.nodes.registerType("homie-vproperty-target-update", HomieVPropertyTargetUpdateNode);

};
