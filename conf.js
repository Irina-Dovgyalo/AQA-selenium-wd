exports.config = {
    framework: 'jasmine',
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
    }
}