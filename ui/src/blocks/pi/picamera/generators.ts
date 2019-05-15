export default function define(Python: Blockly.BlockGenerators) {
  Python['import_picamera'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from picamera import *\n';
    return code;
  };

  Python['create_camera'] = function(block) {
	  // TODO: Assemble Python into code variable.
	  var code = 'camera = PiCamera()\n';
	  return code;
	};
	Python['setrotation'] = function(block) {
	  var text_rot = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.rotation = ' + text_rot + '\n';
	  return code;
	};
	Python['start_preview'] = function(block) {
	  var text_alpha = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.start_preview(' +text_alpha+ ')\n';
	  return code;
	};
	Python['stop_preview'] = function(block) {
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.stop_preview()\n';
	  return code;
	};
	Python['capture_savepath'] = function(block) {
	  var text_path = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.capture(\'' + text_path +'\')\n';
	  return code;
	};
	Python['capture_savepathmore'] = function(block) {
	  var text_path = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.capture(' + text_path +')\n';
	  return code;
	};
	Python['start_recording'] = function(block) {
	  var text_path = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.start_recording(' + text_path + ')\n';
	  return code;
	};
	Python['wait_recording'] = function(block) {
	  var text_time = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.wait_recording(' + text_time + ')\n';
	  return code;
	};
	Python['stop_recording'] = function(block) {
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.stop_recording()\n';
	  return code;
	};
	Python['set_resolution'] = function(block) {
	  var text_width = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  var text_high = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.resolution = (' + text_width + ',' + text_high + ')\n';
	  return code;
	};
	Python['set_framerate'] = function(block) {
	  var text_frame = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.framerate = ' + text_frame + '\n';
	  return code;
	};
	Python['set_textsize'] = function(block) {
	  var text_size = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.annotate_text_size = ' + text_size + '\n';
	  return code;
	};
	Python['show_text'] = function(block) {
	  var text_str = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.annotate_text =' + text_str +'\n';
	  return code;
	};
	Python['set_brightness'] = function(block) {
	  var text_bright = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.brightness = ' + text_bright + '\n';
	  return code;
	};
	Python['set_contrast'] = function(block) {
	  var text_cont = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.contrast = ' + text_cont + '\n';
	  return code;
	};
	Python['image_effect'] = function(block) {
	  var dropdown_op = block.getFieldValue('OP');
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.image_effect =' + dropdown_op +'\n';
	  return code;
	};
	Python['awb_mode'] = function(block) {
	  var dropdown_op = block.getFieldValue('OP');
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.awb_mode =' + dropdown_op +'\n';
	  return code;
	};
	Python['exposure_mode'] = function(block) {
	  var dropdown_op = block.getFieldValue('OP');
	  // TODO: Assemble Python into code variable.
	  var code = 'camera.exposure_mode =' + dropdown_op +'\n';
	  return code;
	};
}

