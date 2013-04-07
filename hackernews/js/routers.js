App.Routers.Main = Backbone.Router.extend({
	routes: {
		"": "index",
		"foo/:test": "bar"
	},

	index: function(){
		console.log("index");
	},
	
	bar: function(test){
		console.log(test);
		alert(test);
	}

});
