require({
	baseUrl: '/assets/js',
	paths: {
		'jquery' : 'vendor/jquery-1.8.3',
		'jquery.mobile' : 'vendor/jquery.mobile-1.3.0',
		'underscore'	: 'vendor/underscore-1.4.3',
		'backbone'	: 'vendor/backbone-0.9.10',
		'backbone.localStorage'	: 'vendor/backbone.localStorage-1.1.0',
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
