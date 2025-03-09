/*
* Author: Jose Fernando Troyano.
* Date: 2025-03-09
* Description: Page Object Model for check if the product is present
* Version: 1.0
* */
const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItemLocator = '.cart_item'; // Selector para cada item del carrito
    this.cartItemNameLocator = '.inventory_item_name'; // Selector para el nombre del producto en el carrito
  }
   // Define el método  para verificar si un producto está presente en el carrito.
  async checkProductInCart(productName) {
    const cartItems = this.page.locator(this.cartItemLocator);
    const count = await cartItems.count();

    for (let i = 0; i < count; i++) {
      const itemNameLocator = cartItems.nth(i).locator(this.cartItemNameLocator);
      const itemName = await itemNameLocator.textContent();

      if (itemName && itemName.includes(productName)) {
        return true; // Producto encontrado
      }
    }
    return false; // Producto no encontrado
  }
  // método  para verificar y hacer una aserción sobre la presencia de un producto en el carrito.
  async verifyProductInCart(productName) {
    const isProductPresent = await this.checkProductInCart(productName);
    expect(isProductPresent).toBe(true, `El producto "${productName}" no se encontró en el carrito.`);
  }
};