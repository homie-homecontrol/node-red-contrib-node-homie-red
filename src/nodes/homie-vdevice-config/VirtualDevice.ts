import { HomieDevice, HomieNode, HomieProperty } from "node-homie";
import { DictionaryState } from "node-homie/misc";
import {
    BatteryNodePropertyConfig, ButtonNodePropertyConfig, ColorLightNodePropertyConfig, ContactNodePropertyConfig, DimmerNodePropertyConfig,
    H_SMARTHOME_TYPE_BATTERY, H_SMARTHOME_TYPE_BUTTON, H_SMARTHOME_TYPE_COLORLIGHT, H_SMARTHOME_TYPE_CONTACT, H_SMARTHOME_TYPE_DIMMER,
    H_SMARTHOME_TYPE_MAINTENANCE, H_SMARTHOME_TYPE_MEDIAPLAYER, H_SMARTHOME_TYPE_MOTION_SENSOR, H_SMARTHOME_TYPE_POWERMETER, H_SMARTHOME_TYPE_SHUTTER, H_SMARTHOME_TYPE_SWITCH, H_SMARTHOME_TYPE_TEXT, H_SMARTHOME_TYPE_THERMOSTAT,
    H_SMARTHOME_TYPE_TILT_SENSOR, H_SMARTHOME_TYPE_WEATHER, MaintenanceNodePropertyConfig, MediaplayerPropertyConfig, MotionSensorhNodePropertyConfig, PowermeterNodePropertyConfig,
    ShutterNodePropertyConfig, SwitchNodePropertyConfig, TextNodePropertyConfig, ThermostatNodePropertyConfig, TiltSensorNodePropertyConfig, WeatherhNodePropertyConfig
} from 'hc-node-homie-smarthome/model';
import {
    BatteryNode, ButtonNode, ColorLightNode, ContactNode, DimmerNode, MaintenanceNode,
    MediaplayerNode,
    MotionSensorNode, PowermeterNode, ShutterNode, SwitchNode, TextNode, ThermostatNode, TiltSensorNode, WeatherNode
} from 'hc-node-homie-smarthome';
import { from, Observable } from "rxjs";
import { every, takeUntil, tap } from "rxjs/operators";
import { toDeviceSpec, toNodeSpec, toPropertySpec } from "./virtualdevice.func";
import { SmarthomeSpec, VirtualDeviceSpec, VirtualNodeSpec } from "../../model/vrdevice.model";
import { HomieNodeAtrributes, MQTTConnectOpts } from "node-homie/model";

const DEFAULT_PROPCONFIG = { readTimeout: 1000, readValueFromMqtt: true }

export class VirtualDevice extends HomieDevice {

    constructor(protected spec: VirtualDeviceSpec, mqttOptions: MQTTConnectOpts) {
        super(toDeviceSpec(spec).attrs, mqttOptions);
    }


    override async onInit(): Promise<void> {
        await Promise.all(this.spec.nodes.map(nodeSpec => {
            return this.makeNode(nodeSpec);
        }));

        await super.onInit();
    }

    private async makeNode(nodeSpec: VirtualNodeSpec) {
        const { properties, fromSmarthome, passThrough,  propertyOpts: nodePropertyOpts, attrs } = toNodeSpec(nodeSpec);

        const node = fromSmarthome ? this.getSmarthomeNodeFromSpec(attrs, fromSmarthome) : new HomieNode(this, attrs);
        if (!node) { return; }

        if (properties) {
            properties.forEach(vPropertySpec => {
                const { passThrough, propertyOpts, attrs: propAttrs } = toPropertySpec(vPropertySpec);
                const existingProp = node.get(propAttrs.id);
                const property = node.add(existingProp ? existingProp : new HomieProperty(node, { ...propAttrs }, propertyOpts ? { ...DEFAULT_PROPCONFIG, ...propertyOpts } : { ...DEFAULT_PROPCONFIG, ...nodePropertyOpts }));

                if (existingProp) { property.setAttributes(propAttrs); }

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

        await this.addInitNode(node);
     
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


    private getSmarthomeNodeFromSpec(attrs: HomieNodeAtrributes, smarthomeSpec: SmarthomeSpec): HomieNode | undefined {
        const cfg = { ...smarthomeSpec.config, propertyOpts: { readTimeout: 3000, readValueFromMqtt: true, ...smarthomeSpec.config?.propertyOpts } };

        switch (smarthomeSpec.type) {

            case H_SMARTHOME_TYPE_BATTERY:
                return new BatteryNode(this, attrs, cfg as BatteryNodePropertyConfig);
            case H_SMARTHOME_TYPE_CONTACT:
                return new ContactNode(this, attrs, cfg as ContactNodePropertyConfig);
            case H_SMARTHOME_TYPE_DIMMER:
                return new DimmerNode(this, attrs, cfg as DimmerNodePropertyConfig);
            case H_SMARTHOME_TYPE_BUTTON:
                return new ButtonNode(this, attrs, cfg as ButtonNodePropertyConfig);
            case H_SMARTHOME_TYPE_COLORLIGHT:
                return new ColorLightNode(this, attrs, cfg as ColorLightNodePropertyConfig);
            case H_SMARTHOME_TYPE_MAINTENANCE:
                return new MaintenanceNode(this, attrs, cfg as MaintenanceNodePropertyConfig);
            case H_SMARTHOME_TYPE_MOTION_SENSOR:
                return new MotionSensorNode(this, attrs, cfg as MotionSensorhNodePropertyConfig);
            case H_SMARTHOME_TYPE_POWERMETER:
                return new PowermeterNode(this, attrs, cfg as PowermeterNodePropertyConfig);
            case H_SMARTHOME_TYPE_THERMOSTAT:
                return new ThermostatNode(this, attrs, cfg as ThermostatNodePropertyConfig);
            case H_SMARTHOME_TYPE_TILT_SENSOR:
                return new TiltSensorNode(this, attrs, cfg as TiltSensorNodePropertyConfig);
            case H_SMARTHOME_TYPE_WEATHER:
                return new WeatherNode(this, attrs, cfg as WeatherhNodePropertyConfig);
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
