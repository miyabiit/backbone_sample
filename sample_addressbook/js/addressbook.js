$(function () {
	//Models
	var Address = Backbone.Model.extend({
		defaults: {
			name: ''
		},
		initialize: function () {
				if(!this.get('name')) {
					this.set({name: this.defaults.name});
				}
		},
		validate: function(attributes){
			var name = attributes.name;
			if(!name || name === this.defaults.name){
				return 'Error!';
			}
		}
	});

	//Collections
	var AddressCollection = Backbone.Collection.extend({
		model: Address,
		localStorage: new Store('addressbook-sample')
	});
	var Addresses = new AddressCollection();

	//view
	var AddressView = Backbone.View.extend({
		tagName: 'li',
		className: 'address-item',
		events: {
			'dblclick label.name': 'rename',
			'click button.delete': 'clear'
		},
		initialize: function () {
			this.model.bind('change', this.render, this);
			this.model.bind('destroy', this.remove, this);
		},
		render: function () {
			$(this.el).html(
				$('<label class="name">')
					.text(this.model.get('name')
				)
			).append('<button class="delete">Delete</button>');
			return this;
		},
		rename: function () {
			var newName = window.prompt('Enter new name.',
				this.model.get('name'));
			console.log(newName);
			this.model.save('name', newName);
		},
		clear: function () {
			this.model.destroy();
		}
	});

	// AppView
	var AppView = Backbone.View.extend({
		el: $('#app'),
		events: {
			'keypress #new-address': 'keyPress',
			'click #delete-all': 'deleteAll'
		},
		initialize: function () {
			this.input = this.$('#new-address');
			Addresses.bind('add', this.add, this);
			Addresses.bind('reset', this.addAll, this);
			Addresses.fetch();
		},
		add: function (address) {
			var view = new AddressView({model: address});
			this.$('#list').append(view.render().el);
		},
		addAll: function () {
			Addresses.each(this.add);
		},
		keyPress: function (e) {
			if(e.keyCode === 13) {
				Addresses.create({name: this.input.val()});
				this.input.val('');
			}
		},
		deleteAll: function (e) {
			var address;
			while (address = Addresses.first()) {
				address.destroy();
			}
		}
	});
	var App = new AppView();
});