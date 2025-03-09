/*
* Author:Jose Fernando Troyano.
* Date: 2025-03-09
* Description: testing script
* Version: 1.0
* */
import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/login-page');
const { ProductsPage } = require('../pages/Products-page');
const { CartPage } = require('../pages/Cart-page');
import{URLS,CREDENTIALS} from '../data/constants';

test('check if the product was added to the cart', async ({ page }) => {
  await page.goto(URLS.SAUCEDEMOURL);
  const productName ="Sauce Labs Backpack";
   // Inicia sesión.
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(CREDENTIALS.SAUCEDEMOUSER,CREDENTIALS.SAUCEDEMOPASS)
   // Selecciona un producto y lo añade al carrito.
  const productsPage = new ProductsPage(page);
  await productsPage.selectProductAndAddToCart(productName);
  await productsPage.goToCart()
   // Verifica que el producto se muestra correctamente en el carrito.
  const cartPage = new CartPage(page);
  await cartPage.checkProductInCart(productName);
  await cartPage.verifyProductInCart(productName);

  await page.pause();
});

