import BasePage from './basePage';

export default class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartItems = '.cart_item';
    this.checkoutButton = '#checkout';
  }

  async verifyItemsCount(expectedCount) {
    try {
      const itemCount = await this.page.locator(this.cartItems).count();
      console.log(`Cart currently contains ${itemCount} items. Verifying if it matches the expected count of ${expectedCount}`);
      if (itemCount !== expectedCount) {
        throw new Error(`Expected ${expectedCount} items, but found ${itemCount}.`);
      }
      console.log(`Cart contains the expected ${expectedCount} items`);
    } catch (error) {
      console.error(`Error in verifying cart item count: ${error.message}`);
      throw error;
    }
  }

  async proceedToCheckout() {
    try {
      console.log('Clicking on the checkout button to proceed to checkout');
      await this.click(this.checkoutButton);
    } catch (error) {
      console.error(`Failed to click on checkout button: ${error.message}`);
      throw error;
    }
  }
}