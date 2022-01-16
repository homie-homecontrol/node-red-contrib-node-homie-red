# Virtual Device Spec

**_Properties_**

 - <b id="#/properties/id">id</b> `required`
	 - <i id="#/properties/id">path: #/properties/id</i>
	 - &#36;ref: [#/definitions/HomieID](#/definitions/HomieID)
 - <b id="#/properties/name">name</b>
	 - Type: `string`
	 - <i id="#/properties/name">path: #/properties/name</i>
 - <b id="#/properties/tags">tags</b>
	 - Type: `array`
	 - <i id="#/properties/tags">path: #/properties/tags</i>
		 - **_Items_**
		 - Type: `string`
		 - <i id="#/properties/tags/items">path: #/properties/tags/items</i>
 - <b id="#/properties/meta">meta</b>
	 - <i id="#/properties/meta">path: #/properties/meta</i>
	 - &#36;ref: [#/definitions/MetaAttributes](#/definitions/MetaAttributes)
 - <b id="#/properties/nodes">nodes</b> `required`
	 - Type: `array`
	 - <i id="#/properties/nodes">path: #/properties/nodes</i>
		 - **_Items_**
		 - <i id="#/properties/nodes/items">path: #/properties/nodes/items</i>
		 - &#36;ref: [#/definitions/VirtualNodeSpec](#/definitions/VirtualNodeSpec)



## VirtualNodeSpec

 - Type: `object`
 - <i id="#/definitions/VirtualNodeSpec">path: #/definitions/VirtualNodeSpec</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/VirtualNodeSpec/properties/id">id</b> `required`
		 - <i id="#/definitions/VirtualNodeSpec/properties/id">path: #/definitions/VirtualNodeSpec/properties/id</i>
		 - &#36;ref: [#/definitions/HomieID](#/definitions/HomieID)
	 - <b id="#/definitions/VirtualNodeSpec/properties/name">name</b>
		 - Type: `string`
		 - <i id="#/definitions/VirtualNodeSpec/properties/name">path: #/definitions/VirtualNodeSpec/properties/name</i>
	 - <b id="#/definitions/VirtualNodeSpec/properties/tags">tags</b>
		 - Type: `array`
		 - <i id="#/definitions/VirtualNodeSpec/properties/tags">path: #/definitions/VirtualNodeSpec/properties/tags</i>
			 - **_Items_**
			 - Type: `string`
			 - <i id="#/definitions/VirtualNodeSpec/properties/tags/items">path: #/definitions/VirtualNodeSpec/properties/tags/items</i>
	 - <b id="#/definitions/VirtualNodeSpec/properties/meta">meta</b>
		 - <i id="#/definitions/VirtualNodeSpec/properties/meta">path: #/definitions/VirtualNodeSpec/properties/meta</i>
		 - &#36;ref: [#/definitions/MetaAttributes](#/definitions/MetaAttributes)
	 - <b id="#/definitions/VirtualNodeSpec/properties/type">type</b>
		 - Type: `string`
		 - <i id="#/definitions/VirtualNodeSpec/properties/type">path: #/definitions/VirtualNodeSpec/properties/type</i>
	 - <b id="#/definitions/VirtualNodeSpec/properties/properties">properties</b>
		 - Type: `array`
		 - <i id="#/definitions/VirtualNodeSpec/properties/properties">path: #/definitions/VirtualNodeSpec/properties/properties</i>
			 - **_Items_**
			 - <i id="#/definitions/VirtualNodeSpec/properties/properties/items">path: #/definitions/VirtualNodeSpec/properties/properties/items</i>
			 - &#36;ref: [#/definitions/VirtualPropertySpec](#/definitions/VirtualPropertySpec)
	 - <b id="#/definitions/VirtualNodeSpec/properties/fromSmarthome">fromSmarthome</b>
		 - <i id="#/definitions/VirtualNodeSpec/properties/fromSmarthome">path: #/definitions/VirtualNodeSpec/properties/fromSmarthome</i>
		 - &#36;ref: [#/definitions/SmarthomeSpec](#/definitions/SmarthomeSpec)
	 - <b id="#/definitions/VirtualNodeSpec/properties/passThrough">passThrough</b>
		 - <i id="#/definitions/VirtualNodeSpec/properties/passThrough">path: #/definitions/VirtualNodeSpec/properties/passThrough</i>


