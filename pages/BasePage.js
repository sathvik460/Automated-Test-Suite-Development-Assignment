export default class BasePage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to a URL
  async navigate(url) {
    console.log(`Navigating to ${url}`);
    await this.page.goto(url);
  }

  // Wait for an element to be visible
  async waitForElement(selector) {
    console.log(`Waiting for element: ${selector}`);
    await this.page.waitForSelector(selector);
  }

  // Click on an element
  async click(selector) {
    console.log(`Clicking on: ${selector}`);
    await this.page.click(selector);
  }

  // Fill a field
  async fill(selector, text) {
    console.log(`Filling the field: ${selector} with text: ${text}`);
    await this.page.fill(selector, text);
  }

  // Get the text of an element
  async getText(selector) {
    console.log(`Getting text of element: ${selector}`);
    return await this.page.locator(selector).textContent();
  }

  // Check if an element is visible
  async isVisible(selector) {
    return await this.page.locator(selector).isVisible();
  }
}