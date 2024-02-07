/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactUsWebDriverU_po from "../page_Objects/ContactUsWebDriverU_po";

const contactus_Page = new ContactUsWebDriverU_po();

When('I type a first name', () => {
    //cy.get('[name="first_name"]').type("karim");
    contactus_Page.type_FirstName("karim");
})

When('I type a last name', () => {
    //cy.get('[name="last_name"]').type("Laribi");
    contactus_Page.type_LastName("Laribi");
})

When('I enter an email address', () => {
    //cy.get('[name="email"]').type("karim.laribi@mail.com")
    contactus_Page.type_EmailAddress("karim.laribi@mail.com");
})

When('I type a comment', () => {
    //cy.get('textarea[name="message"]').type("Hello kimmich !!!");
    contactus_Page.type_Comment("Hello kimmich !!!");
})

When('I click on the submit button', () => {
    //cy.get('[type="submit"]').click();
    contactus_Page.clickOn_Submit_Button();
})

Then('I should be presented with a successful contact us submission message', () => {
    //cy.get('h1').should('have.text', 'Thank You for your Message!');
    contactus_Page.validate_Submission_Header('Thank You for your Message!');
})

Then('I should be presented with a unsuccessful contact us submission message', () => {
    //cy.get('body').contains('Error: Invalid email address');
    contactus_Page.validate_Submission_Header('Error: Invalid email address');
})

When('I type a specific first name {string}', (firstName) => {
    //cy.get('[name="first_name"]').type(firstName);
    contactus_Page.type_FirstName(firstName);
})

When('I type a specific last name {string}', (lastName) => {
    //cy.get('[name="last_name"]').type(lastName);
    contactus_Page.type_LastName(lastName);
})

When('I type a specific email address {string}', (email) => {
    //cy.get('[name="email"]').type(email);
    contactus_Page.type_EmailAddress(email);
})

When('I type a specific word {string} and number {int} within the comment input field', (word, number) => {
    //cy.get('textarea[name="message"]').type(word + " " + number);
    contactus_Page.type_Comment(word + " " + number);
})

When('I type a first name {word} and a last name {string}', (firstName, lastName) => {
    //cy.get('[name="first_name"]').type(firstName);
    //cy.get('[name="last_name"]').type(lastName);
    contactus_Page.type_FirstName(firstName);
    contactus_Page.type_LastName(lastName);
})

When('I type a {string} and a comment {string}', (email, comment) => {
    //cy.get('[name="email"]').type(email);
    //cy.get('textarea[name="message"]').type(comment);
    contactus_Page.type_EmailAddress(email);
    contactus_Page.type_Comment(comment);
})

Then('I should be presented with header text {string}', (message) => {
    //cy.xpath("//h1 | //body").contains(message);
    contactus_Page.validate_Submission_Header(message);
})
