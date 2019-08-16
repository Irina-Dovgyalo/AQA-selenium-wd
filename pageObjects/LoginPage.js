let waitForVis = require('../helpers/waitForVisible');

let LoginPage = function() {

    let inputLogin = element(by.css('#passp-field-login'));
    let btnSubmitLogin = element(by.css('button.button2.button2_type_submit.passp-form-button'));
    let messageError = element(by.css('.passp-form-field__error')); // Такого аккаунта нет

    this.enterLogin = async function(login) {
        await waitForVis(inputLogin);
        await inputLogin.sendKeys(login);
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

module.exports = new LoginPage();