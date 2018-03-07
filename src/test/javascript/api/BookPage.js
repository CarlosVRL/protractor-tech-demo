'use strict';

/**
 * Book Page Automation Testing API.
 */
module.exports = class BookPage {

    /**
     * Default field values.
     */
    constructor() {
        this.jenkinsTitle = 'Jenkins_Title';
        this.jenkinsDescription = 'E2E Test';
        this.jenkinsPublicationDate = '1999-01-01';
        this.jenkinsPrice = '3.50';
        this.jenkinsAuthor = 'Jenkins_Author';
    }

    /**
     * Goto the entity page.
     */
    goto() {
        const ENTITY_MENU_ID = 'entity-menu';
        element(by.id(ENTITY_MENU_ID)).click();

        const ENTITY_MENU_REF = '[ui-sref="book"]';
        element(by.css(ENTITY_MENU_REF)).click();

        return this;
    }

    /**
     * Create an entity.
     */
    create() {
        element(by.css('[ui-sref="book.new"]')).click();
        return this;
    }

    setTitle(title) {
        element(by.id('field_title')).sendKeys(title);
        return this;
    }

    setDescription(description) {
        element(by.id('field_description')).sendKeys(description);
        return this;
    }

    setPublicationDate(publicationDate) {
        element(by.id('field_publicationDate')).sendKeys(publicationDate);
        return this;
    }

    setPrice(price) {
        element(by.id('field_price')).sendKeys(price);
        return this;
    }

    setAuthor(author) {
        element(by.id('field_author')).click();
        element(by.css('option[label="' + author + '"]')).click();
        return this;
    }

    save() {
        element(by.css('button[type="submit"]')).click();
        return this;
    }

    /**
     * Create a default entity.
     */
    createJenkinsBook() {
        this.goto();
        this.create()
            .setTitle(this.jenkinsTitle)
            .setDescription(this.jenkinsDescription)
            .setPublicationDate(this.jenkinsPublicationDate)
            .setPrice(this.jenkinsPrice)
            .save();
        return this;
    }

    /**
     * Select an entity.
     */
    selectByTitle(title) {
        var title_field = element(by.cssContainingText('.ng-binding', title));
        this.row = title_field.element(by.xpath('..'));
        this.title = title;
        return this;
    }

    getRow() {
        return this.row;
    }

    /**
     * Delete the selected entity.
     */
    trash() {
        this.goto();
        this.row.element(by.xpath('./td[last()]/div/button[last()]')).click();
        element(by.css('button[type="submit"]')).click();
    }

    trashJenkinsBook() {
        this.selectByTitle(this.jenkinsTitle).trash();
        return this;
    }

    /**
     * Check if the selected entity exists.
     */
    checkJenkinsBook() {
        expect(this.selectByTitle(this.jenkinsTitle).getRow().isPresent())
            .toBeTruthy('after creating a Book named "' + this.jenkinsTitle + '", the record should be visible');
        return this;
    }
}
