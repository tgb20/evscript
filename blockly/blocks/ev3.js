'use strict';

goog.provide('Blockly.Blocks.ev3');
goog.require('Blockly.Blocks');


  Blockly.Blocks['blank_block'] = {
    init: function() {
      this.jsonInit();
    }
  };

  Blockly.Blocks['move_tank_on_for'] = {
    init: function() {
      this.jsonInit({
        "type": "move_tank_on_for",
        "message0": "drive left motor %1 speed %% %2 right motor %3 speed %% %4 for %5 %6",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "left_port",
            "options": [
              [
                "A",
                "OUTPUT_A"
              ],
              [
                "B",
                "OUTPUT_B"
              ],
              [
                "C",
                "OUTPUT_C"
              ],
              [
                "D",
                "OUTPUT_D"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "left_motor_speed",
            "check": "Number",
            "align": "RIGHT"
          },
          {
            "type": "field_dropdown",
            "name": "right_port",
            "options": [
              [
                "A",
                "OUTPUT_A"
              ],
              [
                "B",
                "OUTPUT_B"
              ],
              [
                "C",
                "OUTPUT_C"
              ],
              [
                "D",
                "OUTPUT_D"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "right_motor_speed",
            "check": "Number",
            "align": "RIGHT"
          },
          {
            "type": "field_dropdown",
            "name": "type",
            "options": [
              [
                "rotations",
                "rotations"
              ],
              [
                "degrees",
                "degrees"
              ],
              [
                "seconds",
                "seconds"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "type_value",
            "check": "Number",
            "align": "RIGHT"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      });
    }
  };

  Blockly.Blocks['move_tank_on'] = {
    init: function() {
      this.jsonInit({
        "type": "move_tank_on",
        "message0": "drive left motor %1 speed %% %2 right motor %3 speed %% %4",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "left_port",
            "options": [
              [
                "A",
                "OUTPUT_A"
              ],
              [
                "B",
                "OUTPUT_B"
              ],
              [
                "C",
                "OUTPUT_C"
              ],
              [
                "D",
                "OUTPUT_D"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "left_motor_speed",
            "check": "Number",
            "align": "RIGHT"
          },
          {
            "type": "field_dropdown",
            "name": "right_port",
            "options": [
              [
                "A",
                "OUTPUT_A"
              ],
              [
                "B",
                "OUTPUT_B"
              ],
              [
                "C",
                "OUTPUT_C"
              ],
              [
                "D",
                "OUTPUT_D"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "right_motor_speed",
            "check": "Number",
            "align": "RIGHT"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      });
    }
  };

  Blockly.Blocks['move_tank_off'] = {
    init: function() {
      this.jsonInit({
        "type": "move_tank_off",
        "lastDummyAlign0": "RIGHT",
        "message0": "stop left motor %1 %2 right motor %3",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "left_port",
            "options": [
              [
                "A",
                "OUTPUT_A"
              ],
              [
                "B",
                "OUTPUT_B"
              ],
              [
                "C",
                "OUTPUT_C"
              ],
              [
                "D",
                "OUTPUT_D"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "right_port",
            "options": [
              [
                "A",
                "OUTPUT_A"
              ],
              [
                "B",
                "OUTPUT_B"
              ],
              [
                "C",
                "OUTPUT_C"
              ],
              [
                "D",
                "OUTPUT_D"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      });
    }
  };

  Blockly.Blocks['start'] = {
    init: function() {
      this.jsonInit({
        "type": "start",
        "message0": "start program %1 %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "start"
          }
        ],
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
      });
    }
  };

  Blockly.Blocks['motor_on_for'] = {
    init: function() {
      this.jsonInit({
        "type": "motor_on_for",
        "message0": "run motor %1 speed %% %2 for %3 %4",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "port",
            "options": [
              [
                "A",
                "OUTPUT_A"
              ],
              [
                "B",
                "OUTPUT_B"
              ],
              [
                "C",
                "OUTPUT_C"
              ],
              [
                "D",
                "OUTPUT_D"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "motor_speed",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "type",
            "options": [
              [
                "rotations",
                "rotations"
              ],
              [
                "degrees",
                "degrees"
              ],
              [
                "position",
                "position"
              ],
              [
                "seconds",
                "seconds"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "motor_type",
            "check": "Number",
            "align": "RIGHT"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      });
    }
  };

  Blockly.Blocks['motor_on'] = {
    init: function() {
      this.jsonInit({
        "type": "motor_on",
        "message0": "run motor %1 speed %% %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "port",
            "options": [
              [
                "A",
                "OUTPUT_A"
              ],
              [
                "B",
                "OUTPUT_B"
              ],
              [
                "C",
                "OUTPUT_C"
              ],
              [
                "D",
                "OUTPUT_D"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "motor_speed",
            "check": "Number"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      });
    }
  };

  Blockly.Blocks['motor_off'] = {
    init: function() {
      this.jsonInit({
        "type": "motor_off",
        "lastDummyAlign0": "RIGHT",
        "message0": "stop motor %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "port",
            "options": [
              [
                "A",
                "OUTPUT_A"
              ],
              [
                "B",
                "OUTPUT_B"
              ],
              [
                "C",
                "OUTPUT_C"
              ],
              [
                "D",
                "OUTPUT_D"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      });
    }
  };