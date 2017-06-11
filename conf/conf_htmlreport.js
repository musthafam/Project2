var HtmlReporter = require('C:/Users/ai/AppData/Roaming/npm/node_modules/protractor-html-screenshot-reporter');
var reporter=new HtmlReporter({
    baseDirectory: '../protractor-result', // a location to store screen shots.
    docTitle: 'Protractor Demo Reporter',
    docName:    'protractor-demo-tests-report.html'
});
exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['../Spec/TC1.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
    }
};