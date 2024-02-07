/// <reference types="cypress" />

import Base_po from "./Base_po";

class JumiaHomePage_po extends Base_po {
  navigateToHomePage() {
    super.navigate("/");
  }

  clickOnPopupBtn() {
    cy.clickOnPopupButton("//button[@aria-label='newsletter_popup_close-cta']");
  }

  fillProductVal() {
    cy.typeProductValue("//input[@id='fi-q']", "pc portable msi");
  }

  clickOnSearchBtn() {
    cy.clickOnSearchButton("//button[normalize-space()='Rechercher']");
  }
}
export default JumiaHomePage_po;
