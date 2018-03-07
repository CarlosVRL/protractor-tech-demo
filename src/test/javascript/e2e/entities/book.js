'use strict';

var loginPage = new (require('../../api/LoginPage'))();
var bookPage  = new (require('../../api/BookPage'))();

describe('Book e2e test', function () {

    beforeAll(function () {
        loginPage.loginAsAdmin();
    });

    it('should create and delete a Book', function () {
        bookPage.goto();

        browser.sleep(2500);
    });

    afterAll(function () {
        loginPage.logout();
    });
});
