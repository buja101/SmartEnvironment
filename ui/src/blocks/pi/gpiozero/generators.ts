export default function define(Python: Blockly.BlockGenerators) {
  Python['importgpiozero'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'from gpiozero import *\n';
    return code;
  };

  Python['importtime'] = function (block) {
    // TODO: Assemble Python into code variable. 
    const code = 'from datetime import time\n';
    return code;
  };

  Python['buttonset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('button'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = Button(' + text_pin + ')\n';
    return code;
  };

  Python['lineset'] = function (block) {
    var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensor'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_sensor + ' = LineSensor(' + text_pin + ')\n';
    return code;
  };

  Python['motionset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motion'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = MotionSensor(' + text_pin + ')\n';
    return code;
  };

  Python['lightset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('ldr'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = LightSensor(' + text_pin + ')\n';
    return code;
  };

  Python['distanceset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('distance'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = DistanceSensor(' + text_pin + ')\n';
    return code;
  };

  Python['ledset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('led'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = LED(' + text_pin + ')\n';
    return code;
  };

  Python['pledset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('pwm'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = PWMLED(' + text_pin + ')\n';
    return code;
  };

  Python['rgbledset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('rgb'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = RGBLED(' + text_pin + ')\n';
    return code;
  };

  Python['buzzerset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buzzer'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = Buzzer(' + text_pin + ')\n';
    return code;
  };

  Python['motorset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motor'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = Motor(' + text_pin + ')\n';
    return code;
  };

  Python['servoset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('servo'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = Servo(' + text_pin + ')\n';
    return code;
  };

  Python['angset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('angular'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = AngularServo(' + text_pin + ')\n';
    return code;
  };

  Python['ledbset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('leds'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = LEDBoard(' + text_pin + ')\n';
    return code;
  };

  Python['graphset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('graph'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = LEDBarGraph(' + text_pin + ')\n';
    return code;
  };

  Python['buttonbset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buttonb'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = ButtonBoard(' + text_pin + ')\n';
    return code;
  };

  Python['buttonaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('button'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['lineaction'] = function (block) {
    var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensor'), Blockly.Variables.NAME_TYPE);
    var dropdown_action = block.getFieldValue('action');
    var text_sense = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_sensor + '.' + dropdown_action + '(' + text_sense + ')\n';
    return code;
  };

  Python['motionaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motion'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['lightaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('ldr'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['distanceaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('distance'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['ledaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('led'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['pledaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('pwm'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['rgbledaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('rgb'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['buzzeraction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buzzer'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['motoraction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motor'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['servoaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('servo'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['angaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('angular'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['ledbaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('leds'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['graphaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('graph'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['buttonbaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buttonb'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['buttonvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('button'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['motionvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motion'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['lineaction'] = function (block) {
    var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensor'), Blockly.Variables.NAME_TYPE);
    var text_first = block.getFieldValue('first');
    var text_second = block.getFieldValue('second');
    // TODO: Assemble Python into code variable.
    var code = variable_sensor + '.' + text_first + ' = ' + text_second + '\n';
    return code;
  };


  Python['lightvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('ldr'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['distancevar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('distance'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['ledvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('led'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['pledvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('pwm'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['rgbledvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('rgb'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['buzzervar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buzzer'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['motorvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motor'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['servovar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('servo'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['angvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('angular'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['ledbvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('leds'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['graphvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('graph'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['buttonbvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buttonb'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['trafficset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('traffic'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = TrafficLights(' + text_pin + ')\n';
    return code;
  };

  Python['trafficaction'] = function (block) {
    var variable_traffic = Blockly.Python.variableDB_.getName(block.getFieldValue('traffic'), Blockly.Variables.NAME_TYPE);
    var dropdown_colour = block.getFieldValue('colour');
    var dropdown_action = block.getFieldValue('action');
    // TODO: Assemble Python into code variable.
    var code = variable_traffic + '.' + dropdown_colour + '.' + dropdown_action + '()\n';
    return code;
  };

  Python['trafficvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('traffic'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };


  Python['pingset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('server'), Blockly.Variables.NAME_TYPE);
    var text_num = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = PingServer(' + text_num + ')\n';
    return code;
  };

  Python['cpuset'] = function (block) {
    var variable_cpu = Blockly.Python.variableDB_.getName(block.getFieldValue('cpu'), Blockly.Variables.NAME_TYPE);
    var text_num = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_num2 = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_cpu + ' = CPUTemprature(min_temp(' + text_num + '), max_temp(' + text_num2 + '))...\n';
    return code;
  };

  Python['adc'] = function (block) {
    var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var dropdown_name = block.getFieldValue('NAME');
    var text_channel = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_var + ' = ' + dropdown_name + '(' + text_channel + ')\n';
    return code;
  };

  Python['energenieset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('lamp'), Blockly.Variables.NAME_TYPE);
    var text_num = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = Energenie(' + text_num + ')\n';
    return code;
  };

  Python['energenieaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('lamp'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['energenievar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('lamp'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['camjamset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('camjam'), Blockly.Variables.NAME_TYPE);

    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = CamJamKitRobot()\n';
    return code;
  };

  Python['camjamaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('camjam'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    var text_bracket = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['camjamvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('camjam'), Blockly.Variables.NAME_TYPE);
    var text_action = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_act = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['timeset'] = function (block) {
    var variable_morning = Blockly.Python.variableDB_.getName(block.getFieldValue('morning'), Blockly.Variables.NAME_TYPE);
    var text_num = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_num2 = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_morning + ' = TimeOfDay(Time(' + text_num + '), Time(' + text_num2 + '))\n';
    return code;
  };


}
