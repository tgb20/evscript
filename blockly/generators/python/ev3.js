'use strict';
goog.provide('Blockly.Python.ev3');
goog.require('Blockly.Python');

Blockly.Python['move_tank_on_for'] = function(block) {
    var dropdown_left_port = block.getFieldValue('left_port');
    var value_left_motor_speed = Blockly.Python.valueToCode(block, 'left_motor_speed', Blockly.Python.ORDER_ATOMIC);
    var dropdown_right_port = block.getFieldValue('right_port');
    var value_right_motor_speed = Blockly.Python.valueToCode(block, 'right_motor_speed', Blockly.Python.ORDER_ATOMIC);
    var dropdown_type = block.getFieldValue('type');
    var value_type_value = Blockly.Python.valueToCode(block, 'type_value', Blockly.Python.ORDER_ATOMIC);


    var code = 'tank_drive = MoveTank(' + dropdown_left_port + ', ' + dropdown_right_port + ')\n';

    code += 'tank_drive.';

    if(dropdown_type == "rotations"){
        code += 'on_for_rotations';
    }
    if(dropdown_type == "degrees"){
        code += 'on_for_degrees';
    }
    if(dropdown_type == "seconds"){
        code += 'on_for_seconds';
    }

    code += '(' + value_left_motor_speed + ', ' + value_right_motor_speed + ', ' + value_type_value + ')\n';

    return code;
  };

  Blockly.Python['move_tank_on'] = function(block) {
    var dropdown_left_port = block.getFieldValue('left_port');
    var value_left_motor_speed = Blockly.Python.valueToCode(block, 'left_motor_speed', Blockly.Python.ORDER_ATOMIC);
    var dropdown_right_port = block.getFieldValue('right_port');
    var value_right_motor_speed = Blockly.Python.valueToCode(block, 'right_motor_speed', Blockly.Python.ORDER_ATOMIC);
    

    var code = 'tank_drive = MoveTank(' + dropdown_left_port + ', ' + dropdown_right_port + ')\n';
    code += 'tank_drive.on(' + value_left_motor_speed + ', ' + value_right_motor_speed + ')\n';
 
    return code;
  };

  Blockly.Python['move_tank_off'] = function(block) {
    var dropdown_left_port = block.getFieldValue('left_port');
    var dropdown_right_port = block.getFieldValue('right_port');


    var code = 'tank_drive = MoveTank(' + dropdown_left_port + ', ' + dropdown_right_port + ')\n';
    code += 'tank_drive.off()\n';
    return code;
  };

  Blockly.Python['start'] = function(block) {
    var statements_start = Blockly.Python.statementToCode(block, 'start');

    var code = 'def start():\n' + statements_start;
    return code;
  };

  Blockly.Python['motor_on_for'] = function(block) {
    var dropdown_port = block.getFieldValue('port');
    var value_motor_speed = Blockly.Python.valueToCode(block, 'motor_speed', Blockly.Python.ORDER_ATOMIC);
    var dropdown_type = block.getFieldValue('type');
    var value_motor_type = Blockly.Python.valueToCode(block, 'motor_type', Blockly.Python.ORDER_ATOMIC);
    

    var code = 'm' + dropdown_port + ' = Motor(' + dropdown_port + ')\n';
    code += 'm' + dropdown_port + '.';
    if(dropdown_type == "rotations"){
        code += 'on_for_rotations';
    }
    if(dropdown_type == "degrees"){
        code += 'on_for_degrees';
    }
    if(dropdown_type == "position"){
        code += 'on_to_position';
    }
    if(dropdown_type == "seconds"){
        code += 'on_for_seconds';
    }
    code += '(' + value_motor_speed + ', ' + value_motor_type + ')\n';

    return code;
  };

  Blockly.Python['motor_on'] = function(block) {
    var dropdown_port = block.getFieldValue('port');
    var value_motor_speed = Blockly.Python.valueToCode(block, 'motor_speed', Blockly.Python.ORDER_ATOMIC);
    

    var code = 'm' + dropdown_port + ' = Motor(' + dropdown_port + ')\n';
    code += 'm' + dropdown_port + '.on(' + value_motor_speed + ')\n';
    return code;
  };

  Blockly.Python['motor_off'] = function(block) {
    var dropdown_port = block.getFieldValue('port');


    var code = 'm' + dropdown_port + ' = Motor(' + dropdown_port + ')\n';
    code += 'm' + dropdown_port + '.stop()\n';
    return code;
  };
