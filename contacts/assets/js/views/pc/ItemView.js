define([
'backbone',
'jst/pc'
],
function (Backbone, JST) {
	return Backbone.View.extend({
		tagName: 'li',
		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'remove', this.remove);
		},
		events: {
			'click a':function (e) {
				e.preventDefault();
				Backbone.history.navigate(this.model.id, true);
			}
		},
		render: function () {
			this.$el.html(JST['pc/item']({source: this.presenter()}));
			return this;
		},
		presenter: function () {
			return this.model.toEscapedJSON();
		}
	});
});
