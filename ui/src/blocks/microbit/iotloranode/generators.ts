export default function define(Python: Blockly.BlockGenerators) {
    Python['import_iotloranode'] = function(block) {
        var code = 'from iotloranode import loraNode\n';
        return code;
    };

    Python['lora_init'] = function(block) {
        var variable_node = Blockly.Python.variableDB_.getName(block.getFieldValue('node'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble Python into code variable.
        var code = variable_node+ ' = loranode()\n';
        return code;
    };

    Python['lorasetup_devaddr'] = function(block) {
        var variable_node = Blockly.Python.variableDB_.getName(block.getFieldValue('node'), Blockly.Variables.NAME_TYPE);
        var value_name = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_node+ '.set_devAddr(' +value_name+ ')\n';
        return code;
    };

    Python['lorasetup_networkkey'] = function(block) {
        var variable_node = Blockly.Python.variableDB_.getName(block.getFieldValue('node'), Blockly.Variables.NAME_TYPE);
        var value_name = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_node+ '.set_networkKey(' +value_name+ ')\n';
        return code;
    };

    Python['lorasetup_appsession'] = function(block) {
        var variable_node = Blockly.Python.variableDB_.getName(block.getFieldValue('node'), Blockly.Variables.NAME_TYPE);
        var value_name = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_node+ '.set_appSessionKey(' +value_name+ ')\n';
        return code;
    };

    Python['lorasetup_join'] = function(block) {
        var variable_node = Blockly.Python.variableDB_.getName(block.getFieldValue('node'), Blockly.Variables.NAME_TYPE);
        var value_name = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_node+ '.join(' +variable_node+ '.' +value_name+ ')\n';
        return code;
    };

    Python['lora_sendstring'] = function(block) {
        var variable_node = Blockly.Python.variableDB_.getName(block.getFieldValue('node'), Blockly.Variables.NAME_TYPE);
        var value_name = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_node+ 'send_string_packet(' +value_name+ ')\n';
        return code;
    };
}
