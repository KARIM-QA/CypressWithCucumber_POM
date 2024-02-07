/// <reference types="cypress" />
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import HomePageWebDriverU_po from "../page_Objects/HomePageWebDriverU_po";

//const url = "http://www.webdriveruniversity.com/";

//const basePage = new Base_PO();
const homePageWebDriverU = new HomePageWebDriverU_po();

Before(() => {
    cy.log("Executing commands inside Homepage Steps");
})

Given(`I navigate to the webdriveruniversity homepage`, () => {
    //cy.visit(url);
    //basePage.navigate("");
    homePageWebDriverU.navigate("");
})

When(`I click on the contact us button`, () => {
    //cy.get("#contact-us").invoke("removeAttr", "target").click();
    //cy.clickAndOpenLink_InSameTab("#contact-us");
    homePageWebDriverU.clickOn_ContactUs_Button();
})

When(`I click on the login portal button`, () => {
    //cy.get("#login-portal").invoke("removeAttr", "target").click();
    //cy.clickAndOpenLink_InSameTab("#login-portal");
    homePageWebDriverU.clickOn_Login_Button();
})