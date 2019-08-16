let waitForVis = require('../helpers/waitForVisible');

let LanguagePage = function() {

    let btnLanguage = element(by.css('.button.select__button'));
    let selectOptions = element(by.css('.select__list'));
    let selectLanguage = element(by.cssContainingText('.select__item', 'English')); 
    let btnSave = element(by.css('.form__save'));

    this.clickToBtnLanguage = async function() {
        await waitForVis(btnLanguage);
        await btnLanguage.click();
    }

    this.changeLanguage = async function() {
        await waitForVis(selectOptions);
        await waitForVis(selectLanguage);
        await selectLanguage.click();
    }

    this.clickToBtnSave = async function() {
        await waitForVis(btnSave);
        await btnSave.click();
    }

}

module.exports = new LanguagePage();