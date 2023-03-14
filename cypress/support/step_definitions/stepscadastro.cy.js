/// <reference types= 'Cypress' />
/* global Then, When, Given */

const CadastroPage = require('../index/cadastro.page')

//------------------------- Cadastrando usuario valido

When('o usuario clicar em create a new account', () => {
    CadastroPage.createNewAcc();    
})
And('preencher o formulario', () => {
    CadastroPage.preencherFirstName().type('First Name');
    CadastroPage.preencherLastName().type('Last Name');
    CadastroPage.preencherNewEmail().type('Email');
    CadastroPage.preencherNewPassword().type('Senha');

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
    CadastroPage.preencherFirstName().type('First Name');
    CadastroPage.preencherLastName().type('Last Name');
    CadastroPage.preencherNewEmail().type('Email');
    CadastroPage.preencherNewPassword().type('Senha');
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
    CadastroPage.preencherFirstName().type('First Name');
    CadastroPage.preencherLastName().type('Last Name');
    CadastroPage.preencherNewEmail().type('Email');
    CadastroPage.preencherNewPassword().type('Senha');
})
But('nao aceitar os termos', () => {
    CadastroPage.checkandoBoxTerms();
    CadastroPage.uncheckBoxTerms();
})
Then('o usuario nao e cadastrado com sucesso e retorna mensagem de termos nao aceitos', () => {
    CadastroPage.validTermsCheck();
})

//------------------------- Cadastrando usuario com email incompleto

When('o usuario clicar em create a new account', () => {
    CadastroPage.createNewAcc();
})
But('preencher o formulario com email incompleto', () => {
    CadastroPage.preencherFirstName().type('First Name');
    CadastroPage.preencherLastName().type('Last Name');
    CadastroPage.preencherNewEmail().type('Email');
    CadastroPage.preencherNewPassword();
})
Then('o usuario nao e cadastrado com sucesso e retorna mensagem de email invalido', () => {
    CadastroPage.validEmailInvalid();
})

//------------------------- Cadastrando usuario com senha fora do padrao

When('o usuario clicar em create a new account', () => {
    CadastroPage.createNewAcc();
})
But('preencher a senha com apenas 7 caracteres', () => {
    CadastroPage.preencherFirstName().type('First Name');
    CadastroPage.preencherLastName().type('Last Name');
    CadastroPage.preencherNewEmail().type('Email')
    CadastroPage.preencherNewPassword().type('Senha');
    CadastroPage.checkandoBoxTerms();
    CadastroPage.clickBtnSignUp();
})
Then('o usuario nao e cadastrado com sucesso e retorna mensagem de senha invalido', () => {
    CadastroPage.validPasswordInvalid();
})