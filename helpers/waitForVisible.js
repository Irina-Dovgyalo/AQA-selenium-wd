let EC = protractor.ExpectedConditions;
let allureStep = require('../logic/allureSteps');

this.waitForVis = async function(element) {
    await allureStep('Wait visibility of Element', async () => {
        await browser.wait(EC.visibilityOf(element), 5000);
    })
}

module.exports = this.waitForVis;