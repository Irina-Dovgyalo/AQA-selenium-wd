let EC = protractor.ExpectedConditions;

let Page = function() {

    //GETTER elements:

    let buttonLoginEnter = element(by.xpath('//div[@class="desk-notif-card__card"]/a[1]'));

    let inputLogin = element(by.css('#passp-field-login'));

    let btnSubmitLogin = element(by.css('button.button2.button2_type_submit.passp-form-button'));

    let inputPassword = element(by.css('#passp-field-passwd'));

    let messageError = element(by.css('.passp-form-field__error')) // Неверный пароль // Такого аккаунта нет

    let user = element(by.css('.mail-User-Name')); 

    let btnLogout = element(by.css('#nb-5>div>div>div:nth-child(7)>a'));
    
    let images = element(by.linkText('Картинки')); 
    let news = element(by.linkText('Новости')); 
    let maps = element(by.linkText('Карты')); 
    let market = element(by.linkText('Маркет')); 
    let translate = element(by.linkText('Переводчик')); 
    let music = element(by.linkText('Музыка')); 

    let currentLanguage = element(by.css('.headline__bar>div>div>div>div>a'));
    let more = element(by.xpath('//body/div[4]/ul/div[2]')); 
    let btnLanguage = element(by.css('.button.select__button'));
    let selectOptions = element(by.css('.select__list'));
    let selectLanguage = element(by.cssContainingText('.select__item', 'English')); 
    let btnSave = element(by.css('.form__save'));
    // ACTIONS: 

    this.waitForVis = async function(element) {
        await browser.wait(EC.visibilityOf(element), 5000);
    }

    this.open = async function() {
        browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
    }

    this.clickToBtnLoginEnter = async function() { 
        await this.waitForVis(buttonLoginEnter);
        await buttonLoginEnter.click();
    }

    this.enterLogin = async function(login) {
        await this.waitForVis(inputLogin);
        await inputLogin.sendKeys(login);
        await this.waitForVis(btnSubmitLogin);
        await btnSubmitLogin.click();
    }

    this.enterErrorLogin = async function(login) {
        await this.waitForVis(inputLogin);
        await inputLogin.sendKeys(login);
        await this.waitForVis(btnSubmitLogin);
        await btnSubmitLogin.click();
        await this.waitForVis(messageError);
        return messageError.getText();
    }

    this.enterPassword = async function(password) {
        await this.waitForVis(inputPassword);
        await inputPassword.sendKeys(password);
        await this.waitForVis(btnSubmitLogin);
        await btnSubmitLogin.click();
    }

    this.enterErrorPassword = async function(password) {
        await this.waitForVis(inputPassword);
        await inputPassword.sendKeys(password);
        await this.waitForVis(btnSubmitLogin);
        await btnSubmitLogin.click();
        await this.waitForVis(messageError);
        return messageError.getText();
    }

    this.getUserName = async function() {
        await this.waitForVis(user);
        return user.getText();
    }

    this.clickToLogout = async function() {
        await this.waitForVis(user);
        await user.click();
        await this.waitForVis(btnLogout);
        await btnLogout.click();
        return browser.getCurrentUrl();
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

    this.changeLanguage = async function() {
        await this.waitForVis(currentLanguage);
        await currentLanguage.click();
        await this.waitForVis(more);
        await more.click();
        await this.waitForVis(btnLanguage);
        await btnLanguage.click();
        await this.waitForVis(selectOptions);
        await this.waitForVis(selectLanguage);
        await selectLanguage.click();
        await this.waitForVis(btnSave);
        await btnSave.click();
        await this.waitForVis(currentLanguage);
        return currentLanguage.getText();
    }

};

module.exports = new Page();