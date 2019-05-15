export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['ehimport'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import explorerhat');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);

      this.setTooltip('Import the Explorer Hat library');
      this.setHelpUrl('');
    },
  };

  Blocks['ehtouch'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('explorerhat.touch.')
        .appendField(new Blockly.FieldDropdown([['one', 'one'], ['two', 'two'], ['three', 'three'], ['four', 'four'], ['five', 'five'], ['six', 'six'], ['seven', 'seven'], ['eight', 'eight']]), 'padnumber')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['is_pressed', 'is_pressed'], ['is_held', 'is_held'], ['pressed', 'pressed'], ['held', 'held'], ['released', 'released']]), 'event')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);

      this.setTooltip('Control the eight cap touch buttons on Explorer Hat');
      this.setHelpUrl('');
    },
  };

  Blocks['ehinput'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('explorerhat.input.')
        .appendField(new Blockly.FieldDropdown([['one', 'one'], ['two', 'two'], ['three', 'three'], ['four', 'four']]), 'inputnumber')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['read', 'read'], ['has_changed', 'has_changed'], ['on_changed', 'on_changed'], ['on_low', 'on_low'], ['on_high', 'on_high'], ['clear_events', 'clear_events']]), 'inputevent')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);

      this.setTooltip('Control the 4 inputs on Explorer Hat');
      this.setHelpUrl('');
    },
  };

  Blocks['ehoutput'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('explorerhat.output.')
        .appendField(new Blockly.FieldDropdown([['one', 'one'], ['two', 'two'], ['three', 'three'], ['four', 'four']]), 'outputnumber')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['toggle', 'toggle'], ['write', 'write'], ['blink', 'blink'], ['pulse', 'pulse'], ['fade', 'fade'], ['stop', 'stop']]), 'outputevent')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);

      this.setTooltip('Contol the 4 outputs on Explorer Hat');
      this.setHelpUrl('');
    },
  };

  Blocks['ehlights'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('explorerhat.light.')
        .appendField(new Blockly.FieldDropdown([['yellow', 'yellow'], ['blue', 'blue'], ['red', 'red'], ['green', 'green']]), 'lightnumber')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['toggle', 'toggle'], ['write', 'write'], ['blink', 'blink'], ['pulse', 'pulse'], ['fade', 'fade'], ['stop', 'stop']]), 'lightevent')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);

      this.setTooltip('Control the 4 lights on Explorer Hat');
      this.setHelpUrl('');
    },
  };

  Blocks['ehanalog'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('explorerhat.analog.')
        .appendField(new Blockly.FieldDropdown([['one', 'one'], ['two', 'two'], ['three', 'three'], ['four', 'four']]), 'analognumber')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['read', 'read'], ['changed', 'changed']]), 'analogevent')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);

      this.setTooltip('Control the 4 Analog Inputs on Explorer Hat');
      this.setHelpUrl('');
    },
  };

  Blocks['ehmotor'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('explorerhat.motor.')
        .appendField(new Blockly.FieldDropdown([['one', 'one'], ['two', 'two']]), 'motornumber')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['forwards', 'forwards'], ['backwards', 'backwards'], ['invert', 'invert'], ['speed', 'speed'], ['stop', 'stop']]), 'motorevent')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);

      this.setTooltip('Control the 2 motor outputs on Explorer Hat');
      this.setHelpUrl('');
    },
  };

  Blocks['blinktimport'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from blinkt import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip('Import the Blinkt! library.');
      this.setHelpUrl('');
    },
  };

  Blocks['blinktsetpixel'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('set_pixel(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip('Set a pixel on the Blinkt!');
      this.setHelpUrl('');
    },
  };

  Blocks['blinktshow'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('show()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip('Update the Blinkt! to show your code');
      this.setHelpUrl('');
    },
  };

  Blocks['blinktsetbrightness'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('set_brightness(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip('Set the brightness of your Blinkt!');
      this.setHelpUrl('');
    },
  };

  Blocks['blinktsetall'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('set_all(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip('Set all the pixels on your Blinkt!');
      this.setHelpUrl('');
    },
  };

  Blocks['blinktsetallbright'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('set_all(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip('Set all the pixels on your Blinkt! with brightness control');
      this.setHelpUrl('');
    },
  };

  Blocks['blinktclear'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('clear()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip('Clear all pixels on your Blinkt!');
      this.setHelpUrl('');
    },
  };
}
