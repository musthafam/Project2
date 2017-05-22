var HomePage = function(){
var username= element(by.model('user.name'));
var password= element(by.model('user.password'));
var Login=element(by.buttonText('Login'));
var Logout=element(by.css('[ng-click="logout()"]'));
var loginData = require('../TestData/Data.json');
this.getstarted = function(){
browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
}

this.passUsername = function(){
	username.sendKeys(loginData[0].username);
	
}

this.passPassword = function(){
	password.sendKeys(loginData[0].passwordField);
	
}

this.LoginClick=function(){
	Login.click();
}

this.isLogoutPresent=function()
{
	return element(Logout);
}
};
module.exports = new HomePage();