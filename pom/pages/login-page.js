const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.user = page.locator('#user-name');
    this.pass = page.locator('#password');
    this.loginButton = page.locator('#login-button');
   
  }

  async submitLoginForm(user, pass) {
    await this.user.fill(user);
    await this.pass.fill(pass);
    await this.loginButton.click();
  }

 
}; 