let waitForVis = require('../helpers/waitForVisible');
let EC = protractor.ExpectedConditions;

let Page = function() {

// -------------- Click to element ----------------

    this.clickToElement = async function(element) {
        await waitForVis(element);
        await browser.actions().click(element).perform();
    };

// -------------- Scroll to element ---------------

    this.scrollToElement = async function(element) {
        await waitForVis(element);
        await browser.actions().mouseMove(element).perform();
    };

// ------------- Enter the text -------------------

    this.enterText = async function(element, text) { 
        await waitForVis(element);
        await browser.actions().click(element).sendKeys(text).perform();
    };

// ---------------Expected Condition --------------

    this.waitIsClickable = async function(element) {
        await browser.wait(EC.elementToBeClickable(element), 5000);
    };

// ------------ Click to Element with JS ----------

    this.clickToElementWithJS = async function() {
        await browser.executeScript('document.querySelector(".class").click()') ;
    };

// ------------- Enter the text with JS -----------

    this.enterTextWithJS = async function() {
        await browser.executeScript(`
        document.querySelector('#id').onclick = function() {
            enterText();
        };
        
        function enterText() {
            document.querySelector('#id').value = 'text';
        }`) ;
    };
};

module.exports = new Page();