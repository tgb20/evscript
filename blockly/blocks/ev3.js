'use strict';

goog.provide('Blockly.Blocks.ev3');
goog.require('Blockly.Blocks');

Blockly.Blocks['drive_for_seconds'] = {
    init: function() {
      this.jsonInit({
        "type": "drive_for_seconds",
        "message0": "drive left speed %% %1 right speed %% %2 seconds %3",
        "args0": [
          {
            "type": "input_value",
            "name": "left_percent",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "right_percent",
            "check": "Number",
            "align": "RIGHT"
          },
          {
            "type": "input_value",
            "name": "seconds",
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

  Blockly.Blocks['tank_drive'] = {
    init: function() {
      this.jsonInit({
        "type": "tank_drive",
        "message0": "tank drive left %1 right %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "left_output",
            "options": [
              [
                "a",
                "OUTPUT_A"
              ],
              [
                "b",
                "OUTPUT_B"
              ],
              [
                "c",
                "OUTPUT_C"
              ],
              [
                "d",
                "OUTPUT_D"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "right_output",
            "options": [
              [
                "a",
                "OUTPUT_A"
              ],
              [
                "b",
                "OUTPUT_B"
              ],
              [
                "c",
                "OUTPUT_C"
              ],
              [
                "d",
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

