let waitForVis = require('../helpers/waitForVisible');
let allureStep = require('../logic/allureSteps');

let Page = function() {

    //GETTER elements:

    let btnLoginEnter = element(by.xpath('//div[@class="desk-notif-card__card"]/a[1]'));    

    let currentLanguage = element(by.css('.headline__bar>div>div>div>div>a'));

    let more = element(by.xpath('//body/div[4]/ul/div[2]')); 

    this.open = async function() {
        await allureStep('Open browser', async () => {
            browser.waitForAngularEnabled(false);
            await browser.get('https://yandex.by/');
        })
    }

    this.clickToBtnLoginEnter = async function() {
        await allureStep('Click to button Login', async () => {
            await waitForVis(btnLoginEnter);
            await btnLoginEnter.click();
        })
    }

    this.clickToCheckLanguage = async function() {
        await allureStep('Click to button Language', async () => {
            await waitForVis(currentLanguage);
            await currentLanguage.click();
        })
    }

    this.clickToLanguageMore = async function() {
        await allureStep('Click to button More', async () => {
            await waitForVis(more);
            await more.click();
        })
    }

    this.checkCurrentLanguage = async function() {
        let text;
        await allureStep('Show text of current language', async () => {
            await waitForVis(currentLanguage);
            return text = currentLanguage.getText();
        });
        return text;
    }

};

module.exports = new Page();