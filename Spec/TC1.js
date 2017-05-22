describe('First POM Project',function(){
	var HomePage=require('../page/homepage.js');
	var CreatePage=require('../page/createpage.js');
	//var element1 = HomePage.isLogoutPresent();
	it('LoginTestCase',function(){
		HomePage.getstarted();
		HomePage.passUsername();
		HomePage.passPassword();
		HomePage.LoginClick();
		expect(element(by.css('[ng-click="logout()"]')).isPresent()).toBe(true);
	});
	
	it('CreateUserTestCase',function(){
		HomePage.getstarted();
		HomePage.passUsername();
		HomePage.passPassword();
		HomePage.LoginClick();
		expect(element(by.css('[ng-click="logout()"]')).isPresent()).toBe(true);
		CreatePage.ClickCreate();
		CreatePage.passFirstname();
		CreatePage.passLastname();
		CreatePage.passStartdate();
		CreatePage.passEmail();
		CreatePage.AddClick();
	});
});