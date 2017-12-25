// this script is used to help the website give a scroll effect 
// and to help the user go back to top of page when a link is clicked

var Ymargin = 0;
var destination = 0;
var speed = 10; // speed in which scroll will travel
var scrolling = null;
var distance = 20; // distance the scroll wll travel

// function for scrolling when button is clicked
function initScroll(elementId){
	destination = document.getElementById(elementId).offsetTop;
	
	scrolling = setTimeout(function(){
		initScroll(elementId);
	}, 1);

	Ymargin = Ymargin + speed;

	if(Ymargin >= destination){
		clearTimeout(scrolling);
	}	

	window.scroll(0, Ymargin);

}

window.onscroll = function(){
	Ymargin = this.pageYOffset;	
};

// function to take user back to top of page when link clicked 
function resetScroller(el){
	var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	if(currentY > targetY){
		Ymargin = currentY-distance;
		window.scroll(0, Ymargin);
	} else {
		clearTimeout(animator);
	}
}