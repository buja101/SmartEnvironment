export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['webdefine'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('def ');
      this.appendValueInput('1')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('(');
      this.appendValueInput('2')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('):');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#CDDA36");
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['webreturn2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('return');
      this.appendValueInput('return')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
      this.setColour("#CDDA36");
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['webclass'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('class')
      this.appendValueInput("class")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#CDDA36");
      this.setTooltip('Class Statement.');
      this.setHelpUrl('');
    },
  };

}

