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
        // Initialize the author
        authorPage.createJenkinsAuthor();

        // Create a book without an author
        bookPage.createJenkinsBook();

        authorPage.goto();
        expect(authorPage.selectByBookTitle(bookPage.getJenkinsTitle()).getRow().isPresent())
            .toBeFalsy('the book title "' + bookPage.getJenkinsTitle() + '" should NOT appear on the Author page');

        // Cleanup
//        bookPage.trashJenkinsBook();
//        authorPage.trashJenkinsAuthor();
    })

    afterAll(function () {
        loginPage.logout();
    })
});
