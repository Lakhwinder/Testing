require('./employeelist_page.js');
var edit_page = function() {
	this.updateEmail=function(email){
		element(by.model('selectedEmployee.email')).click();
		element(by.model('selectedEmployee.email')).clear();
		element(by.model('selectedEmployee.email')).sendKeys(email);
	};
		
	this.clickUpdate=function(email){
		element(by.buttonText('Update')).click();
		return require('./employeelist_page.js');
	};
	
};
module.exports=new edit_page();