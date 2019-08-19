let waitForVis = require('../helpers/waitForVisible');

let PasswordPage = function() {

    let inputPassword = element(by.css('#passp-field-passwd'));
    let btnSubmitLogin = element(by.css('button.button2.button2_type_submit.passp-form-button'));
    let messageError = element(by.css('.passp-form-field__error')) // Неверный пароль

    this.enterPassword = async function(password) {
        await waitForVis(inputPassword);
        await inputPassword.sendKeys(password);
    }

    this.clickToBtnSubmit = async function() {
        await waitForVis(btnSubmitLogin);
        await btnSubmitLogin.click();
    }

    this.showMessageError = async function() {
        await waitForVis(messageError);
        return messageError.getText();
    }

}

module.exports = new PasswordPage();