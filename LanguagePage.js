let EC = protractor.ExpectedConditions;

let LanguagePage = function() {

    let btnLanguage = element(by.css('.button.select__button'));
    let selectOptions = element(by.css('.select__list'));
    let selectLanguage = element(by.cssContainingText('.select__item', 'English')); 
    let btnSave = element(by.css('.form__save'));

    this.waitForVis = async function(element) {
        await browser.wait(EC.visibilityOf(element), 5000);
    }

    this.clickToBtnLanguage = async function() {
        await this.waitForVis(btnLanguage);
        await btnLanguage.click();
    }

    this.changeLanguage = async function() {
        await this.waitForVis(selectOptions);
        await this.waitForVis(selectLanguage);
        await selectLanguage.click();
    }

    this.clickToBtnSave = async function() {
        await this.waitForVis(btnSave);
        await btnSave.click();
    }

}

module.exports = new LanguagePage();