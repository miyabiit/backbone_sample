define([
'backbone'
], function (Backbone) {
	return Backbone.Model.extend({
		index: function () {
			return this.get('name').toUpperCase();
		},
		toEscapedJSON: function () {
			var data = this.toJSON();
			_.each(data, function (value, name) {
				data[name] = _.escape(value);
			});
			return data;
		},
		validate: function (attrs) {
			var model, errors = {};
			if(!attrs.name) errors.name = "name must be !";
			if(attr.email) {
				if (!/[^\s@]+@\S+\.\S+/.test(attrs.email)) {
					errors.email = "format is irregal!";
				}else{
					model = this.collection.findWhere({email: atrs.email});
					if(model && model.id !== this.id)
						errors.email = "this email already used";
				}
			}
			return _.isEmpty(errors) ? null : errors;	
		}
	});
});
