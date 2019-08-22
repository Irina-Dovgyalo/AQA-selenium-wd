
exports.config = {
    framework: 'jasmine2',
    directConnect:true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/spec.js'],
    capabilities: {
      browserName: 'chrome'
    },
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 100000,
      isVerbose: true
    },
    onPrepare: function() {
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter());
      jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')();
          done();
        })
      });
    }
}