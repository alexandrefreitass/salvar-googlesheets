function Salvar(){

    var planilha = SpreadsheetApp.getActiveSpreadsheet();
    var guia = planilha.getSheetByName("EFETIVO");
  
    var dadosMenu = guia.getRange("B6:F6").getValues();
    var dadosExistentes = guia.getRange("B10:F" + guia.getLastRow()).getValues();
  
    if (dadosMenu.length === 0 || dadosMenu[0][0] === "") {
      Browser.msgBox("Não tem registros para Salvar!");
      return;
    }
  
    // Verificação de IDs duplicados
    var idsRepetidos = [];
    for (var i = 0; i < dadosMenu.length; i++) {
      Logger.log(dadosMenu.length);
      var idMenu = dadosMenu[i][1];
      Logger.log(idMenu);
      if (idMenu !== "" && dadosExistentes.some(dado => dado[1] === idMenu)) {
        idsRepetidos.push(idMenu);
      }
    }
  
    if (idsRepetidos.length > 0) {
      Browser.msgBox("Cancelado, tem ids repetidos: " + idsRepetidos.join(", "));
      return;
    }
  
    // Salvar novos dados
    var ultimaLinha = guia.getLastRow() + 1;
    guia.getRange(ultimaLinha, 2, dadosMenu.length, dadosMenu[0].length).setValues(dadosMenu);
    Browser.msgBox("Salvo com sucesso!");
    guia.getRange("B6:F6").clearContent();
  
  }