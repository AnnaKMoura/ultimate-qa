/// <reference types="Cypress" />
/* global Then, When, Given */
const HomePage = require('../index/home.page')

//----------> Logando com usuario valido
When('o usuario preencher email valido', () => {
    HomePage.preencherInputLogin().type('teste@mock.com.br');
})
And('senha valida', () => {
    HomePage.preencherInputPassLog().type('12345678');
})
And('clicar em sign in', () => {
    HomePage.clickBtnLogin();
})
Then('o usuario e autenticado com sucesso', () => {
    HomePage.validAutLogin();
})

//----------> Logando com usuario nao cadastrado 
When('o usuario preencher email invalido', () => {
    HomePage.preencherInputLogin().type('teste@mockmock.com.br');
})
And('preencher senha invalida', () => {
    HomePage.preencherInputPassLog().type('12345678');
})
And('clicar em sign in', () => {
    HomePage.clickBtnLogin();
})
Then('o usuario nao e autenticado e a mensagem de email ou senha invalida e exibida', () => {
    HomePage.invalidAutLogin();
})

//----------> Logando com e-mail fora do padrão
When('o usuario preencher email fora do padrao exigido', () => {
    HomePage.preencherInputLogin().type('teste@mock');
})
And('ir para o input de senha', () => {
    HomePage.preencherInputPassLog().type('123');
})

Then('e exibida uma mensagem de erro solicitando email valido', () => {
    HomePage.invalidEmail();
})

