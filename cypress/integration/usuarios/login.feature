Feature: Login

Eu como usuario quero me logar na plataforma para acessar os cursos 

Scenario: Logando com usuario valido
Given que o usuario esteja na pagina de login
When o usuario preencher email valido
And senha valida
And clicar em sign in
Then o usuario e autenticado com sucesso

Scenario: Logando com usuario nao cadastrado 
Given que o usuario esteja na pagina de login
When o usuario preencher email invalido
And preencher senha invalida
And clicar em sign in
Then o usuario nao e autenticado e a mensagem de email ou senha invalida e exibida

Scenario: Logando com email fora do padrao   
Given que o usuario esteja na pagina de login
When o usuario preencher email fora do padrao exigido
And ir para o input de senha
Then e exibida uma mensagem de erro solicitando email valido

