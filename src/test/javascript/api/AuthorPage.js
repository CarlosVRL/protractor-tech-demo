'use strict';

/**
 * Author Page Automation Testing API.
 */
class AuthorPage {

    /**
     * Goto the entity page.
     */
    goto() {
        const ENTITY_MENU_ID = 'entity-menu';
        element(by.id(ENTITY_MENU_ID)).click();

        const ENTITY_MENU_REF = '[ui-sref="author"]';
        element(by.css(ENTITY_MENU_REF)).click();
    }

    /**
     * Create an entity.
     */
    create() {
        element(by.css('[ui-sref="author.new"]')).click();
        return this;
    }

    setName(name) {
        element(by.id('field_name')).sendKeys(name);
        return this;
    }

    setBirthDate(birthDate) {
        element(by.id('field_birthDate')).sendKeys(birthDate);
        return this;
    }

    save() {
        element(by.css('button[type="submit"]')).click();
        return this;
    }

    /**
     * Create a default entity.
     */
    createJenkinsAuthor() {
        this.goto();
        this.create()
            .setName('Jenkins_Author')
            .setBirthDate('1999-01-01')
            .save();
        return this;
    }


    /**
     * Select an entity.
     */
    selectByName(name) {
        var name_field = element(by.cssContainingText('.ng-binding', name));
        this.row = name_field.element(by.xpath('..'));
        this.name = name;
        return this;
    }

    getRow() {
        return this.row;
    }

    /**
     * Delete the selected entity.
     */
    trash() {
        this.row.element(by.xpath('./td[last()]/div/button[last()]')).click();
        element(by.css('button[type="submit"]')).click();
    }

    trashJenkinsAuthor() {
        this.selectByName('Jenkins_Author').trash();
        return this;
    }

    /**
     * Check if the selected entity exists.
     */
    checkJenkinsAuthor() {
        expect(this.selectByName('Jenkins_Author').getRow().isPresent())
            .toBeTruthy('after creating an Author, the record should be visible');
        return this;
    }
}

module.exports = AuthorPage;