## VirtualPropertySpec

 - Type: `object`
 - <i id="#/definitions/VirtualPropertySpec">path: #/definitions/VirtualPropertySpec</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/VirtualPropertySpec/properties/id">id</b> `required`
		 - <i id="#/definitions/VirtualPropertySpec/properties/id">path: #/definitions/VirtualPropertySpec/properties/id</i>
		 - &#36;ref: [#/definitions/HomieID](#/definitions/HomieID)
	 - <b id="#/definitions/VirtualPropertySpec/properties/name">name</b>
		 - Type: `string`
		 - <i id="#/definitions/VirtualPropertySpec/properties/name">path: #/definitions/VirtualPropertySpec/properties/name</i>
	 - <b id="#/definitions/VirtualPropertySpec/properties/tags">tags</b>
		 - Type: `array`
		 - <i id="#/definitions/VirtualPropertySpec/properties/tags">path: #/definitions/VirtualPropertySpec/properties/tags</i>
			 - **_Items_**
			 - Type: `string`
			 - <i id="#/definitions/VirtualPropertySpec/properties/tags/items">path: #/definitions/VirtualPropertySpec/properties/tags/items</i>
	 - <b id="#/definitions/VirtualPropertySpec/properties/meta">meta</b>
		 - <i id="#/definitions/VirtualPropertySpec/properties/meta">path: #/definitions/VirtualPropertySpec/properties/meta</i>
		 - &#36;ref: [#/definitions/MetaAttributes](#/definitions/MetaAttributes)
	 - <b id="#/definitions/VirtualPropertySpec/properties/datatype">datatype</b>
		 - <i id="#/definitions/VirtualPropertySpec/properties/datatype">path: #/definitions/VirtualPropertySpec/properties/datatype</i>
		 - &#36;ref: [#/definitions/HomieDatatype](#/definitions/HomieDatatype)
	 - <b id="#/definitions/VirtualPropertySpec/properties/format">format</b>
		 - Type: `string`
		 - <i id="#/definitions/VirtualPropertySpec/properties/format">path: #/definitions/VirtualPropertySpec/properties/format</i>
	 - <b id="#/definitions/VirtualPropertySpec/properties/settable">settable</b>
		 - Type: `boolean`
		 - <i id="#/definitions/VirtualPropertySpec/properties/settable">path: #/definitions/VirtualPropertySpec/properties/settable</i>
	 - <b id="#/definitions/VirtualPropertySpec/properties/retained">retained</b>
		 - Type: `boolean`
		 - <i id="#/definitions/VirtualPropertySpec/properties/retained">path: #/definitions/VirtualPropertySpec/properties/retained</i>
	 - <b id="#/definitions/VirtualPropertySpec/properties/unit">unit</b>
		 - Type: `string`
		 - <i id="#/definitions/VirtualPropertySpec/properties/unit">path: #/definitions/VirtualPropertySpec/properties/unit</i>
	 - <b id="#/definitions/VirtualPropertySpec/properties/passThrough">passThrough</b>
		 - Type: `boolean`
		 - <i id="#/definitions/VirtualPropertySpec/properties/passThrough">path: #/definitions/VirtualPropertySpec/properties/passThrough</i>
	 - <b id="#/definitions/VirtualPropertySpec/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/VirtualPropertySpec/properties/propertyOpts">path: #/definitions/VirtualPropertySpec/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)




## Further type definitions

**_HomieID_**

 - Type: `string`
 - <i id="#/definitions/HomieID">path: #/definitions/HomieID</i>
 - The value must match this pattern: `^(?!\\-)[a-z0-9\\-]+(?<!\\-)$`


