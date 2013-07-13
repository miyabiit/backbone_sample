define([
'jquery',
'underscore',
'backbone',
'./ListView',
'./NewView',
'models/Contact',
'jst/pc'
], function ($, _, Backbone, ListView, NewView, Contact, JST) {
	return Backbone.View.extend({
		mainview: null, 
		events: {
			'click a.new': 'navigateToNew'
		},
		navigateToNew: function (e) {
			e.preventDefault();
			Backbone.history.navigate('new', true);
		},
		initialize: function () {
			this.listenTo(this.options.router, 'route', this.dispatch);
		},
		dispatch: function (name, args) {
			if(!_.include(['index', 'new', 'show', 'edit'], name)) return;
			if(this.mainview) this.mainview.remove();
			switch(name) {
				case 'new':
					this.newContact();
					break;
			}
		},
		newContact: function () {
			var model = new Contact(null, {collection: this.collection});
			this.mainview = new NewView({model: model});
			this.$('#main').html(this.mainview.render().el);
		},
    render: function () {
      this.$el.html(JST['pc/app']());
      this.listview = new ListView({
        collection: this.collection
      });
      this.$('#contactlist').append(this.listview.render().el);
      return this;
    }
	});
});
