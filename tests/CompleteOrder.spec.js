import { test, expect } from '@playwright/test';
import testData from '../utils/testdata';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

test.describe('Checkout Items Test', () => {
  test('User completes checkout with 3 random items', async ({ page }) => {
  
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Login
    console.log('User completes checkout with 3 random items');
    await loginPage.navigate('https://www.saucedemo.com/');
    console.log('Navigated to login page');
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await expect(page).toHaveURL(/inventory/);
    console.log('Logged in successfully and navigated to inventory page');

    // Select and add 3 random items to cart
    const randomIndices = await homePage.getRandomItems(3);
    await homePage.addItemsToCart(randomIndices);
    await homePage.goToCart();
    console.log('Added 3 random items to the cart and navigated to cart page');

    // Verify cart and proceed to checkout
    await cartPage.verifyItemsCount(3);
    await cartPage.proceedToCheckout();
    console.log('Verified that the cart contains 3 items and proceeded to checkout');

    // Fill checkout information and complete purchase
    await checkoutPage.fillCustomerInformation(
      testData.customerDetails.firstName,
      testData.customerDetails.lastName,
      testData.customerDetails.postalCode
    );
    await checkoutPage.completeCheckout();
    await checkoutPage.verifySuccessMessage();
    console.log('Checkout completed and verified success message');
  });
});