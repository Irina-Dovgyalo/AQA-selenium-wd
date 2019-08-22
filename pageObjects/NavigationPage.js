let waitForVis = require('../helpers/waitForVisible');
let currentTitle = require('../helpers/returnCurrentTitle');
let allureStep = require('../logic/allureSteps');

let NavigationPage = function() {

    let images = element(by.linkText('Картинки')); 
    let news = element(by.linkText('Новости')); 
    let maps = element(by.linkText('Карты')); 
    let market = element(by.linkText('Маркет')); 
    let translate = element(by.linkText('Переводчик')); 
    let music = element(by.linkText('Музыка'));

    this.clickToLinkImages = async function() {
        await allureStep('Click to link Images', async () => {
            await waitForVis(images);
            await images.click();
        })
    }

    this.clickToLinkNews = async function() {
        await allureStep('CLick to link News', async () => {
            await waitForVis(news);
            await news.click();
        })
    }

    this.clickToLinkMaps = async function() {
        await allureStep('Click to link Maps', async () => {
            await waitForVis(maps);
            await maps.click();
        })
    }

    this.clickToLinkMarket = async function() {
        await allureStep('Click to link Market', async () => {
            await waitForVis(market);
            await market.click();
        })
    }

    this.clickToLinkTranslate = async function() {
        await allureStep('Click to link Translate', async () => {
            await waitForVis(translate);
            await translate.click();
        })
    }

    this.clickToLinkMusic = async function() {
        await allureStep('Click to link Music', async () => {
            await waitForVis(music);
            await music.click();
        })
    }

    this.getCurrentTitle = async function() {
        let title;
        await allureStep('Get current title', async () => {
            return title = currentTitle();
        });
        return title;
    }

}

module.exports = new NavigationPage();