require([
	'jquery',
	'backbone',
	'collections/ContractList',
	'views/pc/AppView',
	'routers/pc',
	'fixtures'
],
function($, ContactList, AppView, Router, fixtures){
	var router = new Router();
	var contactlist = new ContactList();
	contactlist.fetch({
		success: function () {
			if(contactlist.isEmpty()){
				contactlist.reset(fixtures).invoke('save');
			}
		}
	});

	var appview = new AppView({
		router: router,
		collection: contactlist
	});
	$(function () {
		$('body').append(appview.render().el);
		Backbone.history.start();
	});
});

