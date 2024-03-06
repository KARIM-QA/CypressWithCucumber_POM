@jumia @ignore
Feature: Jumia - Functional Testing

    Background: Pre Conditions
        Given I navigate to jumia homepage
        When  I click on the popup close button

    Scenario: Validating Existence of a specific product
        And   I type a product value pc portable msi
        And   I click on the search button
        Then  product with description Msi PC Portable Gamer GF63 Thin - i5 11400H 8G 512SSD - GTX1650 should be displayed

    Scenario: Validating Existence of a specific product using custom data
        And   I type a specific product value "pc portable msi"
        And   I click on the search button
        Then  product with description "Msi PC Portable Gamer GF63 Thin - i5 11400H 8G 512SSD - GTX1650" should be displayed