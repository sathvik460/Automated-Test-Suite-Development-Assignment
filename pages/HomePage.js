import BasePage from './basePage';

export default class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.inventoryItems = '.inventory_item';
    this.addToCartButton = 'text=Add to cart';
    this.cartLink = '.shopping_cart_link';
  }

  // Get random unique item indices, ensuring we do not exceed the available items count
  async getRandomItems(count) {
    const totalItems = await this.page.locator(this.inventoryItems).count();
    if (totalItems < count) {
      throw new Error(`Not enough items to select. Requested ${count}, but only found ${totalItems}`);
    }

    const randomIndices = new Set();
  
  // Generate unique random indices without exceeding the available items
    while (randomIndices.size < count) {
      const randomIndex = Math.floor(Math.random() * totalItems);
      randomIndices.add(randomIndex);
    }

    return Array.from(randomIndices);
  }

  async addItemsToCart(indices) {
    for (const index of indices) {
  // Ensuring that the index is within bounds and clicking on the "Add to Cart" button
      const item = this.page.locator(this.inventoryItems).nth(index);
      await item.locator(this.addToCartButton).click();
      console.log(`Item at index ${index} added to cart`);
    }
  }

  async goToCart() {
    await this.click(this.cartLink);
  }
}