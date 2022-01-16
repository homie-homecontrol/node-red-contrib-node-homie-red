import { NodeAPI, Node, NodeMessage } from "node-red";
import { notNullish } from "node-homie/model";

import { IHomieVDeviceConfigNode } from "../homie-vdevice-config/homie-vdevice-config";
import { parsePropertySelector } from 'node-homie/util';
import { distinctUntilChanged, Subject, takeUntil } from "rxjs";
import { isNotNullish } from "node-homie/rx";

module.exports = function (RED: NodeAPI) {

    function HomieVPropertyValueUpdateNode(config) {

        RED.nodes.createNode(this, config);
        const node = <Node>this;

        const onClose$ = new Subject<boolean>();
        const deviceCfg = RED.nodes.getNode(config.deviceCfg) as IHomieVDeviceConfigNode;

        if (!deviceCfg || !config.property) { return; }

        const { deviceId, nodeId, propertyId } = parsePropertySelector(config.property);
        node.debug(JSON.stringify({ deviceId, nodeId, propertyId }));

        const prop = deviceCfg.device.get(nodeId)?.get(propertyId);

        if (!prop) { return; }

        if (prop.attributes.retained) {
            prop.value$.pipe(takeUntil(onClose$), distinctUntilChanged(), isNotNullish()).subscribe({
                next: value => {
                    node.status({ fill: "blue", shape: "dot", text: value });
                }
            })
        }

        node.on('input', function (msg: NodeMessage) {
            if (notNullish(msg.payload)) {
                prop.value = String(msg.payload);
            }
        });

        node.on('close', async (removed: boolean, done: () => void) => {
            node.debug(`Close called: Removed: ${removed}`);
            onClose$.next(true);
            done();
        })



    }
    RED.nodes.registerType("homie-vproperty-value-update", HomieVPropertyValueUpdateNode);



}