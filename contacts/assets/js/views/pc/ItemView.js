define([
'backbone',
'jst/pc'
],
function (Backbone, JST) {
	var ItemView = backbone.View.extend({
		tagName: 'li',
		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			this.lintenTo(this.model, 'remove', this.remove);
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
