export default function define(Python: Blockly.BlockGenerators) {

  Python['webdefine'] = function (block) {
    const text_1 = Blockly.Python.valueToCode(block, '1', Blockly.Python.ORDER_ATOMIC)
    const text_2 = Blockly.Python.valueToCode(block, '2', Blockly.Python.ORDER_ATOMIC)
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // const statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    const code = 'def ' + text_1 + '(' + text_2 + '):\n' + branch;
    return code;
  };

  Python['webreturn2'] = function (block) {
    const text_return = Blockly.Python.valueToCode(block, 'return', Blockly.Python.ORDER_ATOMIC)
    // TODO: Assemble Python into code variable.
    const code = 'return ' + text_return + '\n';
    return code;
  };

  Python['webclass'] = function (block) {
    const text_const = Blockly.Python.valueToCode(block, 'class', Blockly.Python.ORDER_ATOMIC);
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'class ' + text_const + ':\n' + branch;
  };

}
