import { SmarthomeNodePropConfig, SmarthomeType } from "hc-node-homie-smarthome/model";
import { BaseAttributes, HomieID, NodeAttributes, PropertyAttributes, HomiePropertyOptions } from "node-homie/model";



export type VirtualDeviceSpecs = VirtualDeviceSpec[];


// =========== DEVICE ================
export interface VirtualDeviceSpec extends BaseAttributes {
    type?: string | null;
    children?: HomieID[];
    root?: HomieID;
    parent?: HomieID;
    extensions?: string[];
    nodes: VirtualNodeSpec[];
}

export interface DeviceSpec {
    attrs: BaseAttributes;
    nodes: VirtualNodeSpec[];
}


// =========== NODE ================
export interface VirtualNodeSpec extends BaseAttributes {
    type?: string;
    properties?: VirtualPropertySpec[];
    fromSmarthome?: SmarthomeSpec;
    passThrough?: boolean | HomieID[];
    propertyOpts?: HomiePropertyOptions;
}

export interface NodeSpec {
    attrs: NodeAttributes;
    properties?: VirtualPropertySpec[];
    fromSmarthome?: SmarthomeSpec;
    passThrough?: boolean | HomieID[];
    propertyOpts?: HomiePropertyOptions;
}


export interface SmarthomeSpec {
    type: SmarthomeType
    config?: SmarthomeNodePropConfig;
}





// =========== PROPERTY ================
export interface VirtualPropertySpec extends PropertyAttributes {
    passThrough?: boolean;
    propertyOpts?: HomiePropertyOptions;
}

export interface PropertySpec {
    attrs: PropertyAttributes;
    passThrough?: boolean;
    propertyOpts?: HomiePropertyOptions;
}
