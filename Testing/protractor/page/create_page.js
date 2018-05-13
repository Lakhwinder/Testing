require('./employeelist_page.js');
var create_page = function() {
	this.enterFirstName=function(firstname){
		element(by.model('selectedEmployee.firstName')).sendKeys(firstname);
	};
	this.enterLastName=function(lastname){
		element(by.model('selectedEmployee.lastName')).sendKeys(lastname);
	};
	this.enterStartDate=function(startdate){
		element(by.model('selectedEmployee.startDate')).sendKeys(startdate);
	};
	this.enterEmail=function(email){
		element(by.model('selectedEmployee.email')).sendKeys(email);
	};
	this.clickAdd=function(email){
		element(by.buttonText('Add')).click();
		return require('./employeelist_page.js');
	};
	

};
module.exports=new create_page();


	