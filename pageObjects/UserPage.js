let waitForVis = require('../helpers/waitForVisible'); 
let returnCurrentURL = require('../helpers/returnCurrentUrl'); 
let allureStep = require('../logic/allureSteps');

let UserPage = function() {

    let user = element(by.css('.mail-User-Name')); 
    let btnLogout = element(by.css('#nb-5>div>div>div:nth-child(7)>a'));

    this.getUserName = async function() {
        let userName;
        await allureStep('Get User name', async () => {
            await waitForVis(user);
            return userName = user.getText();
        });
        return userName;
    }

    this.clickToUserName = async function() {
        await allureStep('Click to User name', async () => {
            await waitForVis(user);
            await user.click();
        })
    }

    this.clickToBtnLogout = async function() {
        await allureStep('Click to button Logout', async () => {
            await waitForVis(btnLogout);
            await btnLogout.click();
        })
    }

    this.getCurrentURL = async function() {
        let currentUrl;
        await allureStep('Show current URL', async () => {
            return currentUrl = returnCurrentURL();
        });
        return currentUrl;
    }
}

module.exports = new UserPage();