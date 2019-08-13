let page = require('./Page');

describe('open homepage', function() {

    it('should find and change the location', async function() {
        await page.open();
        await page.clickToLocation();
        await page.changeLocation('Лондон');
        let a = await page.clickToLinkMore();
        await page.clickToLocation();
        await page.changeLocation('Париж');
        let b = await page.clickToLinkMore();

        expect(a).toEqual(b);
        console.log(`${a} to equal ${b}`);
        // console.log(`element a is ${a}`);
        // console.log(`element b is ${b}`);
    });

});

