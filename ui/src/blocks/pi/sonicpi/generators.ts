export default function define(Python: Blockly.BlockGenerators) {
  Python['import_sonic'] = function (block) {
    // TODO: Assemble Python into code variable.
    let code = 'from psonic import *\n';
    return code;
  };

  Python['sampleson'] = function (block) {
    var text_name = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'sample(' + text_name + ')\n';
    return code;
  };

  Python['synth'] = function (block) {
    var text_name = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'use_synth(' + text_name + ')\n';
    return code;
  };

  Python['play'] = function (block) {
    var text_value = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'play(' + text_value + ')\n';
    return code;
  };

  Python['sleep1'] = function (block) {
    var text_value = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'sleep(' + text_value + ')\n';
    return code;
  };

  Python['liveloop'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
    const dropdown_num = block.getFieldValue('num');
    // TODO: Assemble Python into code variable.
    let code = '\ndef live_loop_' + dropdown_num + '():\n' + branch;
    code = code + '\nlive_thread_' + dropdown_num + '.start()\n';
    return code;
  };
}
