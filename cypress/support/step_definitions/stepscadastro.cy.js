/// <reference types= 'Cypress' />
/* global Then, When, Given */

const CadastroPage = require('../index/cadastro.page')

//------------------------- Cadastrando usuario valido

When('o usuario clicar em create a new account', () => {
    CadastroPage.createNewAcc();    
})
And('preencher o formulario', () => {
    CadastroPage.preencherFirstName().type('Aninha');
    CadastroPage.preencherLastName().type('Teste');
    CadastroPage.preencherNewEmail().type('dycjh@example3.com');
    CadastroPage.preencherNewPassword().type('12345678');

})
And('aceitar os termos', () => {
    CadastroPage.checkandoBoxTerms();

})
And ('clicar em Sign Up', () => {
    CadastroPage.clickBtnSignUp();
})
Then('o usuario e cadastrado com sucesso', () => {
    CadastroPage.validContaCriada();

})

//------------------------- Cadastrando usuario ja existente

When('o usuario clicar em create a new account', () => {
    CadastroPage.createNewAcc();    
})
And('preencher o formulario com dados ja existentes', () => {
    CadastroPage.preencherFirstName().type('Aninha');
    CadastroPage.preencherLastName().type('Teste');
    CadastroPage.preencherNewEmail().type('dycjh@example.com');
    CadastroPage.preencherNewPassword().type('12345678');
})
And('aceitar os termos', () => {
    CadastroPage.checkandoBoxTerms();
})
And ('clicar em Sign Up', () => {
    CadastroPage.clickBtnSignUp();
})
Then('o usuario nao e cadastrado com sucesso e retorna mensagem de usuario ja cadastrado', () => {
    CadastroPage.validUserExist();
})

//------------------------- Cadastrando usuario sem aceitar os termos

When('o usuario clicar em create a new account', () => {
    CadastroPage.createNewAcc();
})
And('preencher o formulario', () => {
    CadastroPage.preencherFirstName().type('Aninha');
    CadastroPage.preencherLastName().type('Teste');
    CadastroPage.preencherNewEmail().type('dycjh@example6.com');
    CadastroPage.preencherNewPassword().type('12345678');
})
But('nao aceitar os termos', () => {
    CadastroPage.checkandoBoxTerms();
    CadastroPage.uncheckBoxTerms();
})
And('clicar em Sign Up', () => {
    CadastroPage.clickBtnSignUp();
})
Then('o usuario nao e cadastrado com sucesso e retorna mensagem de termos nao aceitos', () => {
    CadastroPage.validTerms();
})

//------------------------- Cadastrando usuario com email incompleto

When('o usuario clicar em create a new account', () => {
    CadastroPage.createNewAcc();
})
And('preencher o formulario', () => {
    CadastroPage.preencherFirstName().type('Aninha');
    CadastroPage.preencherLastName().type('Teste');
})
But('preencher o email incompleto', () => {
    CadastroPage.preencherNewEmail('teste@t');
})
Then('o usuario nao e cadastrado com sucesso e retorna mensagem de termos nao aceitos', () => {
    CadastroPage.validEmailInvalid();
})

//------------------------- Cadastrando usuario com senha fora do padrao

When('o usuario clicar em create a new account', () => {
    CadastroPage.createNewAcc();
})
And('preencher o formulario', () => {
    CadastroPage.preencherFirstName().type('Aninha');
    CadastroPage.preencherLastName().type('Teste');
    CadastroPage.preencherNewEmail().type('dycjh@example6.com')
})
But('preencher a senha com apenas 7 caracteres ', () => {
    CadastroPage.preencherNewPassword('1234567')
})
Then('preencher a senha com apenas 7 caracteres ', () => {
    CadastroPage.validPasswordInvalid();
})