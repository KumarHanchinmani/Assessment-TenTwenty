
import { test, expect } from '../fixtures/testFixtures';

test('user can complete a purchase successfully', async ({
  loginPage,
  productsPage,
  cartPage,
  checkoutPage,
}) => {
  
  await loginPage.goto();
  await loginPage.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);

  await productsPage.addProductToCart('Sauce Labs Backpack');
  await productsPage.openCart();
  await cartPage.proceedToCheckout();
  await checkoutPage.fillCustomerInformation('John', 'Doe', '12345');
  await checkoutPage.continueToOverview();
  await checkoutPage.finishOrder();
  await checkoutPage.verifyOrderConfirmation();
});
