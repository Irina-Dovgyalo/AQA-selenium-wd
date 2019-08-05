const { Builder, By, Key, until } = require('selenium-webdriver');

let chrome = 'chrome';
let firefox = 'firefox';
let ie = 'internet explorer';

let Singleton = (function() {
    let instance;

    function init() { 

        async function checkBrowser(url) {
            return driver = await new Builder().forBrowser(url).build();
        }

        return {
            checkBrowser: function() {
                return checkBrowser;
            }
        };
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    }

})();

let single1 = Singleton.getInstance();
let single2 = Singleton.getInstance();
console.log(single1.checkBrowser() === single2.checkBrowser());

let single3 = new Singleton.getInstance().checkBrowser();

async function searchElement(url) {  
    await single3(url);
    await driver.get('https://www.bbc.com/');
    await driver.findElement(By.id('orb-search-q')).sendKeys('sport', Key.ENTER);
    await driver.wait(until.titleIs('BBC - Search results for sport'), 10000);
    driver.quit();
};

async function getFirstNavLink(url) {
    await single3(url);
    await driver.get('https://www.bbc.com/');
    await driver.findElement(By.css('#orb-nav-links>ul>.orb-nav-newsdotcom')).click();
    await driver.wait(until.titleIs('Home - BBC News'), 10000);
    driver.quit();
}

async function checkDisplayedElement(url) {  
    await single3(url);
    await driver.get('https://www.bbc.com/');
    if(driver.findElement(By.id('orb-search-q')).isDisplayed()){
        console.log(true);
    } else {
        console.log(false);
    }
};

// checkDisplayedElement(chrome);

async function checkEnabledElement(url) {  
    await single3(url);
    await driver.get('https://www.bbc.com/');
    // element.getAttribute('disabled')
    let button = driver.findElement(By.id('orb-search-button'));
    if(button.isEnabled()){
        console.log(true);
    } else {
        console.log(false);
    }
};

// checkEnabledElement(chrome);

async function checkTests() {
    await searchElement(chrome);
    await getFirstNavLink(chrome);    

    await searchElement(firefox);
    await getFirstNavLink(firefox);

    await searchElement(ie);
    await getFirstNavLink(ie);
};
  
checkTests();