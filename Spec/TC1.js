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
	
	it('CreateUserTestCase',function(){
		HomePage.getstarted();
		HomePage.passUsername();
		HomePage.passPassword();
		HomePage.LoginClick();
		expect(element(by.css('[ng-click="logout()"]')).isPresent()).toBe(true);
		CreatePage.EmpCountlist();
		CreatePage.ClickCreate();
		CreatePage.passFirstname();
		CreatePage.passLastname();
		CreatePage.passStartdate();
		CreatePage.passEmail();
		CreatePage.AddClick();
		browser.driver.sleep(3000);
		CreatePage.EmpCountlist();
	});
	
	xit('EditUserTestCase',function(){
		HomePage.getstarted();
		HomePage.passUsername();
		HomePage.passPassword();
		HomePage.LoginClick();
		expect(element(by.css('[ng-click="logout()"]')).isPresent()).toBe(true);
		CreatePage.ClickEmp(5);
		browser.driver.sleep(3000);
	});
});