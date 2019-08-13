let EC = protractor.ExpectedConditions;

let Page = function() {

    //GETTER elements:

    let getLocationLink = element(by.css('.home-link.geolink.link_geosuggest_yes.home-link_black_yes'));

    let getLocationInput = element(by.css('#city__front-input'));

    this.getLocationDropdownMenu = function(location) {
        return element(by.cssContainingText('.popup__content ul li .b-autocomplete-item__reg', location));
    } 

    let getLinkMore = element(by.css('[data-statlog="tabs.more"]'));

    let getElementsLinkMore = element.all(by.css('.home-link.home-tabs__more-link.home-link_black_yes'));

        // ACTIONS: 

    this.waitForVis = async function(element) {
        await browser.wait(EC.visibilityOf(element), 5000);
    }

    this.open = async function() {
        browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
    }
    
    this.clickToLocation = async function() { 
        await this.waitForVis(getLocationLink);
        await getLocationLink.click();
    }

    this.changeLocation = async function(location) {
        await this.waitForVis(getLocationInput);
        await getLocationInput.clear().sendKeys(location);
        await this.waitForVis(this.getLocationDropdownMenu(location));
        await this.getLocationDropdownMenu(location).click();
    }

    this.clickToLinkMore = async function() {
        await this.waitForVis(getLinkMore);
        await getLinkMore.click();
        await this.waitForVis(getElementsLinkMore.get(0));
        return getElementsLinkMore.getText();
    }
};

module.exports = new Page();