**_MetaAttributes_**

 - Type: `array`
 - <i id="#/definitions/MetaAttributes">path: #/definitions/MetaAttributes</i>
	 - **_Items_**
	 - <i id="#/definitions/MetaAttributes/items">path: #/definitions/MetaAttributes/items</i>
	 - &#36;ref: [#/definitions/MetaKeyAttributes](#/definitions/MetaKeyAttributes)


**_MetaKeyAttributes_**

 - Type: `object`
 - <i id="#/definitions/MetaKeyAttributes">path: #/definitions/MetaKeyAttributes</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/MetaKeyAttributes/properties/id">id</b> `required`
		 - <i id="#/definitions/MetaKeyAttributes/properties/id">path: #/definitions/MetaKeyAttributes/properties/id</i>
		 - &#36;ref: [#/definitions/HomieID](#/definitions/HomieID)
	 - <b id="#/definitions/MetaKeyAttributes/properties/key">key</b>
		 - Type: `string`
		 - <i id="#/definitions/MetaKeyAttributes/properties/key">path: #/definitions/MetaKeyAttributes/properties/key</i>
	 - <b id="#/definitions/MetaKeyAttributes/properties/value">value</b>
		 - Type: `string`
		 - <i id="#/definitions/MetaKeyAttributes/properties/value">path: #/definitions/MetaKeyAttributes/properties/value</i>
	 - <b id="#/definitions/MetaKeyAttributes/properties/subkeys">subkeys</b>
		 - Type: `array`
		 - <i id="#/definitions/MetaKeyAttributes/properties/subkeys">path: #/definitions/MetaKeyAttributes/properties/subkeys</i>
			 - **_Items_**
			 - <i id="#/definitions/MetaKeyAttributes/properties/subkeys/items">path: #/definitions/MetaKeyAttributes/properties/subkeys/items</i>
			 - &#36;ref: [#/definitions/MetaSubkeyAttributes](#/definitions/MetaSubkeyAttributes)


**_MetaSubkeyAttributes_**

 - Type: `object`
 - <i id="#/definitions/MetaSubkeyAttributes">path: #/definitions/MetaSubkeyAttributes</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/MetaSubkeyAttributes/properties/id">id</b> `required`
		 - <i id="#/definitions/MetaSubkeyAttributes/properties/id">path: #/definitions/MetaSubkeyAttributes/properties/id</i>
		 - &#36;ref: [#/definitions/HomieID](#/definitions/HomieID)
	 - <b id="#/definitions/MetaSubkeyAttributes/properties/key">key</b>
		 - Type: `string`
		 - <i id="#/definitions/MetaSubkeyAttributes/properties/key">path: #/definitions/MetaSubkeyAttributes/properties/key</i>
	 - <b id="#/definitions/MetaSubkeyAttributes/properties/value">value</b>
		 - Type: `string`
		 - <i id="#/definitions/MetaSubkeyAttributes/properties/value">path: #/definitions/MetaSubkeyAttributes/properties/value</i>



**_HomieDatatype_**

 - Type: `string`
 - <i id="#/definitions/HomieDatatype">path: #/definitions/HomieDatatype</i>
 - The value is restricted to the following: 
	 1. _"integer"_
	 2. _"float"_
	 3. _"boolean"_
	 4. _"string"_
	 5. _"enum"_
	 6. _"color"_
	 7. _"datetime"_
	 8. _"duration"_


**_HomiePropertyOptions_**

 - Type: `object`
 - <i id="#/definitions/HomiePropertyOptions">path: #/definitions/HomiePropertyOptions</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/HomiePropertyOptions/properties/readValueFromMqtt">readValueFromMqtt</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/HomiePropertyOptions/properties/readValueFromMqtt">path: #/definitions/HomiePropertyOptions/properties/readValueFromMqtt</i>
	 - <b id="#/definitions/HomiePropertyOptions/properties/readTimeout">readTimeout</b>
		 - Type: `number`
		 - <i id="#/definitions/HomiePropertyOptions/properties/readTimeout">path: #/definitions/HomiePropertyOptions/properties/readTimeout</i>


