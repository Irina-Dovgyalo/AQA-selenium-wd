let allureStep = require('../logic/allureSteps');

this.currentTitle = async function() {
    let currentTitle;
    await allureStep('Get current title', async () => {
        return currentTitle = browser.getTitle();
    });
    return currentTitle;
}

module.exports = this.currentTitle;