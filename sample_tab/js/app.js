//
var TabView = Backbone.View.extend({
	btnTemplate: _.template($('#ui-tab-btn-template').html()),
	contentTemplate: _.template($('#ui-tab-content-template').html()),

	initialize: function (options) {
		this.$container = $('#ui-tab');
		this.$btn_container = this.$container.find('.nav-tabs');
		this.$contents_container = this.$container.find('.tab-contents');
		this.name = this.options.name;
	},

	render: function () {
		this.$btn = $(this.btnTemplate(this.options.data));
		this.$content = $(this.contentTemplate(this.options.data));
		this.$btn_container.append(this.$btn);
		this.$contents_container.append(this.$content);
	},

	activate: function () {
		this.$btn.addClass('active');
		this.$content.addClass('active');
	},

	deactivate: function () {
		this.$btn.removeClass('active');
		this.$content.removeClass('active');
	}
});

var TabApp = _.extend(Backbone.Events, {
	views : [],
	tab_names : [],
	wasRendered : false,

	initialize : function (data) {
		var self = this;
		_.each(data, function(_data) {
			var tabView = new TabView({ data: _data});

			tabView.listenTo(this, 'change', function (name) {
				if(tabView.name === name) {
					tabView.activate();
				}else{
					tabView.deactivate();
				}
			});

			self.views.push(tabView);
			self.tab_names.push(_data.name);
		});

		return this;
	},

	renderAll: function (callback) {
		if (!this.wasRendered) {
			this.wasRendered = true;

			_.each(this.views, function (view) {
				view.render();
			});

			if (callback) callback();
		}
	},

	changeTo: function (name) {
		if (_.indexOf(this.tab_names, name) >= 0) {
			this.trigger('change', name);
		}
	}
});

var TabRouter = Backbone.Router.extend({
		this.options = options;
		this.app = TabApp.initialize(this.options.data);
	},
	routes: {
		'*tab': 'defaultAction'
	},
	defaultAction: function(tab) {
		var self = this;
		this.app.render(function() {
			self.navigate(self.options.data[0].name, { trigger: true });
		});
		if (tab.length) {
			this.app.changeTo(tab);
		}	
	}
});
