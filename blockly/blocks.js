Blockly.Blocks['shock_new_bit'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_NEW_BIT, "Shock ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["0~", "0"],
        ["1~ ( A4 )", "1"],
        ["2~ ( A5 )", "2"],
        ["3~", "3"],
        ["4~", "4"],
        ["5 ( A7 )", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10~", "10"],
        ["11", "11"],
        ["13", "13"],
        ["14", "14"],
        ["15", "15"],
        ["16", "16"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl(mainUrl + 'basic/component/shake-button.html' + utmUrl);
  }
};

Blockly.Blocks['shock_event'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_EVENT_WHEN, "當")
      .appendField(new Blockly.FieldVariable("shake"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_EVENT_WAS, "狀態為")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SHOCK_EVENT_HIGH, "high"],
        [Blockly.Msg.WEBDUINO_SHOCK_EVENT_LOW, "low"]
      ]), "event_")
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_EVENT_TO, "時");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_EVENT_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl(mainUrl + 'basic/component/shake-button.html' + utmUrl);
  }
};
