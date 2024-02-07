/// <reference types="cypress" />
import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then('product with description Msi PC Portable Gamer GF63 Thin - i5 11400H 8G 512SSD - GTX1650 should be displayed',
() => {
    cy.xpath(
        "//h3[contains(text(),'Msi PC Portable Gamer GF63 Thin - i5 11400H 8G 512')]"
      ).should(
        "have.text",
        "Msi PC Portable Gamer GF63 Thin - i5 11400H 8G 512SSD - GTX1650"
      );

  }

)

Then('product with description {string} should be displayed',
(productDescription) => {
    cy.xpath(
        "//h3[contains(text(),'Msi PC Portable Gamer GF63 Thin - i5 11400H 8G 512')]"
      ).should(
        "have.text",
        productDescription
      );

  }

)