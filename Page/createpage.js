var CreatePage = function(){
var create=element(by.id('bAdd'));
var edit=element(by.id('bEdit'));
var delete=element(by.id('bDelete'));
var cancel=element(by.css('[ng-click="browseToOverview()"]'));
var firstname=element(by.model('selectedEmployee.firstName'));
var lastname=element(by.model('selectedEmployee.lastName'));
var startdate
};
module.exports = new CreatePage();