**_SmarthomeSpec_**

 - Type: `object`
 - <i id="#/definitions/SmarthomeSpec">path: #/definitions/SmarthomeSpec</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SmarthomeSpec/properties/type">type</b> `required`
		 - <i id="#/definitions/SmarthomeSpec/properties/type">path: #/definitions/SmarthomeSpec/properties/type</i>
		 - &#36;ref: [#/definitions/SmarthomeType](#/definitions/SmarthomeType)
	 - <b id="#/definitions/SmarthomeSpec/properties/config">config</b>
		 - <i id="#/definitions/SmarthomeSpec/properties/config">path: #/definitions/SmarthomeSpec/properties/config</i>
		 - &#36;ref: [#/definitions/SmarthomeNodePropConfig](#/definitions/SmarthomeNodePropConfig)


**_SmarthomeType_**

 - Type: `string`
 - <i id="#/definitions/SmarthomeType">path: #/definitions/SmarthomeType</i>
 - The value is restricted to the following: 
	 1. _"homie-homecontrol/v1/type=battery"_
	 2. _"homie-homecontrol/v1/type=switch"_
	 3. _"homie-homecontrol/v1/type=contact"_
	 4. _"homie-homecontrol/v1/type=weather"_
	 5. _"homie-homecontrol/v1/type=button"_
	 6. _"homie-homecontrol/v1/type=tiltsensor"_
	 7. _"homie-homecontrol/v1/type=motionsensor"_
	 8. _"homie-homecontrol/v1/type=thermostat"_
	 9. _"homie-homecontrol/v1/type=mediaplayer"_
	 10. _"homie-homecontrol/v1/type=powermeter"_
	 11. _"homie-homecontrol/v1/type=maintenance"_
	 12. _"homie-homecontrol/v1/type=dimmer"_
	 13. _"homie-homecontrol/v1/type=shutter"_
	 14. _"homie-homecontrol/v1/type=colorlight"_
	 15. _"homie-homecontrol/v1/type=text"_


**_SmarthomeNodePropConfig_**

 - <i id="#/definitions/SmarthomeNodePropConfig">path: #/definitions/SmarthomeNodePropConfig</i>


**_BatteryNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/BatteryNodePropertyConfig">path: #/definitions/BatteryNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/BatteryNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/BatteryNodePropertyConfig/properties/propertyOpts">path: #/definitions/BatteryNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/BatteryNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/BatteryNodePropertyConfig/properties/settable">path: #/definitions/BatteryNodePropertyConfig/properties/settable</i>
	 - <b id="#/definitions/BatteryNodePropertyConfig/properties/lowBattery">lowBattery</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/BatteryNodePropertyConfig/properties/lowBattery">path: #/definitions/BatteryNodePropertyConfig/properties/lowBattery</i>
	 - <b id="#/definitions/BatteryNodePropertyConfig/properties/batteryLevel">batteryLevel</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/BatteryNodePropertyConfig/properties/batteryLevel">path: #/definitions/BatteryNodePropertyConfig/properties/batteryLevel</i>


**_SetableProps_**

 - Type: `object`
 - <i id="#/definitions/SetableProps">path: #/definitions/SetableProps</i>
 - This schema accepts additional properties.
 - **_Properties_**


**_SwitchNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/SwitchNodePropertyConfig">path: #/definitions/SwitchNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SwitchNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/SwitchNodePropertyConfig/properties/propertyOpts">path: #/definitions/SwitchNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/SwitchNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/SwitchNodePropertyConfig/properties/settable">path: #/definitions/SwitchNodePropertyConfig/properties/settable</i>


**_ContactNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/ContactNodePropertyConfig">path: #/definitions/ContactNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/ContactNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/ContactNodePropertyConfig/properties/propertyOpts">path: #/definitions/ContactNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/ContactNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/ContactNodePropertyConfig/properties/settable">path: #/definitions/ContactNodePropertyConfig/properties/settable</i>


