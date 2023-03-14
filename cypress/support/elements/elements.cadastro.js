/// <reference types="Cypress" />
import 'cypress-xpath';

export default class ElementsCad {

    static btnCreateAccount() {
        return cy.get('.sign-in__sign-up > a')
    }
    static inputFirstName(){
        return cy.get('[id="user[first_name]"]')
    }
    static inputLastName(){
        return cy.get('[id="user[last_name]"]')
    }
    static btnSignUp(){
        return cy.get('.form__button-group > .button')
    }
    static checkBoxTerms(){
        return cy.get('[id="user[terms]')
    }
    static checkCadastro(){
        return cy.get('.header__nav-item.header__nav-item--default > a')
    }
    static validUsuarioExist(){
        return cy.get('.form-error__list-item');
    }
    static validTerms(){
        return cy.get('.form-error__list-item');
    }
    static errorInvalidEmail(){
        return cy.get('[id="user[email]-error"]');
    }
    static errorInvalidPass(){
        return cy.get('.form-error__list-item');
    }
}