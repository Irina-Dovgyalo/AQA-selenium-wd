
describe('Enter a name in the search', function() {

  it('should redirect to the correct page', function() { 
    browser.waitForAngularEnabled(false);
    browser.get('https://www.bbc.com/');
    browser.findElement(by.id('orb-search-q')).sendKeys('sport');
    browser.findElement(By.id('orb-search-button')).click();
    browser.driver.sleep(1000);

    expect(browser.getTitle()).toBe('BBC - Search results for sport');
  });

  it('should redirect to the correct navigation link', function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.bbc.com/');
    browser.findElement(by.css('#orb-nav-links>ul>.orb-nav-newsdotcom')).click();
    browser.driver.sleep(1000);

    expect(browser.getTitle()).toBe('Home - BBC News');
  })
});








  
