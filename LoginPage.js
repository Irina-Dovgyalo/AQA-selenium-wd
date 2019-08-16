let EC = protractor.ExpectedConditions;

let LoginPage = function() {

    let inputLogin = element(by.css('#passp-field-login'));
    let btnSubmitLogin = element(by.css('button.button2.button2_type_submit.passp-form-button'));
    let messageError = element(by.css('.passp-form-field__error')) // Такого аккаунта нет

    this.waitForVis = async function(element) {
        await browser.wait(EC.visibilityOf(element), 5000);
    }

    this.enterLogin = async function(login) {
        await this.waitForVis(inputLogin);
        await inputLogin.sendKeys(login);
    }

    this.clickToBtnSubmit = async function() {
        await this.waitForVis(btnSubmitLogin);
        await btnSubmitLogin.click();
    }

    this.showMessageError = async function() {
        await this.waitForVis(messageError);
        return messageError.getText();
    }

}

module.exports = new LoginPage();