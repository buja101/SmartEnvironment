export default function define(Python: Blockly.BlockGenerators) {
  Python['ehimport'] = function (block) {
    // TODO: Assemble Python into code variable.
    let code = 'import explorerhat\n';
    return code;
  };

  Python['ehtouch'] = function (block) {
    let dropdown_padnumber = block.getFieldValue('padnumber');
    let dropdown_event = block.getFieldValue('event');
    let text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'explorerhat.touch.' + dropdown_padnumber + '.' + dropdown_event + '(' + text_bracket + ')\n';
    return code;
  };

  Python['ehinput'] = function (block) {
    let dropdown_inputnumber = block.getFieldValue('inputnumber');
    let dropdown_inputevent = block.getFieldValue('inputevent');
    let text_bracketin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'explorerhat.input.' + dropdown_inputnumber + '.' + dropdown_inputevent + '(' + text_bracketin + ')\n';
    return code;
  };

  Python['ehoutput'] = function (block) {
    let dropdown_outputnumber = block.getFieldValue('outputnumber');
    let dropdown_outputevent = block.getFieldValue('outputevent');
    let text_bracketout = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'explorerhat.output.' + dropdown_outputnumber + '.' + dropdown_outputevent + '(' + text_bracketout + ')\n';
    return code;
  };

  Python['ehlights'] = function (block) {
    let dropdown_lightnumber = block.getFieldValue('lightnumber');
    let dropdown_lightevent = block.getFieldValue('lightevent');
    let text_bracketlight = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'explorerhat.light.' + dropdown_lightnumber + '.' + dropdown_lightevent + '(' + text_bracketlight + ')\n';
    return code;
  };

  Python['ehanalog'] = function (block) {
    let dropdown_analognumber = block.getFieldValue('analognumber');
    let dropdown_analogevent = block.getFieldValue('analogevent');
    let text_bracketanalog = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'explorerhat.analog.' + dropdown_analognumber + '.' + dropdown_analogevent + '(' + text_bracketanalog + ')\n';
    return code;
  };

  Python['ehmotor'] = function (block) {
    let dropdown_motornumber = block.getFieldValue('motornumber');
    let dropdown_motorevent = block.getFieldValue('motorevent');
    let text_bracketmotor = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'explorerhat.motor.' + dropdown_motornumber + '.' + dropdown_motorevent + '(' + text_bracketmotor + ')\n';
    return code;
  };

  Python['blinktimport'] = function (block) {
    // TODO: Assemble Python into code variable.
    let code = 'from blinkt import *\n';
    return code;
  };

  Python['blinktsetpixel'] = function (block) {
    let text_pixelno = block.getFieldValue('pixelno');
    let text_r = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    let text_g = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    let text_b = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'set_pixel(' + text_pixelno + ', ' + text_r + ', ' + text_g + ', ' + text_b + ')\n';
    return code;
  };

  Python['blinktshow'] = function (block) {
    // TODO: Assemble Python into code variable.
    let code = 'show()\n';
    return code;
  };

  Python['blinktsetbrightness'] = function (block) {
    let text_number = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'set_brightness(' + text_number + ')\n';
    return code;
  };

  Python['blinktsetall'] = function (block) {
    let text_r = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    let text_g = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    let text_b = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'set_all(' + text_r + ', ' + text_g + ', ' + text_b + ')\n';
    return code;
  };

  Python['blinktsetallbright'] = function (block) {
    // let text_pixelno = block.getFieldValue('pixelno');
    let text_r = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    let text_g = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);;
    let text_b = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC);
    let text_bright = Blockly.Python.valueToCode(block, 'text3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'set_all(' + text_r + ', ' + text_g + ', ' + text_b + ',' + text_bright + ')\n';
    return code;
  };

  Python['blinktclear'] = function (block) {
    // TODO: Assemble Python into code variable.
    let code = 'clear()\n';
    return code;
  };
}
