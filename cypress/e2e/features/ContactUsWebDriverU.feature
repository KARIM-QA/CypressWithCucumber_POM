@ContactUs @regression
Feature: WebdriverUniversity - Contact Us Page

    Background: Pre Conditions
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
    @validSmoke
    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message
    @invalidSmoke
    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        And I type a specific first name "Sarah"
        And I type a specific last name "Bensalem"
        And I type a specific email address "sarah.Bensalem@gmail.com"
        And I type a specific word "sisi" and number 9850 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


    Scenario Outline: Validate contact us page
        And I type a first name <firstName> and a last name '<lastName>'
        And I type a '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName     | emailAddress                 | comment                    | message                      |
            | Karim     | Laribi       | karimou.lar@gmail.com        | Hello kimmich how are you? | Thank You for your Message!  |
            | Samira    | Ben Romdhane | Samira.benRomdhane@gmail.com | hello mum i love you       | Thank You for your Message!  |
            | Mohamed   | Laribi       | Mohamed.Lar@gmail.com        | Hello Dad i love you       | Thank You for your Message!  |
            | Patrick   | nyong        | patrick.nyon@                | Hello patrick              | Error: Invalid email address |
