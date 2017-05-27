//Config file
exports.config={
directConnect:true,
capabilities:{
	browserName:'chrome'
},
framework:'jasmine',
specs:['../Spec/TC1.js'],
jasmineNodeOpts: {
	  showColours: true ,
    defaultTimeoutInterval: 30000
  }
}

/**********Firefox Config**************

exports.config={
directConnect:false,
capabilities:{

//"firefox_binary": "C:/Program Files (x86)/Mozilla Firefox/firefox.exe",
//"binary_": "C:/Program Files (x86)/Mozilla Firefox/firefox.exe",
'browserName': 'firefox',
 'marionette': true

},
framework:'jasmine',
seleniumAddress: 'http://localhost:4444/wd/hub',
specs:['../Spec/TC1.js'],
jasmineNodeOpts: {
	  showColours: true ,
    defaultTimeoutInterval: 30000
  }
}
***************************************/

/**********Chrome Config**************

exports.config={
directConnect:true,
capabilities:{
	browserName:'chrome'
},
framework:'jasmine',
specs:['../Spec/TC1.js'],
jasmineNodeOpts: {
	  showColours: true ,
    defaultTimeoutInterval: 30000
  }
}
***************************************/

/**************IE Confi***********

exports.config={
directConnect:false,
capabilities:{

'browserName': 'internet explorer'
  //      'platform': 'ANY',
    //    'version': '8'

},
/*localSeleniumStandaloneOpts : {
  jvmArgs : ['-Dwebdriver.ie.driver="C:/Users/ai/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer.exe"'] // e.g: "node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer_x64_X.XX.X.exe"
},*/
/*
framework:'jasmine',
seleniumAddress: 'http://localhost:4444/wd/hub',
specs:['../Spec/TC1.js'],
jasmineNodeOpts: {
	  showColours: true ,
    defaultTimeoutInterval: 30000
  }
}
***************************************/