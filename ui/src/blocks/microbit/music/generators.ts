export default function define(Python: Blockly.BlockGenerators) {

  Python['musicplay'] = function (block) {
    var text_musicplay = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
    || '';
    let code = 'music.play(' + text_musicplay + ') \n';
    return code;
  };

  Python['songs'] = function(block) {
    var dropdown_songs = block.getFieldValue('songs');
    var code = dropdown_songs;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['musicimport'] = function (block) {
    let code = 'import music\n';
    return code;
  };

  Python['musicpitch'] = function (block) {
    var text_musicpitch = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
    || '';
    let code = 'music.pitch(' + text_musicpitch + ') \n';
    return code;
  };

  Python['musicreset'] = function(block) {
    // TODO: Assemble Python into code variable.
    const code = 'music.reset()\n';
    return code;
  };

  Python['musicstop'] = function(block) {
    // TODO: Assemble Python into code variable.
    const code = 'music.stop()\n';
    return code;
  };

  Python['musictempo'] = function (block) {
    var text_musictempo = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
    || '';
    let code = 'music.set_tempo(' + text_musictempo + ') \n';
    return code;
  };

  Python['musicgettempo'] = function (block) {
    const code = 'music.get_tempo()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
}
