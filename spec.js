
let page = require('./HomePage');
let loginPage = require('./LoginPage');
let passwordPage = require('./PasswordPage');
let userPage = require('./UserPage');
let navigationPage = require('./NavigationPage');
let languagePage = require('./LanguagePage');

describe('Yandex homepage', function() {

    describe('Yandex - mail', function() {

        it('should redirect to the login page', async function() {
            await page.open();
            await page.clickToBtnLoginEnter();
            await loginPage.enterLogin('AutotestUser');
            await loginPage.clickToBtnSubmit();
            await passwordPage.enterPassword('AutotestUser123');
            await passwordPage.clickToBtnSubmit();
            let userName = await userPage.getUserName();
    
            expect(userName).toEqual('AutotestUser');
            console.log(userName);
        });
    
        it('should return to the home page after logout', async function() {
            await page.open();
            await page.clickToBtnLoginEnter();
            await loginPage.enterLogin('AutotestUser');
            await loginPage.clickToBtnSubmit();
            await passwordPage.enterPassword('AutotestUser123');
            await passwordPage.clickToBtnSubmit();
            await userPage.getUserName();
            await userPage.clickToUserName();
            let currentURL = await userPage.clickToBtnLogout();
    
            expect(currentURL).toEqual('https://yandex.by/');
            console.log(currentURL);
        });
    
        it('should warn on invalid password', async function() {
            await page.open();
            await page.clickToBtnLoginEnter();
            await loginPage.enterLogin('AutotestUser');
            await loginPage.clickToBtnSubmit();
            await passwordPage.enterPassword('NoAutotestUser123');
            await passwordPage.clickToBtnSubmit();
            let errorPassword = await passwordPage.showMessageError();
    
            expect(errorPassword).toEqual('Неверный пароль');
            console.log(errorPassword);
        });
    
        it('should warn on invalid login', async function() {
            await page.open();
            await page.clickToBtnLoginEnter();
            await loginPage.enterLogin('NoAutotestUser');
            await loginPage.clickToBtnSubmit();
            let errorLogin = await loginPage.showMessageError();
    
            expect(errorLogin).toEqual('Такого аккаунта нет');
            console.log(errorLogin);
        });
    });

    describe('Yandex - navigation', function(){

        it('should redirect by links', async function() {
            await page.open();
            let img = await navigationPage.clickToLinkImages();
            
            expect(img).toEqual('Яндекс.Картинки: поиск изображений в интернете, поиск по картинке')
            console.log(img);

            await page.open();
            let news = await navigationPage.clickToLinkNews();
            
            expect(news).toEqual('Яндекс.Новости: Главные новости сегодня, самые свежие и последние новости Беларуси онлайн')
            console.log(news);

            await page.open();
            let maps = await navigationPage.clickToLinkMaps();
            
            expect(maps).toEqual('Яндекс.Карты — подробная карта Беларуси и мира')
            console.log(maps);

            await page.open();
            let market = await navigationPage.clickToLinkMarket();
            
            expect(market).toEqual('Яндекс.Маркет — выбор и покупка товаров из проверенных интернет-магазинов')
            console.log(market);

            await page.open();
            let translate = await navigationPage.clickToLinkTranslate();
            
            expect(translate).toEqual('Яндекс.Переводчик – словарь и онлайн перевод на английский, русский, немецкий, французский, украинский и другие языки.')
            console.log(translate);

            await page.open();
            let music = await navigationPage.clickToLinkMusic();
            
            expect(music).toEqual('Яндекс.Музыка')
            console.log(music);
        });

    });

    fdescribe('Yandex - change language', function() {

        it('Should change language', async function() {
            await page.open();
            await page.clickToCheckLanguage();
            await page.clickToLanguageMore();
            await languagePage.clickToBtnLanguage();
            await languagePage.changeLanguage();
            await languagePage.clickToBtnSave();

            let language = await page.checkCurrentLanguage();

            expect(language).toEqual('Eng');
            console.log(language);
        })

    })

});