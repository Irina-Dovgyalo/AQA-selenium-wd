let EC = protractor.ExpectedConditions;

this.waitForVis = async function(element) {
    await browser.wait(EC.visibilityOf(element), 5000);
}

module.exports = this.waitForVis;