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

# definitions

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

 - <i id="#/definitions/BatteryNodePropertyConfig">path: #/definitions/BatteryNodePropertyConfig</i>


**_SetableProps<SmarthomeTypeBatteryProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeBatteryProps>">path: #/definitions/SetableProps<SmarthomeTypeBatteryProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeBatteryProps>/properties/low-battery">low-battery</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeBatteryProps>/properties/low-battery">path: #/definitions/SetableProps<SmarthomeTypeBatteryProps>/properties/low-battery</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeBatteryProps>/properties/battery-level">battery-level</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeBatteryProps>/properties/battery-level">path: #/definitions/SetableProps<SmarthomeTypeBatteryProps>/properties/battery-level</i>


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


**_SetableProps<SmarthomeTypeSwitchProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeSwitchProps>">path: #/definitions/SetableProps<SmarthomeTypeSwitchProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeSwitchProps>/properties/state">state</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeSwitchProps>/properties/state">path: #/definitions/SetableProps<SmarthomeTypeSwitchProps>/properties/state</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeSwitchProps>/properties/action">action</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeSwitchProps>/properties/action">path: #/definitions/SetableProps<SmarthomeTypeSwitchProps>/properties/action</i>


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


**_SetableProps<SmarthomeTypeContactProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeContactProps>">path: #/definitions/SetableProps<SmarthomeTypeContactProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeContactProps>/properties/state">state</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeContactProps>/properties/state">path: #/definitions/SetableProps<SmarthomeTypeContactProps>/properties/state</i>


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


**_SetableProps<SmarthomeTypeWeatherProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeWeatherProps>">path: #/definitions/SetableProps<SmarthomeTypeWeatherProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeWeatherProps>/properties/temperature">temperature</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeWeatherProps>/properties/temperature">path: #/definitions/SetableProps<SmarthomeTypeWeatherProps>/properties/temperature</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeWeatherProps>/properties/humidity">humidity</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeWeatherProps>/properties/humidity">path: #/definitions/SetableProps<SmarthomeTypeWeatherProps>/properties/humidity</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeWeatherProps>/properties/pressure">pressure</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeWeatherProps>/properties/pressure">path: #/definitions/SetableProps<SmarthomeTypeWeatherProps>/properties/pressure</i>


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


**_SetableProps<SmarthomeTypeButtonProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeButtonProps>">path: #/definitions/SetableProps<SmarthomeTypeButtonProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeButtonProps>/properties/action">action</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeButtonProps>/properties/action">path: #/definitions/SetableProps<SmarthomeTypeButtonProps>/properties/action</i>


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


**_SetableProps<SmarthomeTypeTiltProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeTiltProps>">path: #/definitions/SetableProps<SmarthomeTypeTiltProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeTiltProps>/properties/state">state</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeTiltProps>/properties/state">path: #/definitions/SetableProps<SmarthomeTypeTiltProps>/properties/state</i>


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


**_SetableProps<SmarthomeTypeMotionProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeMotionProps>">path: #/definitions/SetableProps<SmarthomeTypeMotionProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMotionProps>/properties/motion">motion</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMotionProps>/properties/motion">path: #/definitions/SetableProps<SmarthomeTypeMotionProps>/properties/motion</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMotionProps>/properties/no-motion">no-motion</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMotionProps>/properties/no-motion">path: #/definitions/SetableProps<SmarthomeTypeMotionProps>/properties/no-motion</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMotionProps>/properties/lux">lux</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMotionProps>/properties/lux">path: #/definitions/SetableProps<SmarthomeTypeMotionProps>/properties/lux</i>


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


**_SetableProps<SmarthomeTypeMediaplayerProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>">path: #/definitions/SetableProps<SmarthomeTypeMediaplayerProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/player-action">player-action</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/player-action">path: #/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/player-action</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/position">position</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/position">path: #/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/position</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/volume">volume</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/volume">path: #/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/volume</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/media-url">media-url</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/media-url">path: #/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/media-url</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/play-state">play-state</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/play-state">path: #/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/play-state</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/mute">mute</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/mute">path: #/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/mute</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/shuffle">shuffle</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/shuffle">path: #/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/shuffle</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/repeat">repeat</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/repeat">path: #/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/repeat</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/title">title</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/title">path: #/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/title</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/artist">artist</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/artist">path: #/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/artist</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/album">album</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/album">path: #/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/album</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/duration">duration</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/duration">path: #/definitions/SetableProps<SmarthomeTypeMediaplayerProps>/properties/duration</i>


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


**_SetableProps<SmarthomeTypeThermostatProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeThermostatProps>">path: #/definitions/SetableProps<SmarthomeTypeThermostatProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/set-temperature">set-temperature</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/set-temperature">path: #/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/set-temperature</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/valve">valve</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/valve">path: #/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/valve</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/mode">mode</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/mode">path: #/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/mode</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/windowopen">windowopen</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/windowopen">path: #/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/windowopen</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/boost-state">boost-state</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/boost-state">path: #/definitions/SetableProps<SmarthomeTypeThermostatProps>/properties/boost-state</i>


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


**_SetableProps<SmarthomeTypePowermeterProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypePowermeterProps>">path: #/definitions/SetableProps<SmarthomeTypePowermeterProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/current">current</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/current">path: #/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/current</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/energy-counter">energy-counter</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/energy-counter">path: #/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/energy-counter</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/frequency">frequency</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/frequency">path: #/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/frequency</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/power">power</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/power">path: #/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/power</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/voltage">voltage</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/voltage">path: #/definitions/SetableProps<SmarthomeTypePowermeterProps>/properties/voltage</i>


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


**_SetableProps<SmarthomeTypeMaintenanceProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeMaintenanceProps>">path: #/definitions/SetableProps<SmarthomeTypeMaintenanceProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMaintenanceProps>/properties/low-battery">low-battery</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMaintenanceProps>/properties/low-battery">path: #/definitions/SetableProps<SmarthomeTypeMaintenanceProps>/properties/low-battery</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMaintenanceProps>/properties/battery-level">battery-level</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMaintenanceProps>/properties/battery-level">path: #/definitions/SetableProps<SmarthomeTypeMaintenanceProps>/properties/battery-level</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMaintenanceProps>/properties/last-update">last-update</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMaintenanceProps>/properties/last-update">path: #/definitions/SetableProps<SmarthomeTypeMaintenanceProps>/properties/last-update</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeMaintenanceProps>/properties/reachable">reachable</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeMaintenanceProps>/properties/reachable">path: #/definitions/SetableProps<SmarthomeTypeMaintenanceProps>/properties/reachable</i>


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


**_SetableProps<SmarthomeTypeDimmerProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeDimmerProps>">path: #/definitions/SetableProps<SmarthomeTypeDimmerProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeDimmerProps>/properties/brightness">brightness</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeDimmerProps>/properties/brightness">path: #/definitions/SetableProps<SmarthomeTypeDimmerProps>/properties/brightness</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeDimmerProps>/properties/action">action</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeDimmerProps>/properties/action">path: #/definitions/SetableProps<SmarthomeTypeDimmerProps>/properties/action</i>


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
	 - <b id="#/definitions/ShutterNodePropertyConfig/properties/implementUpDown">implementUpDown</b> `required`
		 - Type: `boolean`
		 - <i id="#/definitions/ShutterNodePropertyConfig/properties/implementUpDown">path: #/definitions/ShutterNodePropertyConfig/properties/implementUpDown</i>


**_SetableProps<SmarthomeTypeShutterProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeShutterProps>">path: #/definitions/SetableProps<SmarthomeTypeShutterProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeShutterProps>/properties/position">position</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeShutterProps>/properties/position">path: #/definitions/SetableProps<SmarthomeTypeShutterProps>/properties/position</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeShutterProps>/properties/action">action</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeShutterProps>/properties/action">path: #/definitions/SetableProps<SmarthomeTypeShutterProps>/properties/action</i>


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


**_SetableProps<SmarthomeTypeColorLightProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeColorLightProps>">path: #/definitions/SetableProps<SmarthomeTypeColorLightProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeColorLightProps>/properties/color">color</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeColorLightProps>/properties/color">path: #/definitions/SetableProps<SmarthomeTypeColorLightProps>/properties/color</i>
	 - <b id="#/definitions/SetableProps<SmarthomeTypeColorLightProps>/properties/color-temperature">color-temperature</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeColorLightProps>/properties/color-temperature">path: #/definitions/SetableProps<SmarthomeTypeColorLightProps>/properties/color-temperature</i>


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


**_SetableProps<SmarthomeTypeTextProps>_**

 - Type: `object`
 - <i id="#/definitions/SetableProps<SmarthomeTypeTextProps>">path: #/definitions/SetableProps<SmarthomeTypeTextProps></i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#/definitions/SetableProps<SmarthomeTypeTextProps>/properties/text">text</b>
		 - Type: `boolean`
		 - <i id="#/definitions/SetableProps<SmarthomeTypeTextProps>/properties/text">path: #/definitions/SetableProps<SmarthomeTypeTextProps>/properties/text</i>



_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_