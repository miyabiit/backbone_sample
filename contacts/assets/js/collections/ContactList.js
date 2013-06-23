define([
'backbone',
'backbone.localStorage',
'models/Contact'
], function (Backbone, LocalStorage, Contact) {
	var ContactList = Backbone.Collection.extend({
		model: Contact,
		localStorage: new LocalStorage('contact'),
		comparator: function (contact) { return contact.index(); }
	});
	return ContactList;
});
