/// <reference types="cypress" />

class Base_po {

  navigate(path) {
    cy.fixture("config.json").then((data) => {
      cy.visit(data.baseUrlWebDriverUniversity + path);
    });
  }

  getPageTitle() {
    return cy.title();
  }
}
export default Base_po;
