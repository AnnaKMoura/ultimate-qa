/// <reference types="Cypress" />

const ElementsCad = require('../elements/elements.cadastro');
const ElementsPage = require('../elements/elements.login');

export default class CadastroPage {

    static createNewAcc(){
        return ElementsCad.btnCreateAccount().click()
        .url().should('include', '/users/sign_up');
    }
    static preencherFirstName(){
        return ElementsCad.inputFirstName().click();
    }
    static preencherLastName(){
        return ElementsCad.inputLastName().click();
    }
    static preencherNewEmail(){
        return ElementsPage.inputLog().click();
    }
    static preencherNewPassword(){
        return ElementsPage.inputPassLog().click();
    }
    static checkandoBoxTerms(){
        return ElementsCad.checkBoxTerms().check();
    }
    static uncheckBoxTerms(){
        return ElementsCad.checkBoxTerms().uncheck();
    }
    static clickBtnSignUp(){
        return ElementsCad.btnSignUp().click();
    }
    static validContaCriada(){
        return ElementsCad.checkCadastro()
        .should('be.visible');
    }
    static validUserExist(){
        return ElementsCad.validUsuarioExist()
        .should('be.visible');
    }
    static validTermsCheck(){
        return ElementsCad.validTerms()
        .should('be.visible');
    }
    static validEmailInvalid(){
        return ElementsCad.errorInvalidEmail()
        .should('be.visible');
    }
    static validPasswordInvalid(){
        return ElementsCad.errorInvalidPass()
        .should('be.visible');
    }
}  