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
		CreatePage.PrintEmpCountlist();
		var emplistBeforecreation = CreatePage.EmpCountlist();
		CreatePage.ClickCreate();
		CreatePage.passFirstname();
		CreatePage.passLastname();
		CreatePage.passStartdate();
		CreatePage.passEmail();
		CreatePage.AddClick();
		browser.driver.sleep(3000);
		CreatePage.PrintEmpCountlist();
		var emplistAftercreation = CreatePage.EmpCountlist();
		expect(parseInt(emplistAftercreation)-parseInt(emplistBeforecreation)).toEqual(1);
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