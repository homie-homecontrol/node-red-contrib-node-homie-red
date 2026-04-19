import { HomieProperty } from "node-homie";
import { notNullish } from "node-homie/model";
import { NodeAPI, Node, NodeMessage } from "node-red";
import { distinctUntilChanged, map, Subject, switchMap, takeUntil } from "rxjs";
import { IHomieConfig } from "../homie-config/homie-config";

module.exports = function (RED: NodeAPI) {

    function HomiePropertyTargetNode(config) {

        RED.nodes.createNode(this, config);
        const node = <Node>this;

        const onClose$ = new Subject<boolean>();
        const homieCfg = RED.nodes.getNode(config.homieCfg) as IHomieConfig;

        if (!homieCfg) { return; }

        function makeMessage(prop: HomieProperty, value?: string, msg?: any): any {
            const newMsg = {
                homieDevice: prop.device.id,
                homieNode: prop.node.id,
                homieProperty: prop.id,
                topic: prop.pointer,
                propertyAttrs: { ...prop.attributes },
                payload: value,
                target: value
            };
            return { ...msg, ...newMsg };
        }

        if (config.property) {
            homieCfg.devices.selectProperty(config.property as string).pipe(
                takeUntil(onClose$),
                switchMap(prop => prop.target$.pipe(distinctUntilChanged(), map(target => ({ target, prop }))))
            ).subscribe({
                next: ({ target, prop }) => {
                    node.status({ fill: "blue", shape: "dot", text: notNullish(target) ? String(target) : "-" });
                    node.send(makeMessage(prop, target));
                }
            });
        }

        node.on("input", function (msg: NodeMessage) {
            const prop = homieCfg.devices.getProperty(config.property || msg.topic);
            if (!prop) { return; }
            node.send(makeMessage(prop, prop.target, msg));
        });

        node.on("close", async (removed: boolean, done: () => void) => {
            node.debug(`Close called: Removed: ${removed}`);
            onClose$.next(true);
            done();
        });

    }
    RED.nodes.registerType("homie-property-target", HomiePropertyTargetNode);

};
