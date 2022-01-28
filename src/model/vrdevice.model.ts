import { SmarthomeNodePropConfig, SmarthomeType } from "hc-node-homie-smarthome/model";
import { BaseItemAtrributes, HomieDeviceAtrributes, HomieID, HomieNodeAtrributes, HomiePropertyAtrributes, HomiePropertyOptions } from "node-homie/model";



export type VirtualDeviceSpecs = VirtualDeviceSpec[];


// =========== DEVICE ================
export interface VirtualDeviceSpec extends BaseItemAtrributes {
    nodes: VirtualNodeSpec[];
}

export interface DeviceSpec {
    attrs: HomieDeviceAtrributes;
    nodes: VirtualNodeSpec[];
}


// =========== NODE ================
export interface VirtualNodeSpec extends BaseItemAtrributes {
    type?: string;
    properties?: VirtualPropertySpec[];
    fromSmarthome?: SmarthomeSpec;
    passThrough?: boolean | HomieID[];
    propertyOpts?: HomiePropertyOptions;
}

export interface NodeSpec {
    attrs: HomieNodeAtrributes;
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
export interface VirtualPropertySpec extends HomiePropertyAtrributes {
    passThrough?: boolean;
    propertyOpts?: HomiePropertyOptions;
}

export interface PropertySpec {
    attrs: HomiePropertyAtrributes;
    passThrough?: boolean;
    propertyOpts?: HomiePropertyOptions;
}
