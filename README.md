## Script de Gerenciamento de Pessoas no Google Sheets

<div align="center">
    <img src="https://github.com/alexandrefreitass/salvar-googlesheets/assets/109884524/282d50eb-9a94-463d-8dc3-3b778e1a669d" />
</div>

Este script foi desenvolvido para facilitar a gestão de registros de policiais em uma planilha do Google Sheets. Ele permite salvar um novo registro de policial verificando se já existe um registro similar para evitar duplicações. Além disso, o script foi projetado para ser facilmente adaptável a outras planilhas, possibilitando a duplicação do processo de salvamento em diferentes contextos.


### Funcionalidades

O script `Salvar()` realiza as seguintes operações:

- **Carrega a Planilha Ativa e a Guia Específica**: Acessa a planilha ativa e localiza a guia chamada "EFETIVO".

- **Leitura de Dados**: Extrai os dados da linha `B6:F6`, que é onde novos dados são inseridos pelo usuário.

- **Verificação de Campos Vazios**: Antes de proceder com qualquer operação de salvamento, verifica se a linha mencionada está vazia para evitar a gravação de registros sem dados.

- **Deteção de IDs Duplicados**: Checa se o ID inserido já existe na faixa de dados existentes (`B10:F` até a última linha com dados), prevenindo duplicidade de registros.

- **Salvar Novos Dados**: Se não houver duplicatas, os dados da linha `B6:F6` são salvos imediatamente após a última linha preenchida da guia.

- **Limpeza de Dados na Interface**: Após o salvamento, os dados da linha de entrada são limpos para preparar a interface para novas entradas.

- **Mensagens de Feedback**: Mensagens de caixa de diálogo são mostradas para informar o usuário quando não há dados para salvar, quando há duplicatas, ou quando o salvamento é realizado com sucesso.

### Código

**Acesso ao Dashboard**: O dashboard pode ser acessado através de [este link](https://docs.google.com/spreadsheets/d/1o-yNq6Witsaa3ud2kcfFpl79TBYcvfUdIK6sy62FjJI/edit#gid=712832960).

### Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/alexandrefreitass/salvar/blob/master/LICENSE) para mais detalhes.
