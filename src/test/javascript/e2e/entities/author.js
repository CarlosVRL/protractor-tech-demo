'use strict';

var loginPage  = new (require('../../api/LoginPage'))();
var authorPage = new (require('../../api/AuthorPage'))();

/**
 * Author entity e2e test specifications.
 */
describe('Author e2e test', function () {

    var accountMenu = element(by.id('account-menu'));
    var logout = element(by.id('logout'));

    beforeAll(function () {
        loginPage.loginAsAdmin();
    });

    it('should create and delete an Author', function () {
        authorPage
            .createJenkinsAuthor()
            .checkJenkinsAuthor()
            .trashJenkinsAuthor();
    });

    afterAll(function () {
        accountMenu.click();
        logout.click();
    });
});
