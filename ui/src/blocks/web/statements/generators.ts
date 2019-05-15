export default function define(Python: Blockly.BlockGenerators) {
  Python['websleepnew'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'sleep', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'time.sleep(' +value_name+ ')\n';
    return code;
  };

  Python['webtypeanything'] = function(block) {
    var text_stuff = Blockly.Python.valueToCode(block, 'stuff', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = text_stuff + '# your own code\n';
    return code;
  };

  Python['webdf'] = function (block) {
    const text_def = Blockly.Python.valueToCode(block, 'def', Blockly.Python.ORDER_ATOMIC);
    const text_params = Blockly.Python.valueToCode(block, 'params', Blockly.Python.ORDER_ATOMIC)
    const code = text_def + '(' + text_params + ')\n';
    return code;
  };

  Python['webpass'] = function (block) {
    const code = 'pass \n';
    return code;
  };

  Python['webprintnew'] = function (block) {
    var text_print = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = 'print("' + text_print + '")\n';
    return code;
  };

  Python['global'] = function (block) {
    var text_print = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = 'global ' + text_print + '\n';
    return code;
  };

  Python['webvarprint'] = function (block) {
    const text_const = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = 'print(' + text_const + ')\n';
    return code;
  };

  Python['webint'] = function (block) {
    var value_bool = Blockly.Python.valueToCode(block, 'bool', Blockly.Python.ORDER_ATOMIC);
    const code = 'int(' +  value_bool+ ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['webstr'] = function (block) {
    var value_bool = Blockly.Python.valueToCode(block, 'bool', Blockly.Python.ORDER_ATOMIC);
    const code = 'str(' +  value_bool+ ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}
