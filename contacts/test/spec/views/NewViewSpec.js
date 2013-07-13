define([
	'underscore',
	'models/Contact',
	'collections/ContactList',
	'views/pc/NewView'
	],
function (_, Contact, ContactList, NewView) {

	describe('pc/NewView', function () {
		var contact, contactlist, newview;

		beforeEach(function () {
			cantactlist = new ContactList();
			contact = new Contact(null, {collection: contactlist});
		});

		afterEach(function () {
			newview.remove();
			contact.destroy();
			contactlist.reset();
		});
	});
});
