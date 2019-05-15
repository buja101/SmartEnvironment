export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['import_iotloranode'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("from iotloranode import loraNode");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a");
          this.setTooltip("Imports Lora Node library.");
          this.setHelpUrl("");
        }
    };

    Blocks['lora_init'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField(" = loranode()");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a");
       this.setTooltip("");
       this.setHelpUrl("");
        }
    };

    Blocks['lorasetup_devaddr'] = {
        init: function() {
          this.appendValueInput("text")
              .setCheck(null)
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField(".set_devAddr(");
          this.appendDummyInput()
              .appendField(")");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a");
          this.setTooltip("");
          this.setHelpUrl("");
        }
    };

    Blocks['lorasetup_networkkey'] = {
        init: function() {
          this.appendValueInput("text")
              .setCheck(null)
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField(".set_networkKey(");
          this.appendDummyInput()
              .appendField(")");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a");
          this.setTooltip("");
          this.setHelpUrl("");
        }
    };

    Blocks['lorasetup_networkkey'] = {
        init: function() {
          this.appendValueInput("text")
              .setCheck(null)
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField(".set_networkKey(");
          this.appendDummyInput()
              .appendField(")");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a");
          this.setTooltip("");
          this.setHelpUrl("");
        }
    };

    Blocks['lorasetup_appsession'] = {
        init: function() {
          this.appendValueInput("text")
              .setCheck(null)
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField(".set_appSessionKey(");
          this.appendDummyInput()
              .appendField(")");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a");
          this.setTooltip("");
          this.setHelpUrl("");
        }
    };

    Blocks['lorasetup_join'] = {
        init: function() {       
          this.appendDummyInput()
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField(".join(")
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField(".");
        this.appendValueInput("text")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(")");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a");
          this.setTooltip("");
          this.setHelpUrl("");
        }
    };

    Blocks['lora_sendstring'] = {
        init: function() {
          this.appendValueInput("text")
              .setCheck(null)
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField("send_string_packet(");
          this.appendDummyInput()
              .appendField(")");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a");
          this.setTooltip("");
          this.setHelpUrl("");
        }
    };
}
