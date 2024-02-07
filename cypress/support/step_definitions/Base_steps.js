/// <reference types="cypress" />
import { When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log("Executes before each Scenario");
    cy.clearLocalStorage();
})

Before({ tags: "@jumia"}, () => {
    cy.log("Executing Functional tests in Jumia  web application");
})

After(() => {
    cy.log("Executes after each Scenario");
})

When("I wait for {int} seconds", (seconds) => {
    cy.wait(seconds * 2000);
})