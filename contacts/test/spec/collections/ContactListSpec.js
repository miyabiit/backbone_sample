define([
'collections/ContactList'
], function (ContactList) {
	describe('ContactList', function () {
		it('sort by name', function () {
			var contactlist = new ContactList();
			contactlist.set([
				{name: 'bcd'}, {name: 'ACD'}, {name: 'abc'}
			]);
			expect(contactlist.pluck('name')).toEqual(['abc', 'ACD', 'bcd']);
		});
	});
});
