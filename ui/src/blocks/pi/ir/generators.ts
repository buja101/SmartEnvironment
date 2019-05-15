export default function define(Python: Blockly.BlockGenerators) {
 
    Python['import_ir'] = function(block) {
        var code = 'from lirc import * \n';
        return code;
      };
 
}