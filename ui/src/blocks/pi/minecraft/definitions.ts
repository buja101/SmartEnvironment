export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['mcimport'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from mcpi.minecraft import Minecraft');
      this.setPreviousStatement(true, null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#7D21E1");
      this.setTooltip('Use this to import minecraft.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mccreate'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc = Minecraft.create()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#7D21E1");
      this.setTooltip('Use this to connect to minecraft. ALWAYS REQUIRED.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['import_block'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from mcpi import block');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#7D21E1");
      this.setTooltip('Imports the mcpi block library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mcpost'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.postToChat(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to send a message to the Minecraft chat.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mcpos'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('playerPos = mc.player.getPos()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this set a variable of the players position.');
      this.setHelpUrl('http://www.example.com/');
    },
  };


  Blockly.Blocks['setpos'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.player.setPos(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Set players position');
      this.setHelpUrl('');
    },
  };

  Blocks['campos'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.camera.setPos(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to set the cameras position');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['getblock'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('blockType = mc.getBlock(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to get a block type.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['cameraset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.camera.set')
        .appendField(new Blockly.FieldDropdown([['Fixed', 'Fixed'], ['Normal', 'Normal']]), 'drop')
        .appendField('()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Set camera mode.');
      this.setHelpUrl('');
    },
  };

  Blocks['setblock'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('blockType = mc.setBlock(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to set a block type.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mcvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('x, y, z = mc.player.getPos()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this set a variable of the players position.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mctext'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('blockType = mc.setBlock(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to set a block type with text');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mcblocks'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.setBlocks(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text4")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text5")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text6")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text7")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text8")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to set numerous blocks');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['build'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('buildPumpkin(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['printwall'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('PrintWall(PixelArt(');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '11')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '12')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '13')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '14')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '15')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '16')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '17')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '18')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '21')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '22')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '23')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '24')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '25')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '26')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '27')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '28')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '31')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '32')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '33')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '34')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '35')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '36')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '37')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '38')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '41')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '42')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '43')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '44')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '45')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '46')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '47')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '48')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '51')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '52')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '53')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '54')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '55')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '56')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '57')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '58')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '61')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '62')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '63')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '64')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '65')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '66')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '67')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '68')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '71')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '72')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '73')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '74')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '75')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '76')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '77')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '78')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '81')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '82')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '83')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '84')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '85')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '86')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '87')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '88')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('))');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(false);
      this.setColour("#19E32E");
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['mctext2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.setBlock(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to set a block type with text');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mctext5'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.setBlock(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text4")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to set a block type with text');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mcblocks8'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.setBlocks(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text4")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text5")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text6")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text7")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['return'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('return math.sqrt((xd*xd) + (yd*yd) + (zd*zd))');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Imports the edupy library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['getdist'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('distance_to_player(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blockly.Blocks['mcpiblockas'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import mcpi.block as block');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#7D21E1");
      this.setTooltip('Imports the Minecraft Block Library');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['defcall'] = {
    init: function () {
      this.appendDummyInput()
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('(')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Call a function');
      this.setHelpUrl('');
    },
  };
}
