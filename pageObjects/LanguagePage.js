let waitForVis = require('../helpers/waitForVisible');
let allureStep = require('../logic/allureSteps');

let LanguagePage = function() {

    let btnLanguage = element(by.css('.button.select__button'));
    let selectOptions = element(by.css('.select__list'));
    let selectLanguage = element(by.cssContainingText('.select__item', 'English')); 
    let btnSave = element(by.css('.form__save'));

    this.clickToBtnLanguage = async function() {
        await allureStep('Click to button Language', async () => {
            await waitForVis(btnLanguage);
            await btnLanguage.click();
        })
    }

    this.changeLanguage = async function() {
        await allureStep('Select new Language', async () => {
            await waitForVis(selectOptions);
            await waitForVis(selectLanguage);
            await selectLanguage.click();
        })
    }

    this.clickToBtnSave = async function() {
        await allureStep('Click to button Save', async () => {
            await waitForVis(btnSave);
            await btnSave.click();
        })
    }

}

module.exports = new LanguagePage();