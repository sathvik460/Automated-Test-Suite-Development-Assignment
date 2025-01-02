# Playwright Automated Test Suite
This repository contains an automated test suite for testing a checkout process using **Playwright** with **JavaScript**.

The test verifies the functionality of a user completing a checkout with random items in a shopping cart.

## Prerequisites

Before running the test suite, ensure that you have the following installed:

- **Node.js** (>= 14.x)
- **npm** (Node package manager)
- **Playwright**
- **Allure Reporting** (for generating detailed test reports)

## Test Suite Setup
 
- Install [Visual Studio Code](https://code.visualstudio.com/download)
- Install [Node JS](https://nodejs.org/en/download/)
-	Clone the repository to your local system
-	Open the project in Visual Studio Code and open the terminal
- Make sure the path to the project is correct `<local_path>\Automated-Test-Suite-Development-Assignment`
- In the terminal, execute the command: ```npm install```
  - The command will install all found in the package.json

## Configure Playwright for Reporting
To enable Allure reporting, configure Playwright by adding the reporter to playwright.config.js:
reporter: 'allure-playwright'

## Allure Installation
- Run the command to install Allure globally:
`npm install -g allure-commandline --save-dev`

## Execution Process/Running the tests

- **Execute Playwright Tests**:

  - To run the tests with Playwright UI opened, execute the command: `npx playwright test --headed`
  - Inorder to execute the tests without opening the Playwright UI: `npx playwright test`
  - This will trigger the test suite, and Playwright will execute all the tests defined in the tests folder.

- **Generate the Allure Report**:

  - After the tests are executed, generate the Allure report by running: `npm run generate-report`
    
- **Open the Allure Report**:
  
  - Once the report is generated, you can open it by using the command: `npm run open-report`
  - This will launch the Allure report in your browser, where you can review detailed test results including step-by-step execution, passed/failed status and logs

## Test Details
#### Test Scenario  
-	Login: A user logs into the application using valid credentials.
-	Random Item Selection: The test selects 3 random items from the home page or inventory.
-	Add Items to Cart: The selected items are added to the cart.
-	Cart Verification: The test verifies that 3 items are present in the cart.
-	Checkout: The user completes the checkout by filling in customer information and confirming the purchase.
-	Success Message Verification: Finally, the test verifies that the checkout was completed successfully by checking for the success message.

## Assertions

- **Assertions are included to validate**:
  
   -	The correct URL after login.
   -	The correct number of items in the cart.
   -	Items total, tax and sum of items and tax
   -	Successful completion of the checkout with the appropriate success message.
