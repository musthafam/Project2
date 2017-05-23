var HomePage = function(){

var Url = 'http://cafetownsend-angular-rails.herokuapp.com/login';
var username= element(by.model('user.name'));
var password= element(by.model('user.password'));
var Login=element(by.buttonText('Login'));
var Logout=element(by.css('[ng-click="logout()"]'));
var loginData = require('../TestData/Data.json');
this.getstarted = function(){
browser.get(Url);
console.log("Browser launched and URL passed");
}

this.passUsername = function(){
	username.sendKeys(loginData[0].username);
	console.log("Username Entered");
}

this.passPassword = function(){
	password.sendKeys(loginData[0].passwordField);
	console.log("Password Entered");
}

this.LoginClick=function(){
	Login.click();
	console.log("Login Clicked");
}

this.isLogoutPresent=function()
{
	return Logout;
}
};
module.exports = new HomePage();