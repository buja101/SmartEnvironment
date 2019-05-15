export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['importgpiozero'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from gpiozero import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E4E436");
      this.setTooltip('Import the gpiozero library');
      this.setHelpUrl('http://gpiozero.readthedocs.io');
    },
  };

  Blocks['importtime'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from datetime import time');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E4E436");
      this.setTooltip('Import the datetime library');
      this.setHelpUrl('http://gpiozero.readthedocs.io');
    },
  };

  Blocks['buttonset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('button'), 'button')
        .appendField(' = Button(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set a variable for a button');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#button');
    },
  };



  Blocks['lineset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("sensor"), "sensor")
        .appendField(" = LineSensor(")
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip("Setup a line sensor");
      this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000");
    }
  };

  Blocks['motionset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pir'), 'pir')
        .appendField(' = MotionSensor(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set a variable for a MotionSensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#motion-sensor-d-sun-pir');
    },
  };

  Blocks['lightset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ldr'), 'ldr')
        .appendField(' = LightSensor(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set a variable for a Light Sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr');
    },
  };

  Blocks['distanceset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('distance'), 'distance')
        .appendField(' = DistanceSensor(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set a variable for a Distance Sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#distance-sensor-hc-sr04');
    },
  };

  Blocks['ledset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('led'), 'led')
        .appendField(' = LED(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for an LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#led');
    },
  };

  Blocks['pledset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pwm'), 'pwm')
        .appendField(' = PWMLED(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for an PWMLED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled');
    },
  };

  Blocks['rgbledset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('rgb'), 'rgb')
        .appendField(' = RGBLED(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for an RGB LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled');
    },
  };

  Blocks['buzzerset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buzzer'), 'buzzer')
        .appendField(' = Buzzer(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for an Buzzer');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer');
    },
  };

  Blocks['motorset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('motor'), 'motor')
        .appendField(' = Motor(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for a Motor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#motor');
    },
  };

  Blocks['servoset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('servo'), 'servo')
        .appendField(' = Servo(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for a Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#servo');
    },
  };

  Blocks['angset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('angular'), 'angular')
        .appendField(' = AngularServo(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for an Angular Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#angularservo');
    },
  };

  Blocks['ledbset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('leds'), 'leds')
        .appendField(' = LEDBoard(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set a variable for an LED Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledboard');
    },
  };

  Blocks['graphset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('graph'), 'leds')
        .appendField(' = LEDBarGraph(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set a variable for an LED Bar Graph');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledbargraph');
    },
  };

  Blocks['buttonbset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buttonb'), 'buttonb')
        .appendField(' = ButtonBoard(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set a variable for a Button Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#buttonboard');
    },
  };

  Blocks['buttonaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('button'), 'button')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_press', 'wait_for_press'], ['wait_for_release', 'wait_for_release']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set a variable for a button');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#button');
    },
  };

  Blocks['lineaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('sensor'), 'sensor')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_line', 'wait_for_line'], ['wait_for_no_line', 'wait_for_no_line']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set a variable for a Line Sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };


  Blocks['motionaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pir'), 'pir')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_motion', 'wait_for_motion'], ['wait_for_no_motion', 'wait_for_no_motion']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set a variable for a motion sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['lightaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ldr'), 'ldr')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_dark', 'wait_for_dark'], ['wait_for_light', 'wait_for_light']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set a variable for a light sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr');
    },
  };

  Blocks['distanceaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('distance'), 'distance')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_in_range', 'wait_for_in_range'], ['wait_for_out_of_range', 'wait_for_out_of_range']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set a variable for a distance sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr');
    },
  };

  Blocks['ledaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('led'), 'led')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['blink', 'blink'], ['toggle', 'toggle']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for an LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#led');
    },
  };

  Blocks['pledaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pwm'), 'pwm')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['blink', 'blink'], ['toggle', 'toggle'], ['pulse', 'pulse']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for an PWM LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled');
    },
  };

  Blocks['rgbledaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('rgb'), 'rgb')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['blink', 'blink'], ['toggle', 'toggle'], ['pulse', 'pulse'], ['color', 'color']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for an RGB LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled');
    },
  };

  Blocks['buzzeraction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buzzer'), 'buzzer')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['beep', 'beep'], ['toggle', 'toggle']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for a Buzzer');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer');
    },
  };

  Blocks['motoraction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('motor'), 'motor')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['forward', 'forward'], ['backward', 'backward'], ['stop', 'stop']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for a Motor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#motor');
    },
  };

  Blocks['servoaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('servo'), 'servo')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['detach', 'detach'], ['max', 'max'], ['mid', 'mid'], ['min', 'min'], ['angle', 'angle']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for a Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#servo');
    },
  };

  Blocks['angaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('angular'), 'angular')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['detach', 'detach'], ['max', 'max'], ['mid', 'mid'], ['min', 'min'], ['angle', 'angle']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set a variable for an Angular Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#angularservo');
    },
  };

  Blocks['ledbaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('leds'), 'leds')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['blink', 'blink'], ['close', 'close'], ['on', 'off'], ['pulse', 'pulse'], ['toggle', 'toggle']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set a variable for an LED Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledboard');
    },
  };

  Blocks['graphaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('graph'), 'graph')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['toggle', 'toggle']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set a variable for an LED Bar Graph');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledbargraph');
    },
  };

  Blocks['buttonbaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buttonb'), 'buttonb')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_active', 'wait_for_active'], ['wait_for_inactive', 'wait_for_inactive'], ['wait_for_press', 'wait_for_press'], ['wait_for_release', 'wait_for_release']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set a variable for a Button Baord');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#buttonboard');
    },
  };


  Blocks['buttonvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('button'), 'button')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set an action variable for a button');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#button');
    },
  };

  Blocks['linevar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('sensor'), 'sensor')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set an action variable for a Sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['motionvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pir'), 'pir')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set an action variable for a motion sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };



  Blocks['lightvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ldr'), 'ldr')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set an action variable for a light sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };


  Blocks['distancevar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('distance'), 'disance')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16AEE5");
      this.setTooltip('Set an action variable for a Distance sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['ledvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('led'), 'led')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set an action variable for an LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#led');
    },
  };

  Blocks['pledvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pwm'), 'pwm')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set an action variable for an PWMLED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled');
    },
  };

  Blocks['rgbledvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('rgb'), 'rgb')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set an action variable for an RGB LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled');
    },
  };

  Blocks['buzzervar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buzzer'), 'buzzer')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set an action variable for an Buzzer');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer');
    },
  };

  Blocks['motorvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('motor'), 'motor')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set an action variable for a Motor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#motor');
    },
  };

  Blocks['servovar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('servo'), 'servo')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set an action variable for a Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#servo');
    },
  };

  Blocks['angvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('angular'), 'angular')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616");
      this.setTooltip('Set an action variable for an Angular Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#angularservo');
    },
  };

  Blocks['ledbvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('leds'), 'leds')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set an action variable for an LED Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledboard');
    },
  };

  Blocks['graphvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('graph'), 'graph')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set an action variable for an LED Bar Graph');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledbargraph');
    },
  };

  Blocks['buttonbvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buttonb'), 'buttonb')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set an action variable for a Button Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#buttonboard');
    },
  };

  Blocks['trafficset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('traffic'), 'traffic')
        .appendField(' = TrafficLights(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set a variable for a Traffic Light');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#trafficlights');
    },
  };

  Blocks['trafficaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("traffic"), "traffic")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["red", "red"], ["amber", "amber"], ["green", "green"]]), "colour")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"], ["blink", "blink"], ["pulse", "pulse"], ["toggle", "toggle"]]), "action")
        .appendField("()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip("Setup a Traffic Light");
      this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#trafficlights");
    }
  };

  Blocks['trafficvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('traffic'), 'traffic')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set an action variable for a Traffic Light');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#trafficlights');
    },
  };

  Blocks['pingset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('server'), 'server')
        .appendField(' = PingServer(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16E57E");
      this.setTooltip('Set a variable for a Ping Server');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_other.html#pingserver');
    },
  };

  Blocks['energenieset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('lamp'), 'lamp')
        .appendField(' = Energenie(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set a variable for an Energenie');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#energenie');
    },
  };

  Blocks['energenieaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('lamp'), 'lamp')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set a variable for an Energenie');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#energenie');
    },
  };

  Blocks['energenievar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('lamp'), 'lamp')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set an action variable for an Energenie');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#energenie');
    },
  };

  Blocks['camjamset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('camjam'), 'camjam')
        .appendField(' = CamJamKitRobot()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set a variable for a CamJam Kit 3');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#camjam-3-kit-robot');
    },
  };

  Blocks['camjamaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('camjam'), 'camjam')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['forward', 'forward'], ['backward', 'backward'], ['left', 'left'], ['right', 'right'], ['reverse', 'reverse'], ['stop', 'stop']]), 'action')
        .appendField('(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set a variable for an CamJam Kit 3');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#camjam-3-kit-robot');
    },
  };

  Blocks['camjamvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('camjam'), 'camjam')
        .appendField('.')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(' = ')
      this.appendValueInput("text1")
        .setCheck(null);

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5B116");
      this.setTooltip('Set an action variable for a CamJam Kit 3');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#camjam-3-kit-robot');
    },
  };

  Blocks['timeset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("morning"), "morning")
        .appendField(" = TimeOfDay(time(")
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField("), time(")
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField("))");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16E57E");
      this.setTooltip("Setup Time Of Day");
      this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_other.html#timeofday");
    }
  };

  Blocks['cpuset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("cpu"), "cpu")
        .appendField(" = CPUTemperature(min_temp(")
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField("), max_temp(")
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField("))");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16E57E");
      this.setTooltip("Setup CPU Temp");
      this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_other.html#cputemperature");
    }
  };

  Blocks['adc'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("var"), "var")
        .appendField(" = ")
        .appendField(new Blockly.FieldDropdown([["MCP3001", "MCP3001"], ["MCP3002", "MCP3002"], ["MCP3004", "MCP3004"], ["MCP3008", "MCP3008"], ["MCP3201", "MCP3201"], ["MCP3202", "MCP3202"], ["MCP3204", "MCP3204"], ["MCP3208", "MCP3208"], ["MCP3302", "MCP3302"], ["MCP3302", "MCP3302"], ["MCP3304", "MCP3304"]]), "NAME")
        .appendField("(")
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16E57E");
      this.setTooltip("Setup Analog to Digital Converters");
      this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_spi.html#analog-to-digital-converters-adc");
    }
  };


}
