var HTMLReport = require('protractor-html-reporter'); //
var jasmineReporters = require('jasmine-reporters');

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
    //----jasmine2-protractor-utils-------
    plugins: [{
      package: 'jasmine2-protractor-utils',
      disableHTMLReport: true,
      disableScreenshot: false,
      screenshotPath:'./screenshots',
      screenshotOnExpectFailure:false,
      screenshotOnSpecFailure:true,
      clearFoldersBeforeTest: true
    }],
    //----jasmine-allure-reporter-----
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
      //------protractor-html-reporter----
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './',
        filePrefix: 'xmlresults'
    }));
    },
    //------protractor-html-reporter----
    onComplete: function() {
      var browserName, browserVersion;
      var capsPromise = browser.getCapabilities();
  
      capsPromise.then(function (caps) {
         browserName = caps.get('browserName');
         browserVersion = caps.get('version');
  
         var HTMLReport = require('protractor-html-reporter');
  
         testConfig = {
             reportTitle: 'Test Execution Report',
             outputPath: './',
             screenshotPath: './screenshots',
             testBrowser: browserName,
             browserVersion: browserVersion,
             modifiedSuiteName: false,
             screenshotsOnlyOnFailure: true
         };
         new HTMLReport().from('xmlresults.xml', testConfig);
     });
  }
}