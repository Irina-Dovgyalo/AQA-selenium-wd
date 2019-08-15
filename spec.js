
let page = require('./Page');

describe('Yandex homepage', function() {

    xdescribe('Yandex - mail', function() {

        it('should redirect to the login page', async function() {
            await page.open();
            await page.clickToBtnLoginEnter();
            await page.enterLogin('AutotestUser');
            await page.enterPassword('AutotestUser123');
            let userName = await page.getUserName();
    
            expect(userName).toEqual('AutotestUser');
            console.log(userName);
        });
    
        it('should return to the home page after logout', async function() {
            await page.open();
            await page.clickToBtnLoginEnter();
            await page.enterLogin('AutotestUser');
            await page.enterPassword('AutotestUser123');
            let currentURL = await page.clickToLogout();
    
            expect(currentURL).toEqual('https://yandex.by/');
            console.log(currentURL);
        });
    
        it('should warn on invalid password', async function() {
            await page.open();
            await page.clickToBtnLoginEnter();
            await page.enterLogin('AutotestUser');
            let errorPassword = await page.enterErrorPassword('NoAutotestUser123');
    
            expect(errorPassword).toEqual('Неверный пароль');
            console.log(errorPassword);
        });
    
        it('should warn on invalid login', async function() {
            await page.open();
            await page.clickToBtnLoginEnter();
            let errorLogin = await page.enterErrorLogin('NoAutotestUser');
    
            expect(errorLogin).toEqual('Такого аккаунта нет');
            console.log(errorLogin);
        });
    });

    xdescribe('Yandex - navigation', function(){

        it('should redirect by link Images', async function() {
            await page.open();
            let img = await page.clickToLinkImages();
            
            expect(img).toEqual('Яндекс.Картинки: поиск изображений в интернете, поиск по картинке')
            console.log(img);
        });

        it('should redirect by link News', async function() {
            await page.open();
            let news = await page.clickToLinkNews();
            
            expect(news).toEqual('Яндекс.Новости: Главные новости сегодня, самые свежие и последние новости Беларуси онлайн')
            console.log(news);
        });

        it('should redirect by link Maps', async function() {
            await page.open();
            let maps = await page.clickToLinkMaps();
            
            expect(maps).toEqual('Яндекс.Карты — подробная карта Беларуси и мира')
            console.log(maps);
        });

        it('should redirect by link Market', async function() {
            await page.open();
            let market = await page.clickToLinkMarket();
            
            expect(market).toEqual('Яндекс.Маркет — выбор и покупка товаров из проверенных интернет-магазинов')
            console.log(market);
        });

        it('should redirect by link Translate', async function() {
            await page.open();
            let translate = await page.clickToLinkTranslate();
            
            expect(translate).toEqual('Яндекс.Переводчик – словарь и онлайн перевод на английский, русский, немецкий, французский, украинский и другие языки.')
            console.log(translate);
        });

        it('should redirect by link Music', async function() {
            await page.open();
            let music = await page.clickToLinkMusic();
            
            expect(music).toEqual('Яндекс.Музыка')
            console.log(music);
        });

    });

    describe('Yandex - change language', function() {

        it('Should change language', async function() {
            await page.open();
            let language = await page.changeLanguage();

            expect(language).toEqual('Eng');
            console.log(language);
        })

    })

});