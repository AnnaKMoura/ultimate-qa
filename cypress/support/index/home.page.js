/// <reference types="Cypress" />

const ElementsPage = require('../elements/elements.login');

export default class HomePage {
    static openPage() {
        cy.visit('https://courses.ultimateqa.com/').then(() => {
            return ElementsPage.btnSigIn().click()
            .url().should('include', '/users/sign_in');
        })
    }
    static preencherInputLogin(){
        return ElementsPage.inputLog().click();
    }
    static preencherInputPassLog(){
        return ElementsPage.inputPassLog().click();
    }
    static clickBtnLogin() {
        return ElementsPage.btnLogin().click();
    }
    static validAutLogin(){
        return ElementsPage.autenticLog()
        .should('be.visible').should('have.text', 'Signed in successfully.');
    }
    static invalidAutLogin(){
        return ElementsPage.errorEmailLog()
        .should('be.visible').should('have.text', 'Invalid email or password.');
    }
    static invalidEmail(){
        return ElementsPage.errorEmailIncomp()
            .should('be.visible');
        }
}
