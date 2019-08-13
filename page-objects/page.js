(function () {

    let IndexPage = function () {

        //GETTER elements:

        this.getLocationLink = function () {
            return element(by.css('.home-link.geolink.link_geosuggest_yes.home-link_black_yes'));
        }

        this.getLocationInput = function () {
            return element(by.css('#city__front-input'));
        }

        this.getLocationDropdownMenu = function (location) {
            return element(by.cssContainingText('.popup__content ul li .b-autocomplete-item__reg', location));       
        }

        this.getLinkMore = function () {           
            return element(by.css('[data-statlog="tabs.more"]'));
        }

        this.getElementsLinkMore = function () {
            return element.all(by.css('div.home-tabs__more')); 
        }

        // ACTIONS: 

        this.open = function () {
            browser.waitForAngularEnabled(false);
            browser.get('https://yandex.by/');
        }

        this.clickToLocation = function() {
            this.getLocationLink().click();
        }

        this.changeLocation = function (location) {
            this.getLocationInput().clear().sendKeys(location);
            browser.sleep(3000);
            browser.wait(this.getLocationDropdownMenu(location), 5000).then(function(el) {
                el.click();
            });
        };

        // this.compareElementsMore = function() {
        //     if(this.getElementsMore() === true){
        //         return this.getElementsMore();
        //     }
        // }

    }; 

    module.exports = function() {
        return new IndexPage();
    };

}());