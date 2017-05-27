var CreatePage = function(){
var create=element(by.id('bAdd'));
var edit=element(by.id('bEdit'));
var del=element(by.id('bDelete'));
var cancel=element(by.css('[ng-click="browseToOverview()"]'));
var firstname=element(by.model('selectedEmployee.firstName'));
var lastname=element(by.model('selectedEmployee.lastName'));
var startdate=element(by.model('selectedEmployee.startDate'));
var Email=element(by.model('selectedEmployee.email'));
var AddButton=element(by.buttonText('Add'));
var emplist=element.all(by.repeater("employee in employees"));
var CreateData = require('../TestData/Data.json');


this.ClickCreate = function(){
	create.click();
	
}

this.passFirstname = function(){
	firstname.sendKeys(CreateData[1].firstname);
	
}

this.passLastname = function(){
	lastname.sendKeys(CreateData[1].lastname);
	
}

this.passStartdate = function(){
	startdate.sendKeys(CreateData[1].startdate);
	
}

this.passEmail = function(){
	Email.sendKeys(CreateData[1].email);
	
}

this.AddClick=function(){
	AddButton.click();
}

this.ClickEmp=function(value){
	emplist.get(value).click();
}

this.EmpCountlist=function(){
	emplist.count().then(function(count) {
	console.log(count);
	});
}

};
module.exports = new CreatePage();