export default function define(Blocks: Blockly.BlockDefinitions) {
  Blockly.Blocks['senseshow'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('sense.show_message("')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E55F2B");
      this.setTooltip('Shows a message on the Sense Hat');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['senseshowvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('sense.show_message(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E55F2B");
      this.setTooltip('Show a variable on the display');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['senseinit'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('sense = SenseHat()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E55F2B");
      this.setTooltip('Detects the sense hat');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['senseimport'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from sense_hat import SenseHat');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E55F2B");
      this.setTooltip('Imports the Sense Hat library');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['senseimportemu'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from sense_emu import SenseHat');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E55F2B");
      this.setTooltip('Imports the Sense Hat Emulator library');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['senserotation'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('sense.set_rotation(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E55F2B");
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['senseflip'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('sense.flip_h(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E55F2B");
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['senseflipv'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('sense.flip_v(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E55F2B");
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['sensesetpix'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('sense.set_pixels(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E55F2B");
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };
}