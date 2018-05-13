require('./create_page.js');
require('./edit_page.js');
var employeelist_page=function(){
	this.greetingText=function(){
		return element(by.id('greetings')).getText();
	};
	this.clickCreateButton=function(){
		element(by.id('bAdd')).click();
		return require('./create_page.js');
	};
	this.clickEditButton=function(){
		element(by.id('bEdit')).click();
		return require('./edit_page.js');
	};
	this.clickDeleteButton=function(){
		element(by.id('bDelete')).click();
	};
	this.getEmployee=function(empname){
		//return element(by.cssContainingText("#employee-list > li", empname));
		return element(by.xpath("//ul[@id='employee-list']/li[contains(text(),'" + empname + "')]"));
		
	};
	this.getEmployeeName=function(empname){
		//return element(by.cssContainingText("#employee-list > li", empname));
		return element(by.xpath("//ul[@id='employee-list']/li[contains(text(),'" + empname + "')]")).getText();
		
	};
	//this.clickEmployeeName=function(){
		//element(by.xpath('//ul[@id="employee-list"]/li[contains(text(),"Vladimir Putin")]')).click();
	//	getEmployee().click();
	//};
	
};
module.exports=new employeelist_page();