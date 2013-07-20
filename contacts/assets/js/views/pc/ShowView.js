define([
	'backbone',
	'jst/pc'
],
function (Backbone, JST) {
	var ShowView = Backbone.View.extend({
		events: {
			'click .edit': function (e) {
				e.preventDefault();
				Backbone.history.navigate(this.model.id + '/edit', true);
			}
		},
		render: function () {
			this.$el.html(JST['pc/show']({source: this.presenter()}));
			return this;
		},
		presenter: function () {
			return this.model.toEscapedJSON();
		}
	});
	return ShowView;
});
