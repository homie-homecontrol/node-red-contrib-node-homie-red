import { HomieDevice, HomieNode, HomieProperty } from "node-homie";
import {
    BatteryNodePropertyConfig, ButtonNodePropertyConfig, ColorNodePropertyConfig, ContactNodePropertyConfig, LevelNodePropertyConfig,
    H_SMARTHOME_TYPE_BATTERY, H_SMARTHOME_TYPE_BUTTON, H_SMARTHOME_TYPE_COLOR, H_SMARTHOME_TYPE_CONTACT, H_SMARTHOME_TYPE_LEVEL,
    H_SMARTHOME_TYPE_MAINTENANCE, H_SMARTHOME_TYPE_MEDIAPLAYER, H_SMARTHOME_TYPE_MOTION, H_SMARTHOME_TYPE_POWERMETER, H_SMARTHOME_TYPE_SHUTTER, H_SMARTHOME_TYPE_SWITCH, H_SMARTHOME_TYPE_TEXT, H_SMARTHOME_TYPE_THERMOSTAT,
    H_SMARTHOME_TYPE_TILT, H_SMARTHOME_TYPE_CLIMATE, MaintenanceNodePropertyConfig, MediaplayerPropertyConfig, MotionNodePropertyConfig, PowermeterNodePropertyConfig,
    ShutterNodePropertyConfig, SwitchNodePropertyConfig, TextNodePropertyConfig, ThermostatNodePropertyConfig, TiltNodePropertyConfig, ClimateNodePropertyConfig
} from 'hc-node-homie-smarthome/model';
import {
    BatteryNode, ButtonNode, ColorNode, ContactNode, LevelNode, MaintenanceNode,
    MediaplayerNode,
    MotionNode, PowermeterNode, ShutterNode, SwitchNode, TextNode, ThermostatNode, TiltNode, ClimateNode
} from 'hc-node-homie-smarthome';
import { takeUntil } from "rxjs/operators";
import { toDeviceSpec, toNodeSpec, toPropertySpec } from "./virtualdevice.func";
import { SmarthomeSpec, VirtualDeviceSpec, VirtualNodeSpec } from "../../model/vrdevice.model";
import { NodeAttributes, MQTTConnectOpts } from "node-homie/model";

const DEFAULT_PROPCONFIG = { readTimeout: 1000, readValueFromMqtt: true }

export class VirtualDevice extends HomieDevice {

    constructor(protected spec: VirtualDeviceSpec, mqttOptions: MQTTConnectOpts) {
        super(toDeviceSpec(spec).attrs, mqttOptions);
    }


    override async onInit(): Promise<void> {
        this.spec.nodes.forEach(nodeSpec => {
            this.makeNode(nodeSpec);
        });

        await super.onInit();
    }

    private makeNode(nodeSpec: VirtualNodeSpec) {
        const { properties, fromSmarthome, passThrough,  propertyOpts: nodePropertyOpts, attrs } = toNodeSpec(nodeSpec);

        const node = fromSmarthome ? this.getSmarthomeNodeFromSpec(attrs, fromSmarthome) : new HomieNode(this, attrs);
        if (!node) { return; }

        if (properties) {
            properties.forEach(vPropertySpec => {
                const { passThrough, propertyOpts, attrs: propAttrs } = toPropertySpec(vPropertySpec);
                const existingProp = node.get(propAttrs.id);
                const property = node.add(existingProp ? existingProp : new HomieProperty(node, { ...propAttrs }, propertyOpts ? { ...DEFAULT_PROPCONFIG, ...propertyOpts } : { ...DEFAULT_PROPCONFIG, ...nodePropertyOpts }));

                if (existingProp) { property.patchAttributes(propAttrs); }

                if (passThrough) {
                    this.setPassthroughSetCommand(property);
                }
            });

        }
        if (passThrough) {
            if (Array.isArray(passThrough)) {
                passThrough.forEach(propId => {
                    const property = node.get(propId);
                    this.setPassthroughSetCommand(property);
                })
            } else {
                Object.values(node.properties).forEach(property => {
                    this.setPassthroughSetCommand(property);
                })
            }
        }

        this.add(node);
     
    }


    private setPassthroughSetCommand(property: HomieProperty | null | undefined) {
        if (property && property.attributes.settable) {
            property.onSetMessage$.pipe(takeUntil(property.onDestroy$)).subscribe({
                next: event => {
                    this.log.verbose(`Passing through onSetEvent - ${property.pointer} - ${event.valueStr}`)
                    event.property.value = event.valueStr;
                }
            });
        }
    }


    private getSmarthomeNodeFromSpec(attrs: NodeAttributes, smarthomeSpec: SmarthomeSpec): HomieNode | undefined {
        const cfg = { ...smarthomeSpec.config, propertyOpts: { readTimeout: 3000, readValueFromMqtt: true, ...smarthomeSpec.config?.propertyOpts } };

        switch (smarthomeSpec.type) {

            case H_SMARTHOME_TYPE_BATTERY:
                return new BatteryNode(this, attrs, cfg as BatteryNodePropertyConfig);
            case H_SMARTHOME_TYPE_CONTACT:
                return new ContactNode(this, attrs, cfg as ContactNodePropertyConfig);
            case H_SMARTHOME_TYPE_LEVEL:
                return new LevelNode(this, attrs, cfg as LevelNodePropertyConfig);
            case H_SMARTHOME_TYPE_BUTTON:
                return new ButtonNode(this, attrs, cfg as ButtonNodePropertyConfig);
            case H_SMARTHOME_TYPE_COLOR:
                return new ColorNode(this, attrs, cfg as ColorNodePropertyConfig);
            case H_SMARTHOME_TYPE_MAINTENANCE:
                return new MaintenanceNode(this, attrs, cfg as MaintenanceNodePropertyConfig);
            case H_SMARTHOME_TYPE_MOTION:
                return new MotionNode(this, attrs, cfg as MotionNodePropertyConfig);
            case H_SMARTHOME_TYPE_POWERMETER:
                return new PowermeterNode(this, attrs, cfg as PowermeterNodePropertyConfig);
            case H_SMARTHOME_TYPE_THERMOSTAT:
                return new ThermostatNode(this, attrs, cfg as ThermostatNodePropertyConfig);
            case H_SMARTHOME_TYPE_TILT:
                return new TiltNode(this, attrs, cfg as TiltNodePropertyConfig);
            case H_SMARTHOME_TYPE_CLIMATE:
                return new ClimateNode(this, attrs, cfg as ClimateNodePropertyConfig);
            case H_SMARTHOME_TYPE_SWITCH:
                return new SwitchNode(this, attrs, cfg as SwitchNodePropertyConfig);
            case H_SMARTHOME_TYPE_SHUTTER:
                return new ShutterNode(this, attrs, cfg as ShutterNodePropertyConfig);
            case H_SMARTHOME_TYPE_TEXT:
                return new TextNode(this, attrs, cfg as TextNodePropertyConfig);
            case H_SMARTHOME_TYPE_MEDIAPLAYER:
                return new MediaplayerNode(this, attrs, cfg as MediaplayerPropertyConfig);
            default:
                return undefined
        }

    }


}
