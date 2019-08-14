let EC = protractor.ExpectedConditions;

let Page = function() {

    //GETTER elements:

    let checkboxLabel = element(by.css('.checkbox__label'));
    let checkboxInput = element(by.css('#local-offers-first'));

    let radioButtonLabel = element(by.css(' ul>li:nth-child(1)>div>div>div>label'));
    let radioButtonInput = element(by.css('#good-state_new'));

    let searchInput = element(by.css('#header-search'));
    let searchBtn = element(by.css('span.search2__button>button'));

    let inputSwitcher = element(by.css('.radio-button__radio.radio-button__radio_side_right > input'));

    // ACTIONS: 

    this.waitForVis = async function(element) {
        await browser.wait(EC.visibilityOf(element), 10000);
    }

    this.open = async function() {
        browser.waitForAngularEnabled(false);
        await browser.get('https://market.yandex.by/catalog/54726/list?local-offers-first=0&deliveryincluded=0&onstock=1');
    } 

    this.clickToCheckbox = async function() { 
        await this.waitForVis(checkboxLabel);
        console.log(await checkboxInput.isSelected());
        await checkboxLabel.click();
        console.log(await checkboxInput.isSelected());
    }
    
    this.clickToRadioButton = async function() { 
        await this.waitForVis(radioButtonLabel);
        console.log(await radioButtonInput.isSelected());
        await radioButtonLabel.click();
        console.log(await radioButtonInput.isSelected());
    }

    this.scrollDown = async function() {
        await browser.executeScript("document.querySelectorAll('._1-l0XiE_ze')[0].scrollIntoView()");
    }

    this.getAttributeValueFromInput = async function(value) {
        await this.waitForVis(searchInput);
        await searchInput.sendKeys(value);
        await this.waitForVis(searchBtn);
        await searchBtn.click();
        await this.waitForVis(searchInput);
        return searchInput.getAttribute('value');
    }

    this.getAttributeClassFromInput = async function() {
        await this.waitForVis(searchInput);
        return searchInput.getAttribute('class');
    }

    // getAttribute(получить значение аттрибутов class, value)

    this.getAttributeClass = async function() {
        await this.waitForVis(inputSwitcher);
        return inputSwitcher.getAttribute('class');
    }

    this.getAttributeValue = async function() {
        await this.waitForVis(inputSwitcher);
        return inputSwitcher.getAttribute('value');
    }

};

module.exports = new Page();