$(function(){
    var router = new App.Routers.Main();
    Backbone.history.start({pushState : true, root:"/IBM_Backbone/"});
})
