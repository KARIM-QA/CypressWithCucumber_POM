// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/***********Commands for Jumia web application */
//cy.xpath("//button[@aria-label='newsletter_popup_close-cta']").click()
Cypress.Commands.add("clickOnPopupButton", (selector) => {
  cy.xpath(selector).click();
});

// cy.xpath("//input[@id='fi-q']").type("pc portable msi");
Cypress.Commands.add("typeProductValue", (selector,value) => {
  cy.xpath(selector).type(value);
});

//cy.xpath("//button[normalize-space()='Rechercher']").click();
Cypress.Commands.add("clickOnSearchButton", (selector) => {
  cy.xpath(selector).click();
});


/*****************Commands for WebDriver University web application*/

Cypress.Commands.add('clickAndOpenLink_InSameTab', (selector) => {
    cy.get(selector).invoke("removeAttr", "target").click();
})




