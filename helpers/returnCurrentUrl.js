let allureStep = require('../logic/allureSteps');

this.returnCurrentURL = async function() {
    let currentUrl;
    await allureStep('Get current URL', async () => {
        return currentUrl = browser.getCurrentUrl();
    });
    return currentUrl;
}

module.exports = this.returnCurrentURL;