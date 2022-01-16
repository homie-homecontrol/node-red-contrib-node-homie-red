import { NodeAPI, Node, NodeMessage } from "node-red";
import { distinctUntilChanged, map, mapTo, Subject, switchMap, takeUntil } from "rxjs";
import { IHomieConfig } from "../homie-config/homie-config";
import { isNotNullish } from "node-homie/rx";
import { notNullish } from "node-homie/model";
import { HomieProperty } from "node-homie";

module.exports = function (RED: NodeAPI) {

    function HomiePropertyNode(config) {

        RED.nodes.createNode(this, config);
        const node = <Node>this;

        const onClose$ = new Subject<boolean>();
        const homieCfg = RED.nodes.getNode(config.homieCfg) as IHomieConfig;

        if (!homieCfg) { return; }

        function makeMessage(prop: HomieProperty, value?: string, msg?: any): any {
            const newMsg = {
                homieDevice: prop.device.id,
                homieNode: prop.parent.id,
                homieProperty: prop.id,
                topic: prop.pointer,
                propertyAttrs: { ...prop.attributes },
                payload: notNullish(value) ? value : prop.value
            }
            return { ...msg, ...newMsg };
        }

        if (config.property) {
            homieCfg.devices.selectProperty(config.property as string).pipe(
                takeUntil(onClose$),

                switchMap(prop => prop.value$.pipe(isNotNullish(), distinctUntilChanged(), map(value => ({ value, prop }))))
            ).subscribe({
                next: state => {
                    node.status({ fill: "blue", shape: "dot", text: state.value });
                    node.send(makeMessage(state.prop, state.value));
                }
            })
        }

        node.on('input', function (msg: NodeMessage) {
            if (homieCfg) {
                const prop = homieCfg.devices.getProperty(config.property || msg.topic);
                if (prop) {
                    node.debug(`Payload: ${String(msg.payload)} -- settable: ${prop.attributes?.settable}`);
                    if (notNullish(msg.payload) && prop.attributes?.settable) {
                        const payload = String(msg.payload);
                        prop.setCommand$(payload).subscribe();
                        if (!prop.attributes?.retained || !config.property) { // if property is non-retained, or the property was selected dynamically via msg.topic, send a manual update message
                            node.send(makeMessage(prop, payload, msg));
                        }
                    } else {
                        node.send(makeMessage(prop, undefined, msg));
                    }
                }
            }
        });

        node.on('close', async (removed: boolean, done: () => void) => {
            node.debug(`Close called: Removed: ${removed}`);
            onClose$.next(true);
            done();
        })



    }
    RED.nodes.registerType("homie-property", HomiePropertyNode);



}