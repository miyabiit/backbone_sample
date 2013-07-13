define([
'backbone',
'jst/pc'
], 
function (Backbone, JST) {
	return Backbone.View.extend({
		events: {
			'click .cancel': function () {
				Backbone.history.navigate('', true);
			}
		},
		initialize: function () {
			this.listenTo(this.model, 'invalid', this.renderValidationMessage);
			this.listenTo(this.model, 'sync', function () {
				model.collection.add(model);
				Backbone.history.navigate(model.id, true);
			});
		},
		
		render: function () {
			this.$el.html(JST['pc/new']({source: this.presenter()}));
			this.$('form').on('submit', this.onSubmit);
			return this;
		},

		renderValidationMessage: function (model, errors) {
      var lis = _.map(errors, function (value, name) {
        return '<li><strong>' + name + '</strong> ' + value + '</li>';
      });
      this.$('.alert')
        .show()
        .find('ul').html(lis.join(''));
      return this;
		},

		onSubmit: function (e) {
			e.preventDefault();
			var model = this.model;
			this.model.save(this.getValues());
		},

		presenter: function () {
			return this.model.toEscapedJSON();
		},

		getValues: function () {
			var values = {};
			_.each(this.$('form').serializeArray(), function (obj) {
				values[obj.name] = obj.value;
			});
			return values;
		}
	});
});
