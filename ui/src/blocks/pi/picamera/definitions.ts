export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['import_picamera'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("from picamera import *");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("Import PiCamera and Color library");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['create_camera'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera = PiCamera()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("Create a camera Object named camera.");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['setrotation'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.rotation = ")
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("Set camera rotate. you can rotate the image by 0,90,180,or 270 degrees");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['start_preview'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.start_preview(")
        this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("Now start open camera for preview the image and set alpha value,range 0~255");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['stop_preview'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.stop_preview()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("close camera for preview the image.");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['capture_savepath'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.capture(‘")
        this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField("’)");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("capture a image and save to the path you want.");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['capture_savepathmore'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.capture(")
        this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("loop to capture a image and save to the path you want.");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['start_recording'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.start_recording(‘")
        this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField("’)");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("Now start recording video and save to the path you want.");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['wait_recording'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.wait_recording( ")
        this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("wait recording video that it will pause for the number of seconds specified");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['stop_recording'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.stop_recording()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("stop recording video.");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['set_resolution'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.resolution = ( ")
        this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField("，")
        this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("set to the rasolution of your monitor,\n but the maximum resolution is 2592 x 1944 for still photos \n and 1920 x 1080 for video recording");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['set_framerate'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.framerate = ")
        this.appendValueInput("text")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("set the frame rate to 15 to enable this maximum resolution");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['set_textsize'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.annotate_text_size = ")
        this.appendValueInput("text")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("set the annotation text size.Valid sizes are 6 to 160. The default is 32.");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['show_text'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.annotate_text =")
        this.appendValueInput("text")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("add text to your image.");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['set_brightness'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.brightness = ")
        this.appendValueInput("text")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("the brightness setting, which can be set from 0 to 10. The default is 50.");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['set_contrast'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.contrast = ")
        this.appendValueInput("text")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("the contrast setting, which can be set from 0 to 10.");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['image_effect'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.image_effect = ")
        .appendField(new Blockly.FieldDropdown([["none", "'none'"], ["negative", "'negative'"], ["solarize", "'solarize'"], ["sketch", "'sketch'"], ["denoise", "'denoise'"], ["emboss", "'emboss'"], ["olipaint", "'olipaint'"], ["hatch", "'hatch'"], ["gpen", "'gpen'"], ["pastel", "'pastel'"], ["watercolor", "'watercolor'"], ["film", "'film'"], ["blur", "'blur'"], ["saturation", "'saturation'"], ["colorswap", "'colorswap'"], ["washedout", "'washedout'"], ["posterise", "'posterise'"], ["colorpoint", "'colorpoint'"], ["colorbalance", "'colorbalance'"], ["cartoon", "'cartoon'"], ["deinterlace1", "'deinterlace1'"], ["deinterlace2", "'deinterlace2'"]]), "OP");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['awb_mode'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.awb_mode = ")
        .appendField(new Blockly.FieldDropdown([["auto", "'auto'"], ["off", "'off'"], ["sunlight", "'sunlight'"], ["cloudy", "'cloudy'"], ["shade", "'shade'"], ["tungsten", "'tungsten'"], ["fluorescent", "'fluorescent'"], ["incandescent", "'incandescent'"], ["flash", "'flash'"], ["horizon", "'horizon'"]]), "OP");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['exposure_mode'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("camera.exposure_mode = ")
        .appendField(new Blockly.FieldDropdown([["auto", "'auto'"], ["off", "'off'"], ["night", "'night'"], ["nightpreview", "'nightpreview'"], ["backlight", "'backlight'"], ["spotlight", "'spotlight'"], ["sports", "'sports'"], ["snow", "'snow'"], ["beach", "'beach'"], ["verylong", "'verylong'"], ["fixedfps", "'fixedfps'"], ["antishake", "'antishake'"], ["fireworks", "'fireworks'"]]), "OP");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
}
