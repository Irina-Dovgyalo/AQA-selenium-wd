let waitForVis = require('../helpers/waitForVisible');
let allureStep = require('../logic/allureSteps');

let LoginPage = function() {

    let inputLogin = element(by.css('#passp-field-login'));
    let btnSubmitLogin = element(by.css('button.button2.button2_type_submit.passp-form-button'));
    let messageError = element(by.css('.passp-form-field__error')); // Такого аккаунта нет

    this.enterLogin = async function(login) {
        await allureStep('Enter login', async () => {
            await waitForVis(inputLogin);
            await inputLogin.sendKeys(login);
        })
    }

    this.clickToBtnSubmit = async function() {
        await allureStep('Click to button Submit Login', async () => {
            await waitForVis(btnSubmitLogin);
            await btnSubmitLogin.click();
        })
    }

    this.showMessageError = async function() {
        let loginError;
        await allureStep('Show Message error', async () => {
            await waitForVis(messageError);
            return loginError = messageError.getText();
        });
        return loginError;
    }

}

module.exports = new LoginPage();