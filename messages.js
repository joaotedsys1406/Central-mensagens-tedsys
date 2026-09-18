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
 title: "Vou verificar",
 text: "Certo! Vou realizar algumas validações por aqui para identificar o que está acontecendo."
 },
 {
 category: "Atendimento",
 title: "Solicitar informações",
 text: "Para que eu possa verificar essa situação corretamente, poderia me passar mais algumas informações, por
favor?"
 },
 {
 category: "Atendimento",
 title: "Mais alguma coisa?",
 text: "Que bom! Eu poderia te ajudar em algo mais?"
 },
 {
 category: "Atendimento",
 title: "Realizando testes",
 text: "Vou realizar alguns testes e validações para identificar a causa do problema. Só um momento, por favor."
 },
 {
 category: "Atendimento",
 title: "Solicitar print",
 text: "Você consegue me enviar um print da tela onde o problema está acontecendo, por favor? Assim consigo
verificar a situação com mais detalhes."
 },
 {
 category: "Atendimento",
 title: "Mensagem de erro",
 text: "Você consegue me informar qual mensagem de erro está sendo apresentada? Se possível, pode me enviar um
print também."
 },
 {
 category: "Acesso remoto",
 title: "Solicitar acesso remoto",
 text: "Para que eu possa verificar essa situação, preciso acessar o computador remotamente. Você consegue me
passar o acesso, por favor?"
 },
 {
 category: "Acesso remoto",
 title: "Acesso recebido",
 text: "Perfeito, obrigado pelo acesso. Vou realizar as validações necessárias por aqui."
 },
 {
 category: "Acesso remoto",
 title: "Outro PDV",
 text: "Entendi. Agora preciso verificar o outro PDV. Você consegue me passar o acesso remoto dessa máquina
também, por favor?"
 },
 {
 category: "Acesso remoto",
 title: "Máquina antiga",
 text: "Nesse caso, vou precisar acessar a máquina antiga para realizar a desinstalação completa do PDV. Você
consegue me passar o acesso remoto, por favor?"
 },
 {
 category: "Acesso remoto",
 title: "Finalizando acesso",
 text: "Finalizei as validações no acesso remoto. Agora vamos realizar um teste para confirmar se a situação
foi normalizada."
 },
 {
 category: "PDV",
 title: "Validar PDV",
 text: "Vou realizar algumas validações diretamente no PDV para identificar o motivo do comportamento
apresentado."
 },
 {
 category: "PDV",
 title: "Problema no PDV",
 text: "Identifiquei uma inconsistência no PDV. Vou realizar alguns ajustes e, em seguida, vamos testar
novamente."
 },
 {
 category: "PDV",
 title: "PDV normalizado",
 text: "O problema apresentado no PDV foi solucionado. Podemos considerar esse ponto normalizado."
 },
 {
 category: "PDV",
 title: "Testar venda",
 text: "Realizei o ajuste necessário. Por favor, faça uma nova venda no PDV para verificarmos se o
comportamento foi normalizado."
 },
 {
 category: "PDV",
 title: "Reiniciar equipamento",
 text: "Pode reiniciar o computador e, assim que o sistema estiver disponível novamente, me avise para
continuarmos a validação."
 },
 {
 category: "PDV",
 title: "Desinstalação completa",
 text: "Nesse caso, será necessário desinstalar o PDV por completo da máquina antiga antes de utilizá-lo no
novo equipamento."
 },
 {
 category: "PDV",
 title: "Máquina antiga sem uso",
 text: "Caso a máquina permaneça sem utilizar o PDV e posteriormente seja formatada, não teremos problema em
relação ao PDV instalado nela."
 },
 {
 category: "Impressão",
 title: "Fila de impressão",
 text: "Vou verificar a fila de impressão, pois pode haver vários documentos pendentes aguardando processamento
e isso pode estar impedindo novas impressões."
 },
 {
 category: "Impressão",
 title: "Limpar fila",
 text: "Identifiquei documentos pendentes na fila de impressão. Vou realizar a limpeza da fila e, em seguida,
faremos um novo teste."
 },
 {
 category: "Impressão",
 title: "Testar impressão",
 text: "Ajustei a configuração necessária. Agora, por favor, realize uma nova tentativa de impressão para
verificarmos se foi normalizado."
 },
 {
 category: "Impressão",
 title: "Impressora offline",
 text: "Vou verificar a comunicação com a impressora e confirmar se ela está sendo reconhecida corretamente
pelo computador."
 },
 {
 category: "Impressão",
 title: "Impressora padrão",
 text: "Vou verificar se a impressora correta está definida como padrão e se o sistema está direcionando a
impressão para o equipamento correto."
 },
 {
 category: "Impressão",
 title: "Calibração",
 text: "Vamos realizar a calibração da impressora para que ela consiga identificar corretamente o tamanho e o
espaçamento das etiquetas."
 },
 {
 category: "Impressão",
 title: "Teste de etiqueta",
 text: "Após a calibração, vamos realizar uma impressão de teste para confirmar se o posicionamento das
etiquetas ficou correto."
 },
 {
 category: "Fiscal",
 title: "Dados fiscais",
 text: "Os dados fiscais que devem ser utilizados na nota precisam ser confirmados com a sua contabilidade,
pois dependem da operação realizada e da tributação da empresa."
 },
 {
 category: "Fiscal",
 title: "Orientação da contabilidade",
 text: "Nesse caso, a contabilidade deve informar quais dados fiscais devem ser utilizados na nota, incluindo
CFOP, tributação e demais informações necessárias."
 },
 {
 category: "Fiscal",
 title: "Alteração de CFOP",
 text: "A alteração que realizei agora foi somente a mudança do CFOP. As demais informações fiscais devem ser
validadas com a sua contabilidade."
 },
 {
 category: "Fiscal",
 title: "Gerenciamento de notas",
 text: "Dentro do módulo Fiscal, em Gerenciamento de Notas, você pode utilizar a opção 'Novo' para iniciar a
emissão da nota."
 },
 {
 category: "Fiscal",
 title: "Tipo de nota",
 text: "Na opção 'Novo', você poderá definir o tipo de nota que deseja gerar e, depois, continuar com o
preenchimento das informações."
 },
 {
 category: "Fiscal",
 title: "Erro fiscal",
 text: "Vou verificar o comportamento apresentado. Caso seja uma informação fiscal, será necessário confirmar
os dados com a contabilidade."
 },
 {
 category: "Fiscal",
 title: "Validar CFOP",
 text: "Antes de realizar uma nova tentativa, recomendo confirmar com a contabilidade se o CFOP utilizado está
correto para essa operação."
 },
 {
 category: "NF-e / NFC-e",
 title: "NFC-e",
 text: "Vou verificar a configuração da NFC-e e realizar alguns testes para identificar o motivo do
comportamento apresentado."
 },
 {
 category: "NF-e / NFC-e",
 title: "NF-e",
 text: "Vou verificar a configuração da NF-e e realizar algumas validações para identificar o que está
impedindo o processamento."
 },
 {
 category: "NF-e / NFC-e",
 title: "Rejeição fiscal",
 text: "Vou verificar o motivo da rejeição apresentada. Caso esteja relacionada aos dados fiscais, precisaremos
validar a informação com a contabilidade."
 },
 {
 category: "NF-e / NFC-e",
 title: "Consultar nota",
 text: "Vou verificar o status da nota no sistema para confirmar se ela foi processada corretamente."
 },
 {
 category: "NF-e / NFC-e",
 title: "Nova tentativa",
 text: "Realizei a validação necessária. Podemos fazer uma nova tentativa de emissão para verificar se o
comportamento foi normalizado."
 },
 {
 category: "Devolução",
 title: "Nota de devolução",
 text: "Para a emissão da nota de devolução, primeiro é necessário confirmar com a contabilidade quais
informações fiscais devem ser utilizadas nessa operação."
 },
 {
 category: "Devolução",
 title: "Dados da devolução",
 text: "A contabilidade deve informar quais dados fiscais devem ser incluídos na nota de devolução, de acordo
com a operação que está sendo realizada."
 },
 {
 category: "Devolução",
 title: "Produto na devolução",
 text: "Para realizar a devolução, o produto precisa estar cadastrado corretamente no ERP."
 },
 {
 category: "Devolução",
 title: "Transportadora na devolução",
 text: "Caso seja utilizada uma transportadora na devolução, ela também precisa estar cadastrada no ERP para
que possa ser selecionada na operação."
 },
 {
 category: "Devolução",
 title: "Remetente ou destinatário",
 text: "A opção entre remetente e destinatário depende da operação que será realizada. Nesse caso, é importante
confirmar com a contabilidade qual opção deve ser utilizada."
 },
 {
 category: "Devolução",
 title: "Transporte próprio",
 text: "O envio será realizado com transporte próprio, correto? Preciso confirmar essa informação para orientar
o preenchimento corretamente."
 },
 {
 category: "Cadastro",
 title: "Produto não cadastrado",
 text: "Verifiquei que o produto precisa estar cadastrado no ERP para que possamos prosseguir com essa operação.
"
 },
 {
 category: "Cadastro",
 title: "Transportadora não cadastrada",
 text: "A transportadora que será utilizada na operação também precisa estar cadastrada no ERP."
 },
 {
 category: "Cadastro",
 title: "Validar cadastro",
 text: "Vou verificar o cadastro no ERP para confirmar se as informações necessárias estão preenchidas
corretamente."
 },
 {
 category: "Cadastro",
 title: "Código do produto",
 text: "Pode me informar o código ou a descrição do produto para que eu possa localizar o cadastro no ERP?"
 },
 {
 category: "Estoque",
 title: "Validar estoque",
 text: "Vou verificar o cadastro e a movimentação do produto para identificar o motivo da divergência
apresentada no estoque."
 },
 {
 category: "Estoque",
 title: "Saldo divergente",
 text: "Entendi. Vou verificar o saldo do produto no ERP e comparar com as movimentações registradas."
 },
 {
 category: "Configuração",
 title: "Configuração alterada",
 text: "Realizei uma alteração na configuração do sistema. Agora vamos realizar um novo teste para verificar se
a situação foi normalizada."
 },
 {
 category: "Configuração",
 title: "Validar configuração",
 text: "Vou conferir as configurações relacionadas a esse processo para identificar se existe algum parâmetro
incorreto."
 },
 {
 category: "Validação",
 title: "Novo teste",
 text: "Realizei o ajuste necessário. Por favor, faça um novo teste e me informe se o comportamento foi
normalizado."
 },
 {
 category: "Validação",
 title: "Aguardando teste",
 text: "Fico no aguardo do seu teste para confirmarmos se a situação foi solucionada."
 },
 {
 category: "Validação",
 title: "Teste concluído",
 text: "Perfeito. Com o teste realizado, podemos confirmar que o comportamento foi normalizado."
 },
 {
 category: "Validação",
 title: "Validar com contabilidade",
 text: "Nesse caso, é necessário validar essas informações com a sua contabilidade antes de prosseguirmos com o
procedimento."
 },
 {
 category: "Aguardando cliente",
 title: "Aguardando retorno",
 text: "Fico no aguardo do seu retorno para que possamos dar continuidade ao atendimento."
 },
 {
 category: "Aguardando cliente",
 title: "Aguardando acesso",
 text: "Fico no aguardo do acesso remoto para que eu possa realizar as validações necessárias."
 },
 {
 category: "Aguardando cliente",
 title: "Aguardando informação",
 text: "Fico no aguardo das informações solicitadas para que eu possa prosseguir com a análise."
 },
 {
 category: "Aguardando cliente",
 title: "Aguardando contabilidade",
 text: "Fico no aguardo da validação com a sua contabilidade para que possamos prosseguir com o atendimento."
 },
 {
 category: "Sem retorno",
 title: "Finalizar sem retorno",
 text: "Como não obtive retorno, vou finalizar o atendimento por enquanto. Caso ainda precise de auxílio, entre
em contato conosco novamente."
 },
 {
 category: "Sem retorno",
 title: "Retorno amanhã",
 text: "Como não obtive retorno, amanhã pela manhã entraremos em contato novamente para dar continuidade ao
atendimento."
 },
 {
 category: "Sem retorno",
 title: "Responsável ausente",
 text: "Entendi. Como a pessoa responsável está ausente no momento, podemos retomar o atendimento assim que ela
estiver disponível."
 },
 {
 category: "Encerramento",
 title: "Problema solucionado",
 text: "Problema solucionado! Muito obrigado pelo acesso e pela colaboração durante o atendimento. Agora está
tudo certinho. Tenha um ótimo dia e boas vendas!"
 },
 {
 category: "Encerramento",
 title: "Atendimento finalizado",
 text: "Como a situação foi solucionada, vou finalizar o atendimento. Caso precise de alguma coisa novamente,
estamos à disposição."
 },
 {
 category: "Encerramento",
 title: "Finalizar por outro canal",
 text: "Vou finalizar este atendimento, pois a tratativa está sendo realizada por outro canal de atendimento."
 },
 {
 category: "Encerramento",
 title: "Agradecimento",
 text: "Por nada! Eu que agradeço pelo contato. Sempre que precisar, estamos à disposição."
 },
 {
 category: "Encerramento",
 title: "Boas vendas",
 text: "Por aqui está tudo certo. Obrigado pelo contato e tenha um ótimo dia e boas vendas!"
 }
];
