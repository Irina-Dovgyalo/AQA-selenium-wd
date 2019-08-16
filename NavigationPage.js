let EC = protractor.ExpectedConditions;

let NavigationPage = function() {

    let images = element(by.linkText('Картинки')); 
    let news = element(by.linkText('Новости')); 
    let maps = element(by.linkText('Карты')); 
    let market = element(by.linkText('Маркет')); 
    let translate = element(by.linkText('Переводчик')); 
    let music = element(by.linkText('Музыка'));

    this.waitForVis = async function(element) {
        await browser.wait(EC.visibilityOf(element), 5000);
    }

    this.clickToLinkImages = async function() {
        await this.waitForVis(images);
        await images.click();
        return browser.getTitle();
    }

    this.clickToLinkNews = async function() {
        await this.waitForVis(news);
        await news.click();
        return browser.getTitle();
    }

    this.clickToLinkMaps = async function() {
        await this.waitForVis(maps);
        await maps.click();
        return browser.getTitle();
    }

    this.clickToLinkMarket = async function() {
        await this.waitForVis(market);
        await market.click();
        return browser.getTitle();
    }

    this.clickToLinkTranslate = async function() {
        await this.waitForVis(translate);
        await translate.click();
        return browser.getTitle();
    }

    this.clickToLinkMusic = async function() {
        await this.waitForVis(music);
        await music.click();
        return browser.getTitle();
    }

}

module.exports = new NavigationPage();