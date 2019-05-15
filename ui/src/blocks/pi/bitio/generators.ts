export default function define(Python: Blockly.BlockGenerators) {
  Python['importmb'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'import microbit\n';
    return code;
  };

  Python['displayscrolltext'] = function (block) {
    var text_message = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'microbit.display.scroll("' + text_message + '")\n';
    return code;
  };

  Python['displayscrollvar'] = function (block) {
    var text_varmess = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'microbit.display.scroll(' + text_varmess + ')\n';
    return code;
  };

  Python['microsleep'] = function (block) {
    var text_time = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'microbit.sleep(' + text_time + ')\n';
    return code;
  };

  Python['displayshow'] = function (block) {
    var text_show = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'microbit.display.show(' + text_show + ')\n';
    return code;
  };

  Python['displayclear'] = function (block) {
    // var text_show = block.getFieldValue('show');
    // TODO: Assemble Python into code variable.
    var code = 'microbit.display.clear()\n';
    return code;
  };
}
