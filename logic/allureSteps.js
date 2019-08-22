let takeScreenShot = require('./takeScreenShot');

this.allureStep = async function(stepDefinition, method) {
    await allure.createStep(stepDefinition, async () => {
        try {
            await method();
            if(browser.params.takeScreenShotFromEachAllureStep)  {
                await takeScreenShot();
            }
        }
        catch (error) {
            await takeScreenShot();
            throw error;
        }
    })();
};



module.exports = this.allureStep;