exports.config = {
    framework: 'jasmine',
    directConnect:true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    // SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
      browserName: 'chrome'
    },
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 100000,
      isVerbose: true
    }
  }