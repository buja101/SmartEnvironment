export default function define(Blocks: Blockly.BlockDefinitions) {
 
    Blocks['import_ir'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("import ir");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(105);
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };
 
}