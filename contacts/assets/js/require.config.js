require({
	baseUrl: '/assets/js',
	paths: {
		'jquery' : 'vendor/jquery-1.8.3',
		'jquery.mobile' : 'vendor/jquery.mobile-1.3.0',
		'underscore'	: 'vendor/underscore-1.4.4',
		'backbone'	: 'vendor/backbone-1.0.0',
		'backbone.localStorage'	: 'vendor/backbone.localStorage-1.1.0'
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			exports: 'Backbone',
			deps: ['jquery', 'underscore']
		}
	}
});
