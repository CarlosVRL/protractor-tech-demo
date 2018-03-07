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
        console.log('setting author...');
        return this;
    }

}
