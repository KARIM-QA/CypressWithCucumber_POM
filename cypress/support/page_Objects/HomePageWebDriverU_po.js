/// <reference types="cypress" />

import Base_po from "./Base_po";

class HomePageWebDriverU_po extends Base_po {
    navigateToHomepage() {
        super.navigate("");
    }

    clickOn_ContactUs_Button() {
        cy.clickAndOpenLink_InSameTab("#contact-us");
    }

    clickOn_Login_Button() {
        cy.clickAndOpenLink_InSameTab("#login-portal");
    }
}
export default HomePageWebDriverU_po;