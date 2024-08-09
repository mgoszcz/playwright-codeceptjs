const { I } = inject();

class LoginPage {
  loginForm = '#login_form'
  username = '#user_login'
  password = '#user_password'
    submitButton = '.btn-primary'

  // insert your methods here
  submitLogin(username: string, password: string) {
    I.fillField(this.username, username);
    I.fillField(this.password, password);
    I.click(this.submitButton);
  }

  assertLoginFormIsVisible() {
    I.seeElement(this.loginForm);
  }
}

// For inheritance
module.exports = new LoginPage();
export = LoginPage;
