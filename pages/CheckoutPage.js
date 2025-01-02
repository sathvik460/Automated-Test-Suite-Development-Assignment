import BasePage from './basePage';

export default class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameField = '#first-name';
    this.lastNameField = '#last-name';
    this.postalCodeField = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.successMessage = '.complete-header';
  }

  async fillCustomerInformation(firstName, lastName, postalCode) {
    try {
      console.log(`Entering customer details: First Name: ${firstName}, Last Name: ${lastName}, Postal Code: ${postalCode}`);
      await this.fill(this.firstNameField, firstName);
      await this.fill(this.lastNameField, lastName);
      await this.fill(this.postalCodeField, postalCode);
      console.log('Customer information entered successfully');
      await this.click(this.continueButton);
      console.log('Clicked on continue to proceed');
    } catch (error) {
      console.error(`Error in filling customer information: ${error.message}`);
      throw error;
    }
  }

  async completeCheckout() {
    const itemTotalSelector = '.summary_subtotal_label';
    const taxSelector = '.summary_tax_label';
    const totalSelector = '.summary_total_label';
  
    // Extract item total, tax, and total price values from the page
    const itemTotalText = await this.page.locator(itemTotalSelector).textContent();
    const taxText = await this.page.locator(taxSelector).textContent();
    const totalText = await this.page.locator(totalSelector).textContent();
  
    // Convert extracted values to numbers
    const itemTotal = parseFloat(itemTotalText.replace('Item total: $', ''));
    const tax = parseFloat(taxText.replace('Tax: $', ''));
    const total = parseFloat(totalText.replace('Total: $', ''));
  
    console.log(`Item Total: ${itemTotal}, Tax: ${tax}, Total: ${total}`);
  
    const expectedTotal = itemTotal + tax;
    if (total !== expectedTotal) {
      throw new Error(`Total mismatch! Expected: ${expectedTotal}, Found: ${total}`);
    }
  
    // Click on "Finish" button to complete the checkout
    await this.page.click(this.finishButton);
  }
  
  

  async verifySuccessMessage() {
    try {
      const message = await this.getText(this.successMessage);
      console.log(`Verifying success message: ${message}`);
      if (message !== 'Thank you for your order!') {
        throw new Error(`Expected message, but found: ${message}`);
      }
      console.log('Checkout success message verified');
    } catch (error) {
      console.error(`Error verifying message: ${error.message}`);
      throw error;
    }
  }
}