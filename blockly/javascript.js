Blockly.JavaScript['shock_new'] = function (block) {
  var dropdown_pin_ = block.getFieldValue('pin_');
  var code = 'getShock(board, bitGPIO(' + dropdown_pin_ + '))';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['shock_event'] = function (block) {
  var variable_var_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_'), Blockly.Variables.NAME_TYPE);
  var dropdown_event_ = block.getFieldValue('event_');
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = variable_var_ + '.on("' + dropdown_event_ + '", async function(){\n' +
    '  console.log("' + dropdown_event_ + '");\n' +
    '  ' + statements_do_ + '\n' +
    '});\n';
  return code;
};
