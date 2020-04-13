Blockly.Blocks['dual_evo24x9_motor_forward'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.DUAL_EVO24X9_MOTOR_FORWARD_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://sv1.picz.in.th/images/2020/04/13/U7p9TJ.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "addr",
				"options": [
					[ "0x50", "0x50" ],
					[ "0x51", "0x51" ],
					[ "0x52", "0x52" ],
					[ "0x53", "0x53" ],
					[ "0x54", "0x54" ],
					[ "0x55", "0x55" ],
					[ "0x56", "0x56" ],
					[ "0x57", "0x57" ]
				]
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": "#bc8600",
			"tooltip": Blockly.Msg.DUAL_EVO24X9_MOTOR_FORWARD_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['dual_evo24x9_motor_backward'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.DUAL_EVO24X9_MOTOR_BACKWARD_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://sv1.picz.in.th/images/2020/04/13/U7p9TJ.png",
				"width": 20,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "addr",
				"options": [
					[ "0x50", "0x50" ],
					[ "0x51", "0x51" ],
					[ "0x52", "0x52" ],
					[ "0x53", "0x53" ],
					[ "0x54", "0x54" ],
					[ "0x55", "0x55" ],
					[ "0x56", "0x56" ],
					[ "0x57", "0x57" ]
				]
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": "#bc8600",
			"tooltip": Blockly.Msg.DUAL_EVO24X9_MOTOR_BACKWARD_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['dual_evo24x9_motor_forward2'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.DUAL_EVO24X9_MOTOR_FORWARD_2_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://sv1.picz.in.th/images/2020/04/13/U7p9TJ.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "addr",
				"options": [
					[ "0x50", "0x50" ],
					[ "0x51", "0x51" ],
					[ "0x52", "0x52" ],
					[ "0x53", "0x53" ],
					[ "0x54", "0x54" ],
					[ "0x55", "0x55" ],
					[ "0x56", "0x56" ],
					[ "0x57", "0x57" ]
				]
			}, {
				"type": "input_value",
				"name": "speed1",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "speed2",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": "#bc8600",
			"tooltip": Blockly.Msg.DUAL_EVO24X9_MOTOR_FORWARD_2_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['dual_evo24x9_motor_backward2'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.DUAL_EVO24X9_MOTOR_BACKWARD_2_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://sv1.picz.in.th/images/2020/04/13/U7p9TJ.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "addr",
				"options": [
					[ "0x50", "0x50" ],
					[ "0x51", "0x51" ],
					[ "0x52", "0x52" ],
					[ "0x53", "0x53" ],
					[ "0x54", "0x54" ],
					[ "0x55", "0x55" ],
					[ "0x56", "0x56" ],
					[ "0x57", "0x57" ]
				]
			}, {
				"type": "input_value",
				"name": "speed1",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "speed2",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": "#bc8600",
			"tooltip": Blockly.Msg.DUAL_EVO24X9_MOTOR_BACKWARD_2_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['dual_evo24x9_motor_turn_left'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.DUAL_EVO24X9_MOTOR_TRUE_LEFT_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://sv1.picz.in.th/images/2020/04/13/U7p9TJ.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "addr",
				"options": [
					[ "0x50", "0x50" ],
					[ "0x51", "0x51" ],
					[ "0x52", "0x52" ],
					[ "0x53", "0x53" ],
					[ "0x54", "0x54" ],
					[ "0x55", "0x55" ],
					[ "0x56", "0x56" ],
					[ "0x57", "0x57" ]
				]
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": "#bc8600",
			"tooltip": Blockly.Msg.DUAL_EVO24X9_MOTOR_TRUE_LEFT_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['dual_evo24x9_motor_turn_right'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.DUAL_EVO24X9_MOTOR_TRUE_RIGHT_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://sv1.picz.in.th/images/2020/04/13/U7p9TJ.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "addr",
				"options": [
					[ "0x50", "0x50" ],
					[ "0x51", "0x51" ],
					[ "0x52", "0x52" ],
					[ "0x53", "0x53" ],
					[ "0x54", "0x54" ],
					[ "0x55", "0x55" ],
					[ "0x56", "0x56" ],
					[ "0x57", "0x57" ]
				]
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": "#bc8600",
			"tooltip": Blockly.Msg.DUAL_EVO24X9_MOTOR_TRUE_RIGHT_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['dual_evo24x9_motor_spin_left'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.DUAL_EVO24X9_MOTOR_SPIN_LEFT_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://sv1.picz.in.th/images/2020/04/13/U7p9TJ.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "addr",
				"options": [
					[ "0x50", "0x50" ],
					[ "0x51", "0x51" ],
					[ "0x52", "0x52" ],
					[ "0x53", "0x53" ],
					[ "0x54", "0x54" ],
					[ "0x55", "0x55" ],
					[ "0x56", "0x56" ],
					[ "0x57", "0x57" ]
				]
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": "#bc8600",
			"tooltip": Blockly.Msg.DUAL_EVO24X9_MOTOR_SPIN_LEFT_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['dual_evo24x9_motor_spin_right'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.DUAL_EVO24X9_MOTOR_SPEN_RIGHT_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://sv1.picz.in.th/images/2020/04/13/U7p9TJ.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "addr",
				"options": [
					[ "0x50", "0x50" ],
					[ "0x51", "0x51" ],
					[ "0x52", "0x52" ],
					[ "0x53", "0x53" ],
					[ "0x54", "0x54" ],
					[ "0x55", "0x55" ],
					[ "0x56", "0x56" ],
					[ "0x57", "0x57" ]
				]
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": "#bc8600",
			"tooltip": Blockly.Msg.DUAL_EVO24X9_MOTOR_SPEN_RIGHT_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['dual_evo24x9_motor_stop'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.DUAL_EVO24X9_MOTOR_STOP_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://sv1.picz.in.th/images/2020/04/13/U7p9TJ.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "addr",
				"options": [
					[ "0x50", "0x50" ],
					[ "0x51", "0x51" ],
					[ "0x52", "0x52" ],
					[ "0x53", "0x53" ],
					[ "0x54", "0x54" ],
					[ "0x55", "0x55" ],
					[ "0x56", "0x56" ],
					[ "0x57", "0x57" ]
				]
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": "#bc8600",
			"tooltip": Blockly.Msg.DUAL_EVO24X9_MOTOR_STOP_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};