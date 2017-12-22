// I have a wrote a script to help give my website a smooth scroll effect when a button is clicked
// I have targeted the anchor tags and gave each section in the html a id 

(function(window, undefined) {
 var height = 0;
 // higher number makes scroll more smooth
 var frequency = 15;
 //speed the scroll will travel
 var speed = 700;
 // gets the a tags elements in html 
 var a_tags = document.getElementsByTagName('a');
 var href;
 for (var i = 0; i < a_tags.length; i++) {
  href = (a_tags[i].attributes.href === undefined) ? null : a_tags[i].attributes.href.nodeValue.toString();
  if (href !== null && href.length > 1 && href.indexOf('#') != -1) {
   a_tags[i].onclick = function() {
    var element,
     href = this.attributes.href.nodeValue.toString(),
     url = href.substr(0, href.indexOf('#')),
     id = href.substr(href.indexOf('#') + 1);
    if (element = document.getElementById(id)) {
     var count = (speed - (speed % frequency)) / frequency,
      getScrollTopDocumentAtBegin = getScrollTopDocument(),
      gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / count;
     if (window.history && typeof window.history.pushState == 'function')
      for (var i = 1; i <= count; i++) {
       (function() {
        var position = gap * i;
        setTimeout(function() {
         window.scrollTo(0, position + getScrollTopDocumentAtBegin);
        }, frequency * i);
       })();
      }
     return false;
    }
   };
  }
 }

 var getScrollTopElement = function(e) {
  var top = height * -1;
  while (e.offsetParent != undefined && e.offsetParent != null) {
   top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
   e = e.offsetParent;
  }
  return top;
 };

 var getScrollTopDocument = function() {
  return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop !== undefined ? document.documentElement.scrollTop :
   document.body.scrollTop;
 };
})(window);