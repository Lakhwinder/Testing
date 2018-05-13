//require('../pages/employeelist_page.js');
require('./employeelist_page.js');
var login_page = function() {
	this.checkLoginFormPresence=function(){
		return element(by.id(browser.params.emplogin_url)).isPresent();
	};
	this.enterUsername=function(username_value){
		element(by.model('user.name')).sendKeys(username_value);
	};
	this.enterPassword=function(password_value){
		element(by.model('user.password')).sendKeys(password_value);
	};
	this.clickLoginButton=function(){
		element(by.css('button')).click();
		return require('./employeelist_page.js');
	};
	

};
module.exports=new login_page();
