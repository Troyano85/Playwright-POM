/*
* Author: Jose Fernando Troyano.
* Date: 2025-03-09
* Description: Page Object Model for add product
* Version: 1.0
* */
const { expect } = require('@playwright/test');

exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productItemsLocator = '.inventory_item';
    this.cartIconLocator = '.shopping_cart_link';
    this.addToCartButtonLocator = ':text("Add to cart")';
  }
    //método para seleccionar el producto y añadirlo al carrito.
  async selectProductAndAddToCart(productName) {
    const productLocators = this.page.locator(this.productItemsLocator);
    const productTexts = await productLocators.allTextContents();
      // Itera a través de los textos de los productos.
    for (let i = 0; i < productTexts.length; i++) {
      if (productTexts[i].includes(productName)) {
        await productLocators.nth(i).locator('.inventory_item_name').click();
        await this.page.locator(this.addToCartButtonLocator).first().click();
        break;
      }
    }
  }
  //método  para navegar a la página del carrito de compras.
  async goToCart() {
    await this.page.locator(this.cartIconLocator).click();
  }


};

