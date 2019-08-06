// exports.config = {
//   framework: 'jasmine',
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   specs: ['spec.js'],
//   allScriptsTimeout: 20000,
//   jasmineNodeOpts: {
//     showColors: true,
//     defaultTimeoutInterval: 100000,
//     isVerbose: true
//   },
//   multiCapabilities: [{
//     browserName: 'firefox'
//   }, 
//   {
//     browserName: 'chrome'
//   },
//   {
//     browserName: 'internet explorer'
//   }]
// }

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  allScriptsTimeout: 20000,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
    isVerbose: true
  },
  capabilities: {
    browserName: 'chrome'
  }
}



  