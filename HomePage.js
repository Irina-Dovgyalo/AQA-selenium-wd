let EC = protractor.ExpectedConditions;

let Page = function() {

    //GETTER elements:

    let btnLoginEnter = element(by.xpath('//div[@class="desk-notif-card__card"]/a[1]'));    

    let currentLanguage = element(by.css('.headline__bar>div>div>div>div>a'));

    let more = element(by.xpath('//body/div[4]/ul/div[2]')); 

    // ACTIONS: 

    this.waitForVis = async function(element) {
        await browser.wait(EC.visibilityOf(element), 5000);
    }

    this.open = async function() {
        browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
    }

    this.clickToBtnLoginEnter = async function() { 
        await this.waitForVis(btnLoginEnter);
        await btnLoginEnter.click();
    }

    this.clickToCheckLanguage = async function() {
        await this.waitForVis(currentLanguage);
        await currentLanguage.click();
    }

    this.clickToLanguageMore = async function() {
        await this.waitForVis(more);
        await more.click();
    }

    this.checkCurrentLanguage = async function() {
        await this.waitForVis(currentLanguage);
        return currentLanguage.getText();
    }

};

module.exports = new Page();