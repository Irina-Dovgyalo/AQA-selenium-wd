let EC = protractor.ExpectedConditions;

let UserPage = function() {

    let user = element(by.css('.mail-User-Name')); 
    let btnLogout = element(by.css('#nb-5>div>div>div:nth-child(7)>a'));

    this.waitForVis = async function(element) {
        await browser.wait(EC.visibilityOf(element), 5000);
    }

    this.getUserName = async function() {
        await this.waitForVis(user);
        return user.getText();
    }

    this.clickToUserName = async function() {
        await this.waitForVis(user);
        await user.click();
    }

    this.clickToBtnLogout = async function() {
        await this.waitForVis(btnLogout);
        await btnLogout.click();
        return browser.getCurrentUrl();
    }

}

module.exports = new UserPage();