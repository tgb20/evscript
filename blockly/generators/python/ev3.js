'use strict';
goog.provide('Blockly.Python.ev3');
goog.require('Blockly.Python');

Blockly.Python['drive_for_seconds'] = function(block) {
    var value_left_percent = Blockly.Python.valueToCode(block, 'left_percent', Blockly.Python.ORDER_ATOMIC);
    var value_right_percent = Blockly.Python.valueToCode(block, 'right_percent', Blockly.Python.ORDER_ATOMIC);
    var value_seconds = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC);
    
    var code = 'tank_drive.on_for_seconds(SpeedPercent(' + value_left_percent + '), SpeedPercent(' + value_right_percent + '), ' + value_seconds + ')';
    code += "\n";
    return code;
};

Blockly.Python['tank_drive'] = function(block) {
    var dropdown_left_output = block.getFieldValue('left_output');
    var dropdown_right_output = block.getFieldValue('right_output');

    var code = 'tank_drive = MoveTank(' + dropdown_left_output + ', ' + dropdown_right_output + ')';
    code += "\n";
    return code;
  };