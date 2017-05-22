describe('First POM Project',function(){
	var HomePage=require('../page/homepage.js');
	var CreatePage=require('../page/createpage.js');
	//var element1 = HomePage.isLogoutPresent();
	xit('LoginTestCase',function(){
		HomePage.getstarted();
		HomePage.passUsername();
		HomePage.passPassword();
		HomePage.LoginClick();
		expect(element(by.css('[ng-click="logout()"]')).isPresent()).toBe(true);
	});
	
	xit('CreateUserTestCase',function(){
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
	
	it('EditUserTestCase',function(){
		HomePage.getstarted();
		HomePage.passUsername();
		HomePage.passPassword();
		HomePage.LoginClick();
		expect(element(by.css('[ng-click="logout()"]')).isPresent()).toBe(true);
		CreatePage.ClickEmp();
		browser.driver.sleep(3000);
	});
});