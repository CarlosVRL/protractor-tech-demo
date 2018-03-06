'use strict';

var loginPage  = new (require('../../api/LoginPage'))();
var authorPage = new (require('../../api/AuthorPage'))();

/**
 * Author smoke test specifications.
 */
describe('Author smoke test', function () {

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
        loginPage.logout();
    });
});
