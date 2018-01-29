var myDomain = "www.siradhana.com";
var links = document.getElementsByTagName('a');
Array.prototype.forEach.call(links, function (link) {
if ( link.href.indexOf(myDomain) < 0 ) {
link.href += '?utm_source=hitlermarket_blog&utm_medium=referral&utm_campaign=caring';
}
});
