define([
'jquery',
'underscore',
'backbone',
'./ListView',
'jst/pc'
], function ($, _, Backbone, ListView, JST) {
	var AppView = Backbone.View.extend({
		mainview: null, 
		initialize: function () {
			this.listenTo(this.options.router, 'route', this.dispatch);
		},
		dispatch: function (name, args) {
			if(!_.include(['index', 'new', 'show', 'edit'], name)) return;
			if(this.mainview) this.mainview.remove();
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
	return AppView;
});
