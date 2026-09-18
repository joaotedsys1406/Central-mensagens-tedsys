// Adicione novas mensagens seguindo o mesmo formato.
const messages = [
  {
    category: "Atendimento",
    title: "Saudação inicial",
    text: "Olá! Tudo bem? Meu nome é [SEU NOME] e vou realizar o seu atendimento. Como posso te ajudar?"
  },
  {
    category: "Atendimento",
    title: "Aguardando validação",
    text: "Entendi. Só um momento enquanto verifico essa situação para você."
  },
  {
    category: "Atendimento",
    title: "Mais alguma coisa?",
    text: "Que bom! Eu poderia te ajudar em algo mais?"
  },
  {
    category: "Acesso remoto",
    title: "Solicitar acesso remoto",
    text: "Para que eu possa verificar essa situação, preciso acessar o computador remotamente. Você consegue me passar o acesso, por favor?"
  },
  {
    category: "Acesso remoto",
    title: "Solicitar acesso de outro PDV",
    text: "Entendi. Agora preciso verificar o outro PDV. Você consegue me passar o acesso remoto dessa máquina também, por favor?"
  },
  {
    category: "Acesso remoto",
    title: "Finalização após acesso",
    text: "Problema com o PDV foi solucionado. Muito obrigado pelos acessos, agora está tudo certinho. Tenha um ótimo dia e boas vendas!"
  },
  {
    category: "Fiscal",
    title: "Orientação da contabilidade",
    text: "Eu consigo te orientar sobre a utilização do sistema. Porém, para definir quais informações fiscais devem ser incluídas na nota, é necessário confirmar esses dados com a sua contabilidade."
  },
  {
    category: "Fiscal",
    title: "Nota de devolução",
    text: "Para a emissão da nota de devolução, a contabilidade deve informar quais dados e pontos fiscais precisam ser considerados. O produto também precisa estar cadastrado no ERP, assim como a transportadora de devolução, caso seja utilizada."
  },
  {
    category: "Fiscal",
    title: "CFOP",
    text: "A alteração realizada agora foi somente a mudança do CFOP. Para validar os demais dados fiscais da operação, recomendo confirmar as informações com a sua contabilidade."
  },
  {
    category: "Fiscal",
    title: "Tipo de envio",
    text: "O envio será realizado por transporte próprio, correto?"
  },
  {
    category: "PDV",
    title: "Fila de impressão",
    text: "Pelo que estou verificando, pode haver vários arquivos na fila de impressão. Isso pode fazer com que a impressão fique travada. Vamos verificar essa fila para realizar a limpeza, se necessário."
  },
  {
    category: "PDV",
    title: "PDV em outra máquina",
    text: "Antes você estava utilizando o PDV nessa máquina, correto? Vou verificar a situação para entendermos o que precisa ser ajustado."
  },
  {
    category: "Impressora",
    title: "Calibração da impressora",
    text: "Vamos realizar a calibração da impressora para que ela possa identificar corretamente o tamanho e o posicionamento das etiquetas."
  },
  {
    category: "Atendimento",
    title: "Sem retorno",
    text: "Como não obtive retorno, amanhã pela manhã iremos entrar em contato novamente. Tenha uma ótima tarde!"
  },
  {
    category: "Atendimento",
    title: "Encerramento por outro canal",
    text: "Estou finalizando este atendimento, pois a tratativa está sendo realizada por outro canal de atendimento."
  },
  {
    category: "Atendimento",
    title: "Encerramento",
    text: "Como não obtive retorno, vou finalizar este atendimento. Caso ainda precise de ajuda, basta entrar em contato conosco novamente."
  }
];