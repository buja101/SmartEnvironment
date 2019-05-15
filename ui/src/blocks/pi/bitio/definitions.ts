export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['importmb'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("import microbit");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C227E2");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blocks['displayscrolltext'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("microbit.display.scroll(\"")
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField("\")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C227E2");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['displayscrollvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("microbit.display.scroll(")
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C227E2");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['microsleep'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("microbit.sleep(")
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C227E2");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['displayshow'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("microbit.display.show(")
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C227E2");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['displayclear'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("microbit.display.clear()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C227E2");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


}
