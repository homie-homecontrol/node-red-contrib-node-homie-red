# Virtual Device Config Data Model

This document describes the JSON schema used by `homie-vdevice-config`.
It reflects the current Homie v5 + `hc-smarthome/v2` model.

Source of truth:
- Runtime schema: `lib/vDevice.schema.json`
- Type model: `src/model/vrdevice.model.ts`

## Root Object: `VirtualDeviceSpec`

Required fields:
- `id` (`HomieID`)
- `nodes` (`VirtualNodeSpec[]`)

Optional fields:
- `name` (`string`)
- `type` (`string | null`)
- `children` (`HomieID[]`)
- `root` (`HomieID`)
- `parent` (`HomieID`)
- `extensions` (`string[]`)

Notes:
- Additional properties are not allowed.
- `HomieID` pattern: `^(?!\-)[a-z0-9\-]+(?<!\-)$`
- `root`/`parent`/`children` follow Homie v5 device hierarchy semantics.
- `state` and `homie` are managed by runtime and are not part of this spec.

## `VirtualNodeSpec`

Required fields:
- `id` (`HomieID`)

Optional fields:
- `name` (`string`)
- `type` (`string`)
- `properties` (`VirtualPropertySpec[]`)
- `fromSmarthome` (`SmarthomeSpec`)
- `passThrough` (`boolean | HomieID[]`)
- `propertyOpts` (`HomiePropertyOptions`)

Notes:
- Additional properties are not allowed.
- `passThrough` behavior:
  - `true`: pass all set commands to matching output properties
  - `HomieID[]`: pass only selected property IDs

## `VirtualPropertySpec`

Required fields:
- `id` (`HomieID`)
- `datatype` (`HomieDatatype`)

Optional fields:
- `name` (`string`)
- `format` (`string`)
- `settable` (`boolean`, default `false`)
- `retained` (`boolean`, default `true`)
- `unit` (`string`)
- `passThrough` (`boolean`)
- `propertyOpts` (`HomiePropertyOptions`)

Notes:
- Additional properties are not allowed.

### `HomieDatatype`

Allowed values:
- `integer`
- `float`
- `boolean`
- `string`
- `enum`
- `color`
- `datetime`
- `duration`
- `json`

## `HomiePropertyOptions`

Required fields:
- `readValueFromMqtt` (`boolean`)

Optional fields:
- `readTimeout` (`number`)

Notes:
- Additional properties are not allowed.

## Smarthome Extension

`fromSmarthome` can be used in `VirtualNodeSpec` to auto-generate node properties based on a capability profile.

### `SmarthomeSpec`

Required fields:
- `type` (`SmarthomeType`)

Optional fields:
- `config` (`SmarthomeNodePropConfig`)

### `SmarthomeType`

Allowed values:
- `hc-smarthome/v2/cap/battery`
- `hc-smarthome/v2/cap/switch`
- `hc-smarthome/v2/cap/contact`
- `hc-smarthome/v2/cap/climate`
- `hc-smarthome/v2/cap/button`
- `hc-smarthome/v2/cap/tilt`
- `hc-smarthome/v2/cap/motion`
- `hc-smarthome/v2/cap/thermostat`
- `hc-smarthome/v2/cap/mediaplayer`
- `hc-smarthome/v2/cap/powermeter`
- `hc-smarthome/v2/cap/maintenance`
- `hc-smarthome/v2/cap/level`
- `hc-smarthome/v2/cap/shutter`
- `hc-smarthome/v2/cap/color`
- `hc-smarthome/v2/cap/text`

## `SmarthomeNodePropConfig` by Capability

Common optional fields used by all capability config objects:
- `propertyOpts` (`HomiePropertyOptions`)
- `settable` (`boolean | object`)
  - `true`/`false` applies to all generated properties
  - object allows per-property control (keys are property IDs)

Capability-specific config fields:

- `battery`
  - `lowBattery` (`boolean`) required
  - `batteryLevel` (`boolean`) required

- `switch`
  - no extra required fields

- `contact`
  - no extra required fields

- `climate`
  - `temperature` (`boolean`) required
  - `tempUnit` (`"C" | "F"`) required
  - `humidity` (`boolean`) required
  - `pressure` (`boolean`) required

- `button`
  - `buttonStates` (`("press" | "long-press" | "double-press" | "release" | "long-release" | "continuous")[]`) required

- `tilt`
  - no extra required fields

- `motion`
  - `lux` (`boolean`) required
  - `noMotion` (`boolean`) required
  - `noMotionIntervals` (`number[]`) required

- `thermostat`
  - `tempUnit` (`"C" | "F"`) required
  - `valve` (`boolean`) required
  - `windowopen` (`boolean`) required
  - `boost_state` (`boolean`) required
  - `mode` (`boolean`) required
  - `modes` (`string[]`) required

- `mediaplayer`
  - `next` (`boolean`) required
  - `previous` (`boolean`) required
  - `forward` (`boolean`) required
  - `rewind` (`boolean`) required
  - `stop` (`boolean`) required

- `powermeter`
  - `current` (`boolean`) required
  - `frequency` (`boolean`) required
  - `power` (`boolean`) required
  - `voltage` (`boolean`) required
  - `energy_counter` (`boolean`) required

- `maintenance`
  - `lowBattery` (`boolean`) required
  - `batteryLevel` (`boolean`) required
  - `reachable` (`boolean`) required
  - `lastUpdate` (`boolean`) required

- `level`
  - `step` (`number`) required
  - `stepToZero` (`boolean`) required

- `shutter`
  - `canStop` (`boolean`) required
  - `implementUpDown` (`boolean`) required

- `color`
  - `ctmin` (`number`) required
  - `ctmax` (`number`) required
  - `colorMode` (`"rgb" | "hsv"`) optional

- `text`
  - no extra required fields

## Minimal Example

```json
{
  "id": "livingroom",
  "name": "Livingroom Device",
  "nodes": [
    {
      "id": "climate",
      "name": "Climate",
      "fromSmarthome": {
        "type": "hc-smarthome/v2/cap/climate",
        "config": {
          "temperature": true,
          "tempUnit": "C",
          "humidity": true,
          "pressure": false
        }
      }
    }
  ]
}
```

## Notes and Migration Context

- This document intentionally uses `hc-smarthome/v2/cap/*` types.
- Older `homie-homecontrol/v1/type=*` strings are not valid for current v5 setup.
- If in doubt, validate against `lib/vDevice.schema.json` through the `homie-vdevice-config` node validator.
