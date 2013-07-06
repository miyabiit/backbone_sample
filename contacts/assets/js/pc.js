require([
	'jquery',
	'backbone',
	'collections/ContractList',
	'views/pc/AppView',
	'routers/pc'
],
function($, ContactList, AppView, Router){
	var router = new Router();
	var contactlist = new ContactList();
	contactlist.fetch();
	var appview = new AppView({
		router: router,
		collection: contactlist
	});
	$(function () {
		$('body').append(appview.render().el);
		Backbone.history.start();
	});
});

