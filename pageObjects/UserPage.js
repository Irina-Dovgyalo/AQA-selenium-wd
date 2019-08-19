let waitForVis = require('../helpers/waitForVisible'); //additional files
let returnCurrentURL = require('../helpers/returnCurrentUrl'); 

let UserPage = function() {

    let user = element(by.css('.mail-User-Name')); 
    let btnLogout = element(by.css('#nb-5>div>div>div:nth-child(7)>a'));

    this.getUserName = async function() {
        await waitForVis(user);
        return user.getText();
    }

    this.clickToUserName = async function() {
        await waitForVis(user);
        await user.click();
    }

    this.clickToBtnLogout = async function() {
        await waitForVis(btnLogout);
        await btnLogout.click();
    }

    this.getCurrentURL = async function() {
        return returnCurrentURL();
    }
}

module.exports = new UserPage();