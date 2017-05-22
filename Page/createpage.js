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


this.ClickCreate = function(){
	create.click();
	
}

this.passFirstname = function(){
	firstname.sendKeys('Fname');
	
}

this.passLastname = function(){
	lastname.sendKeys('Lanme');
	
}

this.passStartdate = function(){
	startdate.sendKeys('2017-05-22');
	
}

this.passEmail = function(){
	Email.sendKeys('test@protractor.com');
	
}

this.AddClick=function(){
	AddButton.click();
}

};
module.exports = new CreatePage();