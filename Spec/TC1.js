describe('First POM Project',function(){
	var HomePage=require('../page/page.js');
	var element1 = HomePage.isLogoutPresent();
	it('First TC',function(){
		HomePage.getstarted();
		HomePage.passUsername();
		HomePage.passPassword();
		HomePage.LoginClick();
		expect(element(by.css('[ng-click="logout()"]')).isPresent()).toBe(true);
	});
});