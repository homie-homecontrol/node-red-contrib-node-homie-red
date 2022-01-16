import { NodeAPI, Node, NodeMessage } from "node-red";
import { IHomieVDeviceConfigNode } from "../homie-vdevice-config/homie-vdevice-config";
import { parsePropertySelector } from 'node-homie/util';
import { Subject, takeUntil } from "rxjs";

module.exports = function (RED: NodeAPI) {

    function HomieVPropertySetCommandNode(config) {

        RED.nodes.createNode(this, config);
        const node = <Node>this;

        const onClose$ = new Subject<boolean>();
        const deviceCfg = RED.nodes.getNode(config.deviceCfg) as IHomieVDeviceConfigNode;

        if (!deviceCfg || !config.property) { return; }

        const { deviceId, nodeId, propertyId } = parsePropertySelector(config.property);
        node.debug(JSON.stringify({ deviceId, nodeId, propertyId }) );

        const prop = deviceCfg.device.get(nodeId)?.get(propertyId);

        if (!prop) { return; }

        prop.onSetMessage$.pipe(takeUntil(onClose$)).subscribe({
            next: setMsg =>{
                const msg = {
                    property: setMsg.property.pointer,
                    topic: setMsg.property.pointer,
                    payload: setMsg.valueStr
                };
                node.send(msg);
                node.status({ fill: "blue", shape: "dot", text: setMsg.valueStr });
            }
        })

        node.on('close', async (removed: boolean, done: () => void) => {
            node.debug(`Close called: Removed: ${removed}`);
            onClose$.next(true);
            done();
        })



    }
    RED.nodes.registerType("homie-vproperty-set-command", HomieVPropertySetCommandNode);



}