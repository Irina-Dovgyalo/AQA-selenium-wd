let waitForVis = require('../helpers/waitForVisible');
let currentTitle = require('../helpers/returnCurrentTitle');

let NavigationPage = function() {

    let images = element(by.linkText('Картинки')); 
    let news = element(by.linkText('Новости')); 
    let maps = element(by.linkText('Карты')); 
    let market = element(by.linkText('Маркет')); 
    let translate = element(by.linkText('Переводчик')); 
    let music = element(by.linkText('Музыка'));

    this.clickToLinkImages = async function() {
        await waitForVis(images);
        await images.click();
    }

    this.clickToLinkNews = async function() {
        await waitForVis(news);
        await news.click();
    }

    this.clickToLinkMaps = async function() {
        await waitForVis(maps);
        await maps.click();
    }

    this.clickToLinkMarket = async function() {
        await waitForVis(market);
        await market.click();
    }

    this.clickToLinkTranslate = async function() {
        await waitForVis(translate);
        await translate.click();
    }

    this.clickToLinkMusic = async function() {
        await waitForVis(music);
        await music.click();
    }

    this.getCurrentTitle = async function() {
        return currentTitle();
    }

}

module.exports = new NavigationPage();