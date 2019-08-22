this.takeScreenShot = function(screenshotName = 'Screenshot', done = undefined){

    return (browser).takeScreenshot()
        .then((png) => allure.createAttachment(screenshotName,
                () => new Buffer(png, 'base64'),
                'image/png')())
        .then(() => {
            if (done) {
                done();
            }
        });
};

module.exports = this.takeScreenShot;