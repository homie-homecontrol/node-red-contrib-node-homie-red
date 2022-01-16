# node-red-contrib-node-homie-red
Provides nodes to interact with devices published on mqtt following the [homie convention](https://homieiot.github.io/)

[![works with MQTT Homie](https://homieiot.github.io/img/works-with-homie.png)](https://homieiot.github.io/)

This package is based on [node-homie](https://github.com/schaze/node-homie#readme) and [hc-node-homie-smarthome](https://github.com/homie-homecontrol/hc-node-homie-smarthome#readme).

## Release notes
__0.1.0 (2022-01-16)__
* Initial release
## Usage scenarios

The Homie convention differentiates between __Devices__ and __Controllers__:

* __Device__
  > "An instance of a physical piece of hardware is called a device. For example, a car, an Arduino/ESP8266 or a coffee machine. It __publishes__ Nodes and Properties to the MQTT broker." (see https://homieiot.github.io/implementations)

* __Controller__
  > "A controller does not announce anything to the MQTT broker, but __discovers__ and __interacts__ with Devices. There can be more than one Controller interacting with the different devices on the same broker." (see https://homieiot.github.io/implementations)
    
This node package provides nodes to support both device ([virtual devices](#reference-virtualdevice)) and controller (discover and interact with existing devices) scenarios.

## Controller Nodes
Configuration Nodes:
* homie-config

Pallette Nodes:
* Device (homie-device)
* Property (homie-property)

### homie-config
Here you specify the connection to your mqtt broker.
Please not that also for controller mode the user needs publish rights at least for the properties `homie/<device>/<node>/<property>/set` topic.

![homie-config-editor](docs/media/homie-config-editor.png)

Please find the documentation for the fields below:

__Name__
* name of the configuration node

__MQTT Url__
* the connection address of the mqtt broker. This can be a `mqtt://` protocol address or `ws://` | `wss://` address depending on you scenario. If no port is specified defaults will be assumed. (mqtt: 1883, ws: 80, wss: 443)

__Homie topic root__
* MQTT topic under which all homie devices are published. By convention this defaults to `homie`, however for your testing or developing reasons this can be changed here as not to disturb productive usage.

__Username__
* Username for the MQTT connection. If the MQTT broker is unsecured this can be left empty.

__Password__
* Password for the MQTT connection. If the MQTT broker is unsecured this can be left empty.



### Device (homie-device)
![node-homie-device](docs/media/node-homie-device.png)

Represents a homie device. 

__Input__

If a message is sent to the node the current device state will be emitted.

__Output__

Will send outgoing messages with the device state (init, ready...).


Outgoing messages include device state in the payload and device id as seperate field:

```json
{
    "payload": "ready",
    "device": "security"
}
```

> TODO: Implement dynamic device selection via topic like for homie-property.


### Property (homie-property)
![node-homie-property](docs/media/node-homie-property.png)

Represents a property of a homie device. The node will send property value updates as outgoing messages.

__Input__

Message payload will be send to the homie property via `.../set` topic requesting the value update.
If a topic is included in the incoming message it will be used to dynamically select the property to act on. (format: `<deviceId>/<nodeId>/<propertyId>`).
> TODO: Implement a switch in the node which controls if the topic should be used or not. There are scenarios where a topic is present but should not be used.

If no payload is included and the property is a `retained` property the node will emit only the current value.

Special case:
If the property is non-retained and the property was selected dynamically via the `topic` attribute a value message will be sent out immediately with the input value (without it beeing received from the property as there is no subscription to it due to the dynamic selection)
> TODO: Maybe this behaviour should ne optional.

__Output__

Will send outgoing messages with the poperties value as payload.
Besides that the message will include a additional metadata about the property:

```json
{
    "payload": "false",
    "topic": "group-3/switch/state",
    "homieDevice": "group-3",
    "homieNode": "switch",
    "homieProperty": "state",
    "propertyAttrs": {
        "settable": true,
        "retained": true,
        "id": "state",
        "tags": [],
        "meta": [],
        "datatype": "boolean",
        "name": "On/Off state"
    }
}

{
    "payload": "22.5",
    "topic": "meq0006971/weather/temperature",
    "homieDevice": "meq0006971",
    "homieNode": "weather",
    "homieProperty": "temperature",
    "propertyAttrs": {
        "settable": false,
        "retained": true,
        "id": "temperature",
        "tags": [],
        "meta": [],
        "datatype": "float",
        "name": "Current temperature",
        "unit": "°C"
    }
}
```
<a name="reference-virtualdevice"></a>
## Virtual Device

Configuration Nodes:
* homie-vdevice-config

Pallette Nodes:
* Virtual Device (homie-vdevice)
* vprop value (homie-vproperty-value-update)
* vprop /set (homie-vproperty-set-command)


### homie-vdevice-config
A configuration node that creates a virtual device owned by nodered.
The specification of a device is to complex to build a nice user interface around it. Therefor the spec has to be provided as JSON input. The datamodel is more or less straight forward with some specials to it.
In general you can more or less model the devices, nodes and properties as they would be published via the mqtt topic structure with the following differences:

* attributes are written without the "$" prefix for ease of use (`name` instead of `$name`)
* ids have to be specified as fields, nodes and properties are arrays (lists) instead of `dictionaries/maps` like you would expect in the topic hierarchy.

__Explanation__

This will show the tree structure level by level.

Device:
```yaml
id: deviceId
name: device name
nodes:
    - node1
    - node2
    - node3
```

For each node:
```yaml
id: nodeId
name: node name
type: node type
properties:
    - property1
    - property2
    - property3
```

For each property:
```yaml
id: propertyId
name: property name
datatype: boolean
settable: true
```

All together this looks like this:

```yaml
id: deviceId
name: device name
nodes:
    - id: nodeId
      name: node name
      type: node type
      properties:
        - id: propertyId
          name: property name
          datatype: boolean
          settable: true
        - id: propertyId
          name: property name
          datatype: boolean
          settable: true
    - id: nodeId
      name: node name
      type: node type
      properties:
        - id: propertyId
          name: property name
          datatype: boolean
          settable: true
        - id: propertyId
          name: property name
          datatype: boolean
          settable: true
```

Below you find an actual JSON example that can be used directly for testing.
```json
{
    "id": "node-red-virtual-device-1",
    "name": "Virtual a test device",
    "nodes": [
        {
            "id": "switch",
            "name": "Virtual switch",
            "type": "virtual-switch",
            "properties": [
                {
                    "id": "state",
                    "datatype": "boolean",
                    "passThrough": false,
                    "name": "Virtual switch state",
                    "settable": true,
                    "propertyOpts": {
                        "readValueFromMqtt": true
                    }
                }
            ]
        }
    ]
}
```

The resulting device on mqtt will then look like the following:

![virtual-device-mqtt-explorer](docs/media/virtual-device-mqtt-explorer.png)

__General note__
The following fields on the device cannot be specified:
* state
* homie
* extensions


As you can see in the example above there are a few extra configuration options that can be used. Below you can find them listed by homie structure element.

__Node level extra configuration__

`passThrough` (boolean, default `false`): 

* when set to `true`, all properties below this node will 'autoconfirm' /set messages sent to them. Which means they will simply update their value state with the value sent to /set. 

* when set to `false`, you have to take care to update the property value in your flow yourself using the `vprop value (homie-vproperty-value-update)` node.

`fromSmarthome` (object):
* node-homie-red uses the `node-homie` and `hc-node-homie-smarthome` libraries under the hood. The later one defines a set of standard node types for smarthome usage in the homie-homecontrol smarthome system. This option offers easy specification of these default nodes in your devices. For more details see the section [Smarthome Spec](#reference-smarthome-spec).

__Property level extra configuration__

`passThrough` (boolean, default `false`): 

* when set to `true`, all the property will 'autoconfirm' /set messages sent to them. Which means it will simply update it's value state with the value sent to /set. 

* when set to `false`, you have to take care to update the property value in your flow yourself using the `vprop value (homie-vproperty-value-update)` node.

* this will overwrite any setting on node level per property


`propertyOpts` (object, default `{ "readValueFromMqtt": true, "readTimeout": 3000 }`):

* node-homie offers to read the current value of a property from mqtt when creating the device. Basically using mqtt as persistent storage itself. This is useful to retain the last value of the property in case of a Node-RED restart for example. 
    >TODO: maybe provide a value field in the spec to always initialize with a static value.

* `readValueFromMqtt`: Default is to read the last value in on device initialization - if you set this to false make sure to take of setting the inital value for the property after a Node-RED restart.
* `readTimeout`: max time in milliseconds to wait for a message to be received from mqtt for the property topic. Please note for new empty properties this leads to a delay of `readTimeout` milliseconds before the device finishes intializing (transitions to state ready).
* data format:
    ```json
    {
        "readValueFromMqtt": true,
        "readTimeout": 3000
    }
    ```


<a name="reference-smarthome-spec"></a>
__Smarthome Spec__

The smarthome spec offers quick definition of nodes and properties according to the homie-homecontrol smarthome node definition without having to specify every single property manually. (see [hc-node-homie-smarthome](https://github.com/homie-homecontrol/hc-node-homie-smarthome#readme))


For example, if you only need a simple switch the following device spec:
```json
{
    "id": "node-red-virtual-device-2",
    "name": "Virtual switch device",
    "nodes": [
        {
            "id": "switch",
            "fromSmarthome": {
                "type": "homie-homecontrol/v1/type=switch"
            }
        }
    ]
}
```
Would result in a device with the following properties:

![from-smarthome-example](docs/media/from-smarthome-example.png)



***Data format for `fromSmarthome`***:
```json
{
    "type": "homie-homecontrol/v1/type=<typename>",
    "config": {
        // typespecific node configuration
    }
}

```

`type`

* The following types are supported:
    * `homie-homecontrol/v1/type=battery`
    * `homie-homecontrol/v1/type=switch`
    * `homie-homecontrol/v1/type=contact`
    * `homie-homecontrol/v1/type=weather`
    * `homie-homecontrol/v1/type=button`
    * `homie-homecontrol/v1/type=tiltsensor`
    * `homie-homecontrol/v1/type=motionsensor`
    * `homie-homecontrol/v1/type=thermostat`
    * `homie-homecontrol/v1/type=mediaplayer`
    * `homie-homecontrol/v1/type=powermeter`
    * `homie-homecontrol/v1/type=maintenance`
    * `homie-homecontrol/v1/type=dimmer`
    * `homie-homecontrol/v1/type=shutter`
    * `homie-homecontrol/v1/type=colorlight`
    * `homie-homecontrol/v1/type=text`

`config`
* Each type has it's own configuration. for more details see the [technical spec](./docs/vdevice-config-datamodel.md) of the data model.



***Overriding or extending on default nodes***

You can still provide a `properties` field in combination with `fromSmarthome`. Any matching property ids will overwrite the default ones where supported. You can also extend the node with additional properties (however then it is not adhering to the standard any more)

### Virtual Device (homie-vdevice)

![node-homie-vdevice](docs/media/node-homie-vdevice.png)

Update virtual device state.


__Input__

If a message is sent to the node the device will be set to the payload value.
If not payload is specified only the current state will be emitted via the output.

__Output__

Will send outgoing messages with the device state (init, ready...).


Outgoing messages include device state in the payload and device id as seperate field:

```json
{
    "payload": "ready",
    "device": "security"
}
```


### vprop value (homie-vproperty-value-update)

![node-homie-vproperty-value-update](docs/media/node-homie-vproperty-value-update.png)

Update virtual device's property value.


__Input__

If a message is sent to the node the properties value will be set to the payload value. Please not that this is different from the `homie-property` node as it will update the interval value of the property which will be then published to mqtt. The `homie-property` will send a /set message which is different.



### vprop /set (homie-vproperty-set-command)

![node-homie-vproperty-set-command](docs/media/node-homie-vproperty-set-command.png)

Emits  when a message is published under the virtual device's property '/set' topic.

__Output__

Message with /set value that was send to the device via mqtt.


Outgoing messages include the /set value as payload and a topic and property field with the property path:

```json
{
    "payload": "true",
    "topic": "lamp-1/switch/state",
    "property": "lamp-1/switch/state"
}
```