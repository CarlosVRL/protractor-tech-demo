'use strict';

var loginPage  = new (require('../../api/LoginPage'))();
var authorPage = new (require('../../api/AuthorPage'))();
var bookPage  = new (require('../../api/BookPage'))();

/**
 * Book to Author scenario test specifications.
 */
describe('Book to Author scenario test', function () {

    beforeAll(function () {
        loginPage.loginAsAdmin();
    })

    it('should not show books that are not assigned to an Author', function () {
        // test code goes here!



        expect(true).toBeFalsy('test forced to fail until entities are initialized');
    })

    afterAll(function () {
        loginPage.logout();
    })
});
