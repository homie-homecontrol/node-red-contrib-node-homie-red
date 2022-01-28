import { DeviceSpec, NodeSpec, PropertySpec, VirtualDeviceSpec, VirtualNodeSpec, VirtualPropertySpec } from "../../model/vrdevice.model";

export function toDeviceSpec(spec: VirtualDeviceSpec): DeviceSpec {
    const { nodes, ...attrs } = spec;
    return { nodes, attrs };
}

export function toNodeSpec(spec: VirtualNodeSpec): NodeSpec {
    const { properties, fromSmarthome, passThrough, propertyOpts, ...attrs } = spec;
    return { properties, fromSmarthome, passThrough, attrs, propertyOpts };
}


export function toPropertySpec(spec: VirtualPropertySpec): PropertySpec {
    const { passThrough, propertyOpts, ...attrs } = spec;
    return { passThrough: passThrough === true ? true : false, propertyOpts, attrs };
}