**_WeatherhNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/WeatherhNodePropertyConfig">path: #/definitions/WeatherhNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/WeatherhNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/WeatherhNodePropertyConfig/properties/propertyOpts">path: #/definitions/WeatherhNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/WeatherhNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/WeatherhNodePropertyConfig/properties/settable">path: #/definitions/WeatherhNodePropertyConfig/properties/settable</i>
	 - <b id="#/definitions/WeatherhNodePropertyConfig/properties/temperature">temperature</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/WeatherhNodePropertyConfig/properties/temperature">path: #/definitions/WeatherhNodePropertyConfig/properties/temperature</i>
	 - <b id="#/definitions/WeatherhNodePropertyConfig/properties/tempUnit">tempUnit</b> `required`
		 - Type: `string`
		 - <i id="#/definitions/WeatherhNodePropertyConfig/properties/tempUnit">path: #/definitions/WeatherhNodePropertyConfig/properties/tempUnit</i>
		 - The value is restricted to the following: 
			 1. _"C"_
			 2. _"F"_
	 - <b id="#/definitions/WeatherhNodePropertyConfig/properties/humidity">humidity</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/WeatherhNodePropertyConfig/properties/humidity">path: #/definitions/WeatherhNodePropertyConfig/properties/humidity</i>
	 - <b id="#/definitions/WeatherhNodePropertyConfig/properties/pressure">pressure</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/WeatherhNodePropertyConfig/properties/pressure">path: #/definitions/WeatherhNodePropertyConfig/properties/pressure</i>


**_ButtonNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/ButtonNodePropertyConfig">path: #/definitions/ButtonNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/ButtonNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/ButtonNodePropertyConfig/properties/propertyOpts">path: #/definitions/ButtonNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/ButtonNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/ButtonNodePropertyConfig/properties/settable">path: #/definitions/ButtonNodePropertyConfig/properties/settable</i>
	 - <b id="#/definitions/ButtonNodePropertyConfig/properties/buttonStates">buttonStates</b> `required`
		 - Type: `array`
		 - <i id="#/definitions/ButtonNodePropertyConfig/properties/buttonStates">path: #/definitions/ButtonNodePropertyConfig/properties/buttonStates</i>
			 - **_Items_**
			 - <i id="#/definitions/ButtonNodePropertyConfig/properties/buttonStates/items">path: #/definitions/ButtonNodePropertyConfig/properties/buttonStates/items</i>
			 - &#36;ref: [#/definitions/ButtonState](#/definitions/ButtonState)


**_ButtonState_**

 - Type: `string`
 - <i id="#/definitions/ButtonState">path: #/definitions/ButtonState</i>
 - The value is restricted to the following: 
	 1. _"press"_
	 2. _"long-press"_
	 3. _"double-press"_
	 4. _"release"_
	 5. _"long-release"_
	 6. _"continuous"_


**_TiltSensorNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/TiltSensorNodePropertyConfig">path: #/definitions/TiltSensorNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/TiltSensorNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/TiltSensorNodePropertyConfig/properties/propertyOpts">path: #/definitions/TiltSensorNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/TiltSensorNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/TiltSensorNodePropertyConfig/properties/settable">path: #/definitions/TiltSensorNodePropertyConfig/properties/settable</i>


**_MotionSensorhNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/MotionSensorhNodePropertyConfig">path: #/definitions/MotionSensorhNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/MotionSensorhNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/MotionSensorhNodePropertyConfig/properties/propertyOpts">path: #/definitions/MotionSensorhNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/MotionSensorhNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/MotionSensorhNodePropertyConfig/properties/settable">path: #/definitions/MotionSensorhNodePropertyConfig/properties/settable</i>
	 - <b id="#/definitions/MotionSensorhNodePropertyConfig/properties/lux">lux</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MotionSensorhNodePropertyConfig/properties/lux">path: #/definitions/MotionSensorhNodePropertyConfig/properties/lux</i>
	 - <b id="#/definitions/MotionSensorhNodePropertyConfig/properties/noMotion">noMotion</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MotionSensorhNodePropertyConfig/properties/noMotion">path: #/definitions/MotionSensorhNodePropertyConfig/properties/noMotion</i>
	 - <b id="#/definitions/MotionSensorhNodePropertyConfig/properties/noMotionIntervals">noMotionIntervals</b> `required`
		 - Type: `array`
		 - <i id="#/definitions/MotionSensorhNodePropertyConfig/properties/noMotionIntervals">path: #/definitions/MotionSensorhNodePropertyConfig/properties/noMotionIntervals</i>
			 - **_Items_**
			 - Type: `number`
			 - <i id="#/definitions/MotionSensorhNodePropertyConfig/properties/noMotionIntervals/items">path: #/definitions/MotionSensorhNodePropertyConfig/properties/noMotionIntervals/items</i>


