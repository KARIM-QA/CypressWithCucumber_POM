/// <reference types="cypress" />
import Base_po from "./Base_po";


class LoginWebDriverU_po extends Base_po {
    navigateTo_Login_Page() {
        super.navigate("/Login-Portal/index.html");
    }

    type_Username(username) {
        cy.get('#text').type(username);
    }

    type_Password(password) {
        cy.get('#password').type(password);
    }

    clickOn_Login_Button() {
        cy.get('#login-button').click();
    }
}
export default LoginWebDriverU_po;