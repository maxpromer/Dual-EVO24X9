Blockly.JavaScript['dual_evo24x9_motor_forward'] = function(block) {
	var dropdown_addr = block.getFieldValue('addr');
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(1, 1, ' + value_speed + ');\t';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(2, 1, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['dual_evo24x9_motor_backward'] = function(block) {
	var dropdown_addr = block.getFieldValue('addr');
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(1, 2, ' + value_speed + ');\t';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(2, 2, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['dual_evo24x9_motor_turn_left'] = function(block) {
	var dropdown_addr = block.getFieldValue('addr');
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(1, 3, 0);\t';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(2, 1, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['dual_evo24x9_motor_turn_right'] = function(block) {
	var dropdown_addr = block.getFieldValue('addr');
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(1, 1, ' + value_speed + ');\t';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(2, 3, 0);\n';
	return code;
};

Blockly.JavaScript['dual_evo24x9_motor_spin_left'] = function(block) {
	var dropdown_addr = block.getFieldValue('addr');
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(1, 2, ' + value_speed + ');\t';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(2, 1, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['dual_evo24x9_motor_spin_right'] = function(block) {
	var dropdown_addr = block.getFieldValue('addr');
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(1, 1, ' + value_speed + ');\t';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(2, 2, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['dual_evo24x9_motor_stop'] = function(block) {
	var dropdown_addr = block.getFieldValue('addr');
	var code = '';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(1, 3, 0);\t';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(2, 3, 0);\n';
	return code;
};

Blockly.JavaScript['dual_evo24x9_motor_forward2'] = function(block) {
	var dropdown_addr = block.getFieldValue('addr');
	var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(1, 1, ' + value_speed1 + ');\t';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(2, 1, ' + value_speed2 + ');\n';
	return code;
};

Blockly.JavaScript['dual_evo24x9_motor_backward2'] = function(block) {
	var dropdown_addr = block.getFieldValue('addr');
	var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(1, 2, ' + value_speed1 + ');\t';
	code += 'DEV_I2C1.DualEVO24X9(0, ' + dropdown_addr + ').motor(2, 2, ' + value_speed2 + ');\n';
	return code;
};