/// <reference types="Cypress" />
/* global Then, When, Given */

const HomePage = require('../index/home.page')

Given('que o usuario esteja na pagina de login', () => {
    HomePage.openPage();
})
