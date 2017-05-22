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