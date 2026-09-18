const messages = [
  // =========================
  // ATENDIMENTO
  // =========================

  {
    category: "Atendimento",
    title: "Saudação inicial",
    text: "Olá! Tudo bem? Meu nome é [SEU NOME] e vou realizar o seu atendimento. Como posso te ajudar?"
  },
  {
    category: "Atendimento",
    title: "Início do atendimento",
    text: "Olá! Tudo bem? Vou verificar essa situação para você. Só um momento, por favor."
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
    category: "Atendimento",
    title: "Aguardando retorno",
    text: "Sem problemas. Vou aguardar o seu retorno para darmos continuidade ao atendimento."
  },
  {
    category: "Atendimento",
    title: "Solicitação em análise",
    text: "Entendi a situação. Vou realizar algumas validações no sistema para identificar o que está acontecendo."
  },
  {
    category: "Atendimento",
    title: "Validação concluída",
    text: "Realizei as validações necessárias e identifiquei o ponto relacionado à situação informada."
  },
  {
    category: "Atendimento",
    title: "Orientação concluída",
    text: "Pronto! Realizei as orientações necessárias. Caso tenha alguma dúvida durante o processo, pode nos chamar novamente."
  },
  {
    category: "Atendimento",
    title: "Encerramento cordial",
    text: "Por nada! Eu que agradeço pelo contato. Tenha um ótimo dia e boas vendas!"
  },
  {
    category: "Atendimento",
    title: "Finalização do atendimento",
    text: "Como a situação foi solucionada, vou finalizar este atendimento. Caso precise de algo mais, estamos à disposição."
  },
  {
    category: "Atendimento",
    title: "Sem resposta",
    text: "Como não obtive retorno, vou finalizar o atendimento por enquanto. Caso ainda precise de ajuda, basta entrar em contato conosco novamente."
  },
  {
    category: "Atendimento",
    title: "Retorno posteriormente",
    text: "Como não obtive resposta, amanhã pela manhã entraremos em contato novamente para dar continuidade ao atendimento."
  },

  // =========================
  // ACESSO REMOTO
  // =========================

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
    title: "Acesso não realizado",
    text: "Para continuar a validação, preciso que o acesso remoto esteja disponível. Assim que conseguir, pode me informar por aqui."
  },
  {
    category: "Acesso remoto",
    title: "Aguardando acesso",
    text: "Fico no aguardo do acesso remoto para que eu possa realizar as validações necessárias."
  },
  {
    category: "Acesso remoto",
    title: "Acesso recebido",
    text: "Perfeito, recebi o acesso. Vou realizar as validações necessárias nessa máquina."
  },
  {
    category: "Acesso remoto",
    title: "Finalização do acesso",
    text: "Pronto, finalizei as validações nessa máquina. Muito obrigado pelo acesso."
  },

  // =========================
  // PDV
  // =========================

  {
    category: "PDV",
    title: "Problema no PDV",
    text: "Entendi. Vou verificar o funcionamento do PDV e realizar algumas validações para identificar a causa da situação."
  },
  {
    category: "PDV",
    title: "Outro PDV",
    text: "Entendi. Para verificarmos se o comportamento também ocorre em outro equipamento, vamos realizar uma validação em outro PDV."
  },
  {
    category: "PDV",
    title: "PDV solucionado",
    text: "Pronto! O problema com o PDV foi solucionado. Muito obrigado pelos acessos. Agora está tudo certinho."
  },
  {
    category: "PDV",
    title: "PDV sem utilização",
    text: "Se essa máquina ficar sem utilizar o PDV e posteriormente for formatada, não teremos problema. Quando for necessário utilizar novamente, será preciso realizar as configurações necessárias."
  },
  {
    category: "PDV",
    title: "Fila de impressão",
    text: "Pelo que estou verificando, pode haver vários arquivos na fila de impressão. Isso pode estar causando a lentidão ou travamento. Vamos verificar essa fila."
  },
  {
    category: "PDV",
    title: "Impressão travada",
    text: "Vou verificar a fila de impressão e realizar uma limpeza dos documentos pendentes para validarmos se o funcionamento será normalizado."
  },

  // =========================
  // SISTEMA / ERP
  // =========================

  {
    category: "ERP",
    title: "Verificar configuração",
    text: "Vou verificar as configurações relacionadas a essa operação dentro do ERP para identificar o que precisa ser ajustado."
  },
  {
    category: "ERP",
    title: "Produto não cadastrado",
    text: "Para realizar essa operação, o produto precisa estar previamente cadastrado no ERP. Recomendo verificar o cadastro do produto antes de continuar."
  },
  {
    category: "ERP",
    title: "Transportadora não cadastrada",
    text: "A transportadora utilizada na devolução também precisa estar cadastrada no ERP para que a operação possa ser realizada corretamente."
  },
  {
    category: "ERP",
    title: "Configuração realizada",
    text: "Realizei o ajuste na configuração necessária. Agora podemos realizar um novo teste para validar o funcionamento."
  },
  {
    category: "ERP",
    title: "Alteração de configuração",
    text: "A alteração que realizei agora foi somente no parâmetro informado. Vamos realizar um novo teste para verificar o resultado."
  },
  {
    category: "ERP",
    title: "Sistema normalizado",
    text: "Após o ajuste realizado, o sistema está funcionando normalmente. Você consegue realizar um novo teste, por favor?"
  },

  // =========================
  // NOTA FISCAL
  // =========================

  {
    category: "Nota fiscal",
    title: "Nota de devolução",
    text: "Consigo te orientar sobre a utilização do sistema para emissão da nota de devolução. Porém, os dados fiscais que devem ser informados na nota precisam ser definidos pela sua contabilidade."
  },
  {
    category: "Nota fiscal",
    title: "Dados fiscais",
    text: "Nesse caso, a contabilidade deve informar quais dados fiscais precisam ser utilizados na nota, incluindo CFOP, impostos e demais informações fiscais aplicáveis à operação."
  },
  {
    category: "Nota fiscal",
    title: "Orientação sobre emissão",
    text: "Você pode acessar o módulo Fiscal, entrar em Gerenciamento de Notas e utilizar a opção Novo para iniciar a emissão da nota. Os dados fiscais devem ser confirmados previamente com a sua contabilidade."
  },
  {
    category: "Nota fiscal",
    title: "CFOP",
    text: "A alteração realizada foi somente no CFOP. Para confirmar se esse CFOP é o correto para a operação, recomendamos validar a informação com a sua contabilidade."
  },
  {
    category: "Nota fiscal",
    title: "Remetente e destinatário",
    text: "Na emissão da nota, é importante verificar corretamente os dados do remetente e do destinatário conforme a operação que está sendo realizada."
  },
  {
    category: "Nota fiscal",
    title: "Validação com contabilidade",
    text: "Assim que finalizar essa validação com a sua contabilidade, você pode realizar o processo que te informei. Caso encontre alguma dificuldade, pode entrar em contato conosco novamente."
  },
  {
    category: "Nota fiscal",
    title: "Envio próprio",
    text: "O envio será realizado por transporte próprio, correto? Preciso confirmar essa informação para orientar o procedimento corretamente."
  },

  // =========================
  // IMPRESSORA
  // =========================

  {
    category: "Impressora",
    title: "Verificar impressora",
    text: "Vou verificar as configurações da impressora e realizar alguns testes para identificar o motivo pelo qual ela não está imprimindo corretamente."
  },
  {
    category: "Impressora",
    title: "Impressora offline",
    text: "Vamos verificar se a impressora está conectada corretamente e se está sendo reconhecida pelo computador."
  },
  {
    category: "Impressora",
    title: "Teste de impressão",
    text: "Realizei os ajustes necessários. Podemos fazer um teste de impressão para confirmar se o funcionamento foi normalizado?"
  },
  {
    category: "Impressora",
    title: "Calibração",
    text: "Vou realizar a calibração da impressora para ajustar o posicionamento e a leitura correta das etiquetas."
  },

  // =========================
  // ETIQUETAS
  // =========================

  {
    category: "Etiquetas",
    title: "Problema na etiqueta",
    text: "Vou verificar as configurações relacionadas à impressão da etiqueta para identificar se o problema está relacionado à configuração ou à impressora."
  },
  {
    category: "Etiquetas",
    title: "Tamanho da etiqueta",
    text: "Precisamos verificar o tamanho configurado para a etiqueta e comparar com o tamanho físico utilizado na impressora."
  },
  {
    category: "Etiquetas",
    title: "Impressão desalinhada",
    text: "Vou realizar uma calibração e verificar as configurações de tamanho e posicionamento da etiqueta para corrigir o desalinhamento."
  },

  // =========================
  // CONFIGURAÇÕES
  // =========================

  {
    category: "Configuração",
    title: "Alteração realizada",
    text: "Realizei a alteração necessária na configuração. Agora peço que faça um novo teste para verificarmos se o comportamento foi normalizado."
  },
  {
    category: "Configuração",
    title: "Teste após alteração",
    text: "A configuração já foi ajustada. Por favor, realize novamente o procedimento e me informe se o resultado foi apresentado corretamente."
  },
  {
    category: "Configuração",
    title: "Não alterar outras configurações",
    text: "Neste momento, vamos manter as demais configurações como estão e alterar somente o parâmetro necessário para essa validação."
  },

  // =========================
  // CONTABILIDADE
  // =========================

  {
    category: "Contabilidade",
    title: "Orientação da contabilidade",
    text: "Nesse caso, a informação precisa ser confirmada com a contabilidade, pois envolve dados fiscais da operação."
  },
  {
    category: "Contabilidade",
    title: "Validar dados fiscais",
    text: "Recomendo validar com a sua contabilidade quais informações fiscais devem ser utilizadas antes de realizar a emissão da nota."
  },
  {
    category: "Contabilidade",
    title: "Após retorno da contabilidade",
    text: "Assim que a contabilidade confirmar os dados necessários, podemos continuar com o procedimento dentro do sistema."
  },

  // =========================
  // CHAMADO / JIRA
  // =========================

  {
    category: "Chamado",
    title: "Registrar retorno do cliente",
    text: "Vou registrar essa informação no chamado para mantermos o histórico do atendimento e dar continuidade à tratativa."
  },
  {
    category: "Chamado",
    title: "Aguardando cliente",
    text: "No momento, ficaremos aguardando o retorno do cliente para prosseguir com as validações necessárias."
  },
  {
    category: "Chamado",
    title: "Aguardando responsável",
    text: "O cliente informou que o responsável pela validação não está disponível no momento. O retorno deverá ser realizado posteriormente."
  },
  {
    category: "Chamado",
    title: "Contato posterior",
    text: "Cliente solicitou que o contato seja realizado posteriormente, após o retorno do responsável."
  },
  {
    category: "Chamado",
    title: "Atendimento por outro canal",
    text: "Finalizando este atendimento devido à tratativa estar sendo realizada por outro canal de atendimento."
  },

  // =========================
  // ERROS
  // =========================

  {
    category: "Erro",
    title: "Identificar erro",
    text: "Vou verificar a mensagem de erro apresentada para identificar a causa e realizar as validações necessárias."
  },
  {
    category: "Erro",
    title: "Erro reproduzido",
    text: "Consegui reproduzir o comportamento informado. Vou continuar as validações para identificar a causa do problema."
  },
  {
    category: "Erro",
    title: "Erro não reproduzido",
    text: "Realizei alguns testes, porém não consegui reproduzir o comportamento informado neste momento. Vamos realizar algumas validações adicionais."
  },
  {
    category: "Erro",
    title: "Erro solucionado",
    text: "Após os ajustes realizados, não estou mais identificando o erro. Podemos realizar um novo teste para confirmar a normalização?"
  },

  // =========================
  // FINALIZAÇÃO
  // =========================

  {
    category: "Finalização",
    title: "Problema solucionado",
    text: "Pronto! O problema foi solucionado e o funcionamento foi normalizado."
  },
  {
    category: "Finalização",
    title: "Tudo certo",
    text: "Perfeito! Agora está tudo certinho. Muito obrigado pelos acessos e pela colaboração durante o atendimento."
  },
  {
    category: "Finalização",
    title: "Boas vendas",
    text: "Por nada! Eu que agradeço. Tenha um ótimo dia e boas vendas!"
  },
  {
    category: "Finalização",
    title: "Encerramento completo",
    text: "Como realizamos as validações e o procedimento foi concluído, vou finalizar o atendimento. Caso precise de algo mais, estamos à disposição."
  },
  {
    category: "Finalização",
    title: "Agradecimento",
    text: "Muito obrigado pela disponibilidade e pelos acessos. Foi um prazer te ajudar!"
  }
];
