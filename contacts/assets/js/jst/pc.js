define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["pc/app"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="header">\n<h1>CONTACT</h1>\n</div>\n<div id="content">\n<div id="sidebar" class="clearfix">\n<div id="sidebar-header">\n<a href="#new" class="new">New Contact</a>\n</div>\n<div id="sidebar-content">\n<div id="contactlist">\n</div>\n</div>\n<div id="main">\n</div>\n</div>';

}
return __p
};

this["JST"]["pc/item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a href="#' +
((__t = ( source.id )) == null ? '' : __t) +
'">\n<img src="http://www.gravatar.com/avatar/' +
((__t = ( source.hash )) == null ? '' : __t) +
'"\nclass="thumbnail"/>\n<h3>' +
((__t = ( source.name )) == null ? '' : __t) +
'</h3>\n';
 if (source.email) { ;
__p += '<p>' +
((__t = ( source.email )) == null ? '' : __t) +
'</p>';
 } ;
__p += '\n';
 if (source.phone) { ;
__p += '<p>' +
((__t = ( source.phone )) == null ? '' : __t) +
'</p>';
 } ;
__p += '\n</a>';

}
return __p
};

  return this["JST"];

});