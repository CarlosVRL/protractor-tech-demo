'use strict';

var loginPage = new (require('../../api/LoginPage'))();

/**
 * Author entity e2e test specifications.
 */
describe('Author e2e test', function () {

    var username = element(by.id('username'));
    var password = element(by.id('password'));
    var entityMenu = element(by.id('entity-menu'));
    var accountMenu = element(by.id('account-menu'));
    var login = element(by.id('login'));
    var logout = element(by.id('logout'));

    beforeAll(function () {
        loginPage.loginAsAdmin();
    });

    it('should create and delete an Author', function () {
//        entityMenu.click();
//        element.all(by.css('[ui-sref="author"]')).first().click().then(function() {
//            expect(element.all(by.css('h2')).first().getText()).toMatch(/Authors/);
//        });
        // goto the author page


        // click on the create modal

        // define name and birth date

        // save

        // delete
    });

//    it('should load create Author dialog', function () {
//        element(by.css('[ui-sref="author.new"]')).click().then(function() {
//            expect(element(by.css('h4.modal-title')).getText()).toMatch(/Create or edit a Author/);
//            element(by.css('button.close')).click();
//        });
//    });

    afterAll(function () {
        accountMenu.click();
        logout.click();
    });
});
