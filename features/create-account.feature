
Feature: Create Account

  In order to sign in to the courses
  As a test automation engineer Alice
  Alice want to able to create an account to access the courses

  Background:
    Given Alice is at ultimate qa site
@test
  Scenario: Able to create an account
    When she create an account 
    | firstName | lastName | email                  | password |
    | Alice     |  Tan     | alice.tan@hotmail.com  | 12345678 |

    Then she is able have an account
  

  