**_MediaplayerPropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/MediaplayerPropertyConfig">path: #/definitions/MediaplayerPropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/propertyOpts">path: #/definitions/MediaplayerPropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/settable">path: #/definitions/MediaplayerPropertyConfig/properties/settable</i>
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/next">next</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/next">path: #/definitions/MediaplayerPropertyConfig/properties/next</i>
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/previous">previous</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/previous">path: #/definitions/MediaplayerPropertyConfig/properties/previous</i>
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/forward">forward</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/forward">path: #/definitions/MediaplayerPropertyConfig/properties/forward</i>
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/rewind">rewind</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/rewind">path: #/definitions/MediaplayerPropertyConfig/properties/rewind</i>
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/stop">stop</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/stop">path: #/definitions/MediaplayerPropertyConfig/properties/stop</i>
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/position">position</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/position">path: #/definitions/MediaplayerPropertyConfig/properties/position</i>
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/mediaUrl">mediaUrl</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/mediaUrl">path: #/definitions/MediaplayerPropertyConfig/properties/mediaUrl</i>
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/volume">volume</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/volume">path: #/definitions/MediaplayerPropertyConfig/properties/volume</i>
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/mute">mute</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/mute">path: #/definitions/MediaplayerPropertyConfig/properties/mute</i>
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/shuffle">shuffle</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/shuffle">path: #/definitions/MediaplayerPropertyConfig/properties/shuffle</i>
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/repeat">repeat</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/repeat">path: #/definitions/MediaplayerPropertyConfig/properties/repeat</i>
	 - <b id="#/definitions/MediaplayerPropertyConfig/properties/trackInfo">trackInfo</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MediaplayerPropertyConfig/properties/trackInfo">path: #/definitions/MediaplayerPropertyConfig/properties/trackInfo</i>


**_ThermostatNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/ThermostatNodePropertyConfig">path: #/definitions/ThermostatNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/ThermostatNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/ThermostatNodePropertyConfig/properties/propertyOpts">path: #/definitions/ThermostatNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/ThermostatNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/ThermostatNodePropertyConfig/properties/settable">path: #/definitions/ThermostatNodePropertyConfig/properties/settable</i>
	 - <b id="#/definitions/ThermostatNodePropertyConfig/properties/tempUnit">tempUnit</b> `required`
		 - Type: `string`
		 - <i id="#/definitions/ThermostatNodePropertyConfig/properties/tempUnit">path: #/definitions/ThermostatNodePropertyConfig/properties/tempUnit</i>
		 - The value is restricted to the following: 
			 1. _"C"_
			 2. _"F"_
	 - <b id="#/definitions/ThermostatNodePropertyConfig/properties/valve">valve</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/ThermostatNodePropertyConfig/properties/valve">path: #/definitions/ThermostatNodePropertyConfig/properties/valve</i>
	 - <b id="#/definitions/ThermostatNodePropertyConfig/properties/windowopen">windowopen</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/ThermostatNodePropertyConfig/properties/windowopen">path: #/definitions/ThermostatNodePropertyConfig/properties/windowopen</i>
	 - <b id="#/definitions/ThermostatNodePropertyConfig/properties/boost_state">boost_state</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/ThermostatNodePropertyConfig/properties/boost_state">path: #/definitions/ThermostatNodePropertyConfig/properties/boost_state</i>
	 - <b id="#/definitions/ThermostatNodePropertyConfig/properties/mode">mode</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/ThermostatNodePropertyConfig/properties/mode">path: #/definitions/ThermostatNodePropertyConfig/properties/mode</i>
	 - <b id="#/definitions/ThermostatNodePropertyConfig/properties/modes">modes</b> `required`
		 - Type: `array`
		 - <i id="#/definitions/ThermostatNodePropertyConfig/properties/modes">path: #/definitions/ThermostatNodePropertyConfig/properties/modes</i>
			 - **_Items_**
			 - <i id="#/definitions/ThermostatNodePropertyConfig/properties/modes/items">path: #/definitions/ThermostatNodePropertyConfig/properties/modes/items</i>
			 - &#36;ref: [#/definitions/ThermostatMode](#/definitions/ThermostatMode)


