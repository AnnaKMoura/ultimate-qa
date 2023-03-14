/// <reference types="Cypress" />
import 'cypress-xpath';

export default class ElementsPage {

    static btnSigIn() {
        return cy.get('.header__nav-item > a')
    }
    static inputLog() {
        return cy.get('[id="user[email]"]')
    }
    static inputPassLog() {
        return cy.get('[id="user[password]"]')
    }
    static btnLogin() {
        return cy.get('.form__button-group > .button')
    }
    static autenticLog() {
        return cy.get('.message-text')
    }
    static errorEmailLog() {
    return cy.get('.message-text')
}
    static errorEmailIncomp(){
        return cy.get('.form__error-msg')
    }
}
