// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['../test/*_spec.js'],
	specs: ['../test/*_test.js'],
  // Options to be passed to Jasmine.
	params:
  {
	  url:'http://cafetownsend-angular-rails.herokuapp.com/login',
	  username:'Luke',
	  password: 'Skywalker',
	  empfirstname:'Master',
	  emplastname:'Shifu',
	  empstartdate:'2018-01-31',
	  empemail:'master@master.com',
	  searchempname: 'Vladimir Putin',
	  //Below is the info to be updated in employee record
	  updatedemail:'master.updated@master.com',
	  //URL substrings
	  emplist_url:'employees',
	  empcreate_url:'new',
	  empedit_url:'edit',
	  emplogin_url:'login-form'
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
 //module.exports = {
  
 
