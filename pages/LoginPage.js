import BasePage from './basePage';

export default class LoginPage extends BasePage {
  constructor(page) {
    super(page);  // Calling the constructor of BasePage
    this.usernameField = '#user-name';
    this.passwordField = '#password';
    this.loginButton = '#login-button';
  }

  async login(username, password) {
    console.log('Logging in with username and password');
    await this.fill(this.usernameField, username);
    await this.fill(this.passwordField, password);
    await this.click(this.loginButton);
  }
}
