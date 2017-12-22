// get elements and set variables
// get model
var modal = document.getElementById('simple-modal');

//get open modal button

var modalBtn = document.getElementById('modal-btn');

// get close button 

var closeBtn = document.getElementsByClassName('close')[0];

// check click for openening modal
modalBtn.addEventListener('click', openModal);

// check click for closing modal
closeBtn.addEventListener('click', closeModal);

// checks for click outside the window 
window.addEventListener('click', clickOutside);

// function to open modal
function openModal(){
	modal.style.display = 'block';
}

// function to close modal
function closeModal(){
	modal.style.display = 'none';
}

// function to close modal when click outside window
function clickOutside(e){
	if(e.target == modal){
		modal.style.display='none';
	}
}

