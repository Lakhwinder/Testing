describe('Tests to perform on CafeTownsend: ', function() {
  beforeEach(function(){
	  //browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
	   browser.get(browser.params.url);
  });
  var login_page=require('../page/login_page.js');
  
  it('Should take the user to login page', function() {
    var isPresent=login_page.checkLoginFormPresence();
	expect(isPresent).toBe(true).then(function(){
		console.log('Login page URL TEST:--------------Login page displayed. Test plass.-------------------------');
	});
  });
  
  
   it('Login should be successful', function() {
	login_page.enterUsername(browser.params.username);
	login_page.enterPassword(browser.params.password);
	login_page.clickLoginButton();
	expect(browser.getCurrentUrl()).toContain(browser.params.emplist_url).then(function(){
		console.log('LOGIN TEST:--------------Login successful. Test plass.-------------------------');
	});
  });
  
  
    it('Create new employee', function() {
	login_page.enterUsername(browser.params.username);
	login_page.enterPassword(browser.params.password);
	var employeelist_page=login_page.clickLoginButton();
	var greetings=employeelist_page.greetingText();
	expect(greetings).toContain('Hello').then(function() {
		console.log(greetings);
	});
	var create_page=employeelist_page.clickCreateButton();
	expect(browser.getCurrentUrl()).toContain('new');
	//expect(browser.getCurrentUrl()).toEqual("http://cafetownsend-angular-rails.herokuapp.com/employees/new");
	create_page.enterFirstName(browser.params.empfirstname);
	create_page.enterLastName(browser.params.emplastname);
	create_page.enterStartDate(browser.params.empstartdate);
	create_page.enterEmail(browser.params.empemail);
	var employeelist_page=create_page.clickAdd();
	//element(by.buttonText('Add')).click();
	var empName=employeelist_page.getEmployeeName(browser.params.searchempname);
	//var employee=element(by.xpath('//ul[@id="employee-list"]/li[contains(text(),"Master Shifu")]'));
	expect(empName).toContain(browser.params.empfirstname).then(function(){
	console.log('TEST PASS [CREATE EMPLOYEE]: Employee search successful. Employee found: '+ browser.params.searchempname);
	});
	
  });
  
  
  
  it('Edit employee details', function() {
	login_page.enterUsername(browser.params.username);
	login_page.enterPassword(browser.params.password);
	var employeelist_page=login_page.clickLoginButton();
	var greetings=employeelist_page.greetingText();
	expect(greetings).toContain('Hello');
	var empName=employeelist_page.getEmployeeName(browser.params.searchempname);
	empName.getText().then(function(text){
		console.log('Empoyee record to be edited, found: '+text);
	});
	//var e=empName.then((text) => { return text;});
	employeelist_page.getEmployee(browser.params.searchempname).click();
	var edit_page=employeelist_page.clickEditButton();
	//element(by.id('bEdit')).click();
	expect(browser.getCurrentUrl()).toContain(browser.params.empedit_url);
	edit_page.updateEmail(browser.params.updatedemail);
	edit_page.clickUpdate();
	//element(by.buttonText('Update')).click();
  });
  
	xit('Delete Employee', function() {
	login_page.enterUsername(browser.params.username);
	login_page.enterPassword(browser.params.password);
	var employeelist_page=login_page.clickLoginButton();
	var greetings=employeelist_page.greetingText();
	expect(greetings).toContain('Hello');
	var empName=employeelist_page.getEmployeeName('Master Shifu');
	empName.getText().then(function(text){
		console.log('Empoyee record to be deleted, found: '+text);
	});
	employeelist_page.getEmployee('Master Shifu').click();
	//element(by.id('bDelete')).click();
	employeelist_page.clickDeleteButton();
	//browser.switchTo().alert().accept();
	var EC = protractor.ExpectedConditions;
	browser.wait(EC.alertIsPresent(), 5000, "Alert is not getting present :(")
	browser.switchTo().alert().accept();
  });
  });