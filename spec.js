let page = require('./Page');

describe('project homepage', function() {

    it('elements should be clickable', async function() {
        await page.open();
        await page.clickToCheckbox();
        await page.clickToRadioButton();
        await page.scrollDown();
        // let a = await page.getAttributeClass();
        // let b = await page.getAttributeValue();
        let c = await page.getAttributeValueFromInput('Enter value');
        let d = await page.getAttributeClassFromInput();

        // console.log(a);
        // console.log(b);
        console.log(c);
        console.log(d);
    });

});