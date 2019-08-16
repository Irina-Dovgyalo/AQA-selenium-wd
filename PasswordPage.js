let EC = protractor.ExpectedConditions;

let PasswordPage = function() {

    let inputPassword = element(by.css('#passp-field-passwd'));
    let btnSubmitLogin = element(by.css('button.button2.button2_type_submit.passp-form-button'));
    let messageError = element(by.css('.passp-form-field__error')) // Неверный пароль

    this.waitForVis = async function(element) {
        await browser.wait(EC.visibilityOf(element), 5000);
    }

    this.enterPassword = async function(password) {
        await this.waitForVis(inputPassword);
        await inputPassword.sendKeys(password);
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

module.exports = new PasswordPage();