export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['websleepnew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("time.sleep(");
      this.appendValueInput("sleep")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip("Wait (in milliseconds)");
      this.setHelpUrl("");
    }
  };

  Blocks['webtypeanything'] = {
    init: function() {
      this.appendValueInput("stuff")
        .setCheck(null);
      this.appendDummyInput()   
          .appendField("# your own code");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip("Type any python code into this block");
      this.setHelpUrl("");
    }
  };


  Blocks['webdf'] = {
    init: function () {
      this.appendValueInput("def")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('(');
      this.appendValueInput("params")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('call a define function');
      this.setHelpUrl('');
    },
  };

  Blocks['webpass'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('pass');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Pass to the next command');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['webprintnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print("')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('" )');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Use this to print a string to the output box.');
      this.setHelpUrl('');
    },
  };

  Blocks['global'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('global ')
      this.appendValueInput("text")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Make a variable global');
      this.setHelpUrl('');
    },
  };

  Blocks['webvarprint'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print(')
      this.appendValueInput('var')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Use this to print a variable, a number, or even a string if you put in the quotes yourself.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['webint'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('int(');
      this.appendValueInput("bool")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
      this.setTooltip('Changes to an int');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['webstr'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('str(');
      this.appendValueInput("bool")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
      this.setTooltip('Changes to an str');
      this.setHelpUrl('http://www.example.com/');
    },
  };
}

