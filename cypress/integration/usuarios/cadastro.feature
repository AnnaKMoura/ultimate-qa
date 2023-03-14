Feature: Cadastro de Usuario

Eu como usuario quero me cadastrar na plataforma com sucesso para acessar os cursos

Scenario: Cadastrando usuario valido
Given que o usuario esteja na pagina de login
When o usuario clicar em create a new account
And preencher o formulario 
And aceitar os termos 
And clicar em Sign Up
Then o usuario e cadastrado com sucesso

Scenario: Cadastrando usuario ja existente 
Given que o usuario esteja na pagina de login
When o usuario clicar em create a new account
And preencher o formulario com dados ja existentes
And aceitar os termos 
And clicar em Sign Up
Then o usuario nao e cadastrado com sucesso e retorna mensagem de usuario ja cadastrado

Scenario: Cadastrando usuario sem aceitar os termos
Given que o usuario esteja na pagina de login
When o usuario clicar em create a new account
And preencher o formulario
But nao aceitar os termos 
And clicar em Sign Up
Then o usuario nao e cadastrado com sucesso e retorna mensagem de termos nao aceitos

Scenario: Cadastrando usuario com email incompleto
Given que o usuario esteja na pagina de login
When o usuario clicar em create a new account
And preencher o formulario
But preencher o email incompleto
Then o usuario nao e cadastrado com sucesso e retorna mensagem de email invalido

Scenario: Cadastrando usuario com senha fora do padrao
Given que o usuario esteja na pagina de login
When o usuario clicar em create a new account
And preencher o formulario
But preencher a senha com apenas 7 caracteres 
Then o usuario nao e cadastrado com sucesso e retorna mensagem de senha invalido