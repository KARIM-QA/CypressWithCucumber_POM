/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";


import JumiaHomePage_po from "../page_Objects/JumiaHomePage_po";


const jumiaHomePage = new JumiaHomePage_po();

Given("I navigate to jumia homepage", () => {
  jumiaHomePage.navigateToHomePage("/");
});

When("I click on the popup close button", () => {
  jumiaHomePage.clickOnPopupBtn();
  
});

When("I type a product value pc portable msi", () => {
  jumiaHomePage.fillProductVal();
});

When("I click on the search button", () => {
  jumiaHomePage.clickOnSearchBtn();
});

When("I type a specific product value {string}", (productValue) => {
  cy.xpath("//input[@id='fi-q']").type(productValue);
});
