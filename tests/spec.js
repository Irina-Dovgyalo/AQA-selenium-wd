
let page = require('../pageObjects/HomePage');
let loginPage = require('../pageObjects/LoginPage');
let passwordPage = require('../pageObjects/PasswordPage');
let userPage = require('../pageObjects/UserPage');
let navigationPage = require('../pageObjects/NavigationPage');
let languagePage = require('../pageObjects/LanguagePage');

describe('Yandex homepage', function() {

    describe('Yandex - mail', function() {

        fit('should redirect to the login page', async function() {
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
            await userPage.clickToBtnLogout(); 
            let currentURL = await userPage.getCurrentURL(); 
    
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
            let errorMsgPassword = await passwordPage.showMessageError(); 
    
            expect(errorMsgPassword).toEqual('Неверный пароль');
            console.log(errorMsgPassword);
        });
    
        it('should warn on invalid login', async function() {
            await page.open();
            await page.clickToBtnLoginEnter();
            await loginPage.enterLogin('NoAutotestUser');
            await loginPage.clickToBtnSubmit();
            let errorMsgAccaunt = await loginPage.showMessageError(); 
    
            expect(errorMsgAccaunt).toEqual('Такого аккаунта нет');
            console.log(errorMsgAccaunt);
        });
    });

    xdescribe('Yandex - navigation', function(){

        it('should redirect by links', async function() {
            await page.open();
            await navigationPage.clickToLinkImages();
            let imagesTitle = await navigationPage.getCurrentTitle();
            
            expect(imagesTitle).toEqual('Яндекс.Картинки: поиск изображений в интернете, поиск по картинке')
            console.log(imagesTitle);

            await page.open();
            await navigationPage.clickToLinkNews();
            let newsTitle = await navigationPage.getCurrentTitle();
            
            expect(newsTitle).toEqual('Яндекс.Новости: Главные новости сегодня, самые свежие и последние новости Беларуси онлайн')
            console.log(newsTitle);

            await page.open();
            await navigationPage.clickToLinkMaps();
            let mapsTitle = await navigationPage.getCurrentTitle();
            
            expect(mapsTitle).toEqual('Яндекс.Карты — подробная карта Беларуси и мира')
            console.log(mapsTitle);

            await page.open();
            await navigationPage.clickToLinkMarket();
            let marketTitle = await navigationPage.getCurrentTitle();
            
            expect(marketTitle).toEqual('Яндекс.Маркет — выбор и покупка товаров из проверенных интернет-магазинов')
            console.log(marketTitle);

            await page.open();
            await navigationPage.clickToLinkTranslate();
            let translateTitle = await navigationPage.getCurrentTitle();
            
            expect(translateTitle).toEqual('Яндекс.Переводчик – словарь и онлайн перевод на английский, русский, немецкий, французский, украинский и другие языки.')
            console.log(translateTitle);

            await page.open();
            await navigationPage.clickToLinkMusic();
            let musicTitle = await navigationPage.getCurrentTitle();
            
            expect(musicTitle).toEqual('Яндекс.Музыка')
            console.log(musicTitle);
        });

    });

    xdescribe('Yandex - change language', function() {

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