**_ThermostatMode_**

 - Type: `string`
 - <i id="#/definitions/ThermostatMode">path: #/definitions/ThermostatMode</i>
 - The value is restricted to the following: 
	 1. _"off"_
	 2. _"auto"_
	 3. _"manual"_
	 4. _"party"_
	 5. _"boost"_
	 6. _"cool"_
	 7. _"heat"_
	 8. _"emergency-heating"_
	 9. _"precooling"_
	 10. _"fan-only"_
	 11. _"dry"_
	 12. _"sleep"_


**_PowermeterNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/PowermeterNodePropertyConfig">path: #/definitions/PowermeterNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/PowermeterNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/PowermeterNodePropertyConfig/properties/propertyOpts">path: #/definitions/PowermeterNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/PowermeterNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/PowermeterNodePropertyConfig/properties/settable">path: #/definitions/PowermeterNodePropertyConfig/properties/settable</i>
	 - <b id="#/definitions/PowermeterNodePropertyConfig/properties/current">current</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/PowermeterNodePropertyConfig/properties/current">path: #/definitions/PowermeterNodePropertyConfig/properties/current</i>
	 - <b id="#/definitions/PowermeterNodePropertyConfig/properties/frequency">frequency</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/PowermeterNodePropertyConfig/properties/frequency">path: #/definitions/PowermeterNodePropertyConfig/properties/frequency</i>
	 - <b id="#/definitions/PowermeterNodePropertyConfig/properties/power">power</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/PowermeterNodePropertyConfig/properties/power">path: #/definitions/PowermeterNodePropertyConfig/properties/power</i>
	 - <b id="#/definitions/PowermeterNodePropertyConfig/properties/voltage">voltage</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/PowermeterNodePropertyConfig/properties/voltage">path: #/definitions/PowermeterNodePropertyConfig/properties/voltage</i>
	 - <b id="#/definitions/PowermeterNodePropertyConfig/properties/energy_counter">energy_counter</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/PowermeterNodePropertyConfig/properties/energy_counter">path: #/definitions/PowermeterNodePropertyConfig/properties/energy_counter</i>


**_MaintenanceNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/MaintenanceNodePropertyConfig">path: #/definitions/MaintenanceNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/MaintenanceNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/MaintenanceNodePropertyConfig/properties/propertyOpts">path: #/definitions/MaintenanceNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/MaintenanceNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/MaintenanceNodePropertyConfig/properties/settable">path: #/definitions/MaintenanceNodePropertyConfig/properties/settable</i>
	 - <b id="#/definitions/MaintenanceNodePropertyConfig/properties/lowBattery">lowBattery</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MaintenanceNodePropertyConfig/properties/lowBattery">path: #/definitions/MaintenanceNodePropertyConfig/properties/lowBattery</i>
	 - <b id="#/definitions/MaintenanceNodePropertyConfig/properties/batteryLevel">batteryLevel</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MaintenanceNodePropertyConfig/properties/batteryLevel">path: #/definitions/MaintenanceNodePropertyConfig/properties/batteryLevel</i>
	 - <b id="#/definitions/MaintenanceNodePropertyConfig/properties/reachable">reachable</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MaintenanceNodePropertyConfig/properties/reachable">path: #/definitions/MaintenanceNodePropertyConfig/properties/reachable</i>
	 - <b id="#/definitions/MaintenanceNodePropertyConfig/properties/lastUpdate">lastUpdate</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/MaintenanceNodePropertyConfig/properties/lastUpdate">path: #/definitions/MaintenanceNodePropertyConfig/properties/lastUpdate</i>


**_DimmerNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/DimmerNodePropertyConfig">path: #/definitions/DimmerNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/DimmerNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/DimmerNodePropertyConfig/properties/propertyOpts">path: #/definitions/DimmerNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/DimmerNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/DimmerNodePropertyConfig/properties/settable">path: #/definitions/DimmerNodePropertyConfig/properties/settable</i>
	 - <b id="#/definitions/DimmerNodePropertyConfig/properties/step">step</b> `required`
		 - Type: `number`
		 - <i id="#/definitions/DimmerNodePropertyConfig/properties/step">path: #/definitions/DimmerNodePropertyConfig/properties/step</i>
	 - <b id="#/definitions/DimmerNodePropertyConfig/properties/stepToZero">stepToZero</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/DimmerNodePropertyConfig/properties/stepToZero">path: #/definitions/DimmerNodePropertyConfig/properties/stepToZero</i>


**_ShutterNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/ShutterNodePropertyConfig">path: #/definitions/ShutterNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/ShutterNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/ShutterNodePropertyConfig/properties/propertyOpts">path: #/definitions/ShutterNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/ShutterNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/ShutterNodePropertyConfig/properties/settable">path: #/definitions/ShutterNodePropertyConfig/properties/settable</i>
	 - <b id="#/definitions/ShutterNodePropertyConfig/properties/canStop">canStop</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/ShutterNodePropertyConfig/properties/canStop">path: #/definitions/ShutterNodePropertyConfig/properties/canStop</i>


**_ColorLightNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/ColorLightNodePropertyConfig">path: #/definitions/ColorLightNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/ColorLightNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/ColorLightNodePropertyConfig/properties/propertyOpts">path: #/definitions/ColorLightNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/ColorLightNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/ColorLightNodePropertyConfig/properties/settable">path: #/definitions/ColorLightNodePropertyConfig/properties/settable</i>
	 - <b id="#/definitions/ColorLightNodePropertyConfig/properties/ctmin">ctmin</b> `required`
		 - Type: `number`
		 - <i id="#/definitions/ColorLightNodePropertyConfig/properties/ctmin">path: #/definitions/ColorLightNodePropertyConfig/properties/ctmin</i>
	 - <b id="#/definitions/ColorLightNodePropertyConfig/properties/ctmax">ctmax</b> `required`
		 - Type: `number`
		 - <i id="#/definitions/ColorLightNodePropertyConfig/properties/ctmax">path: #/definitions/ColorLightNodePropertyConfig/properties/ctmax</i>
	 - <b id="#/definitions/ColorLightNodePropertyConfig/properties/colorMode">colorMode</b>
		 - Type: `string`
		 - <i id="#/definitions/ColorLightNodePropertyConfig/properties/colorMode">path: #/definitions/ColorLightNodePropertyConfig/properties/colorMode</i>
		 - The value is restricted to the following: 
			 1. _"rgb"_
			 2. _"hsv"_


**_TextNodePropertyConfig_**

 - Type: `object`
 - <i id="#/definitions/TextNodePropertyConfig">path: #/definitions/TextNodePropertyConfig</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/TextNodePropertyConfig/properties/propertyOpts">propertyOpts</b>
		 - <i id="#/definitions/TextNodePropertyConfig/properties/propertyOpts">path: #/definitions/TextNodePropertyConfig/properties/propertyOpts</i>
		 - &#36;ref: [#/definitions/HomiePropertyOptions](#/definitions/HomiePropertyOptions)
	 - <b id="#/definitions/TextNodePropertyConfig/properties/settable">settable</b>
		 - <i id="#/definitions/TextNodePropertyConfig/properties/settable">path: #/definitions/TextNodePropertyConfig/properties/settable</i>



_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_