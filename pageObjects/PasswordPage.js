let waitForVis = require('../helpers/waitForVisible');
let allureStep = require('../logic/allureSteps');

let PasswordPage = function() {

    let inputPassword = element(by.css('#passp-field-passwd'));
    let btnSubmitLogin = element(by.css('button.button2.button2_type_submit.passp-form-button'));
    let messageError = element(by.css('.passp-form-field__error')) // Неверный пароль

    this.enterPassword = async function(password) {
        await allureStep('Enter password', async () => {
            await waitForVis(inputPassword);
            await inputPassword.sendKeys(password);
        })
    }

    this.clickToBtnSubmit = async function() {
        await allureStep('Click to button Submit Password', async () => {
            await waitForVis(btnSubmitLogin);
            await btnSubmitLogin.click();
        })
    }

    this.showMessageError = async function() {
        let passError;
        await allureStep('Show Message error', async () => {
            await waitForVis(messageError);
            return passError = messageError.getText();
        });
        return passError;
    }

}

module.exports = new PasswordPage();