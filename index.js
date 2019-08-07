const { Builder, By, Key, until } = require('selenium-webdriver'); 
let driver = new Builder().forBrowser('chrome').build();
let el = driver.findElement(By.id('orb-search-q')); //'orb-search-q'
let navLink = driver.findElement(By.css('#orb-nav-links>ul>li.orb-nav-newsdotcom'));

async function isElementDisplayed(elem, time) {
    while (elem < time || elem !== true) {
        try {
            if (await elem.isDisplayed()) {
                console.log('-> Element is Displayed');
                return elem; 
            } 
        }
        catch(err) {       
            console.log('-> Element is Not Displayed: ' + err);
            return false;
        }
    } return elem;
};

async function searchElement() {  
    await driver.get('https://www.bbc.com/');
    await isElementDisplayed(el, 5).then(el => {
        el.sendKeys('sport', Key.ENTER);
    });
    await driver.wait(until.titleIs('BBC - Search results for sport'), 10000); 
    driver.quit();
};

searchElement();

async function isElementEnabled(elem, time) {
    while (elem < time || elem !== true) {
        try {
            if (await elem.isEnabled()) {
                console.log('-> Element is enabled');
                return elem; 
            } 
        }
        catch(err) {       
            console.log('-> Element is not enabled: ' + err);
            return false;
        }
    } return elem;
};


async function getNavLink() {
    await driver.get('https://www.bbc.com/');
    await isElementEnabled(navLink, 5).then(el => {
        el.click();
    })
    await driver.wait(until.titleIs('Home - BBC News'), 10000);
    driver.quit();
};

// getNavLink();