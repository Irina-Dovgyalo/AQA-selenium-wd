// + 1. Перейти на https://yandex.by/
// 2. Задать Лондон в качестве метоположения - http://prntscr.com/i3r8wf
// 3. Запомнить содержимое "еще" http://prntscr.com/i3r95a
// 4. Сменить местоположение на Париж
// 5. Сравнить содержимое "еще" для Лондона и Парижа(должно совпадать)

let IndexPage = require('./page-objects/page');
let page = new IndexPage();

describe('open homepage', function() {

    // beforeEach(function() {
    //     browser.waitForAngularEnabled(false);
    //     browser.get('https://yandex.by/');
    // })

    it('should find and change the location', function() {
        page.open();
        page.clickToLocation();
        page.changeLocation('Лондон');
    });

    // it('should find and change the location', function() {

    //     let location = element(by.css('.home-link.geolink.link_geosuggest_yes.home-link_black_yes'));
    //     location.click();

    //     expect(browser.getTitle()).toBe('Местоположение — Настройка Яндекса');

    //     let input = element(by.css('#city__front-input'));
    //     input.clear();
    //     input.sendKeys('Лондон');
    //     browser.sleep(5000);

    //     let searchEl = element(by.cssContainingText('.popup__content ul li .b-autocomplete-item__reg', 'Лондон'));

    //     browser.wait(searchEl, 5000).then(function(elems) {
    //         return elems.click();
    //     });


    //     browser.sleep(5000);
    // });

});

