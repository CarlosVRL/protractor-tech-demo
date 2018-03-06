'use strict';

/**
 * Login Page Automation Testing API.
 */
class LoginPage {

    /**
     * Goto the login page.
     */
    goto() {
        this.gotoRoot();
    }

    /**
     * Login with username.
     */
    signIn() {
        const ACCOUNT_MENU_ID = 'account-menu';
        element(by.id(ACCOUNT_MENU_ID)).click();

        const LOGIN_LINK_ID = 'login';
        element(by.id(LOGIN_LINK_ID)).click();

        return this;
    }

    setUsername(username) {
        const USERNAME_INPUT_ID = 'username';
        element(by.id(USERNAME_INPUT_ID)).sendKeys(username);
        return this;
    }

    setPassword(password) {
        const PASSWORD_INPUT_ID = 'password';
        element(by.id(PASSWORD_INPUT_ID)).sendKeys(password);
        return this;
    }

    login() {
        const SUBMIT_BUTTON_CSS = 'button[type=submit]';
        element(by.css(SUBMIT_BUTTON_CSS)).click();
        return this;
    }

    /**
     * Login with admin credentials.
     */
    loginAsAdmin() {
        this.gotoRoot();
        this.signIn()
            .setUsername('admin')
            .setPassword('admin')
            .login();
    }

    /**
     * Goto the application root.
     */
    gotoRoot() {
        const ROOT_URL = '/';
        browser.get(ROOT_URL);
    }

    /**
     * Logout of the application.
     */
    logout() {
        element(by.id('account-menu')).click();
        element(by.id('logout')).click();
        return this;
    }
}

module.exports = LoginPage;
