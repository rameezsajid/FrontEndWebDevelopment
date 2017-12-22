// get modal
var modal = document.getElementById('my-modal');

// setting variables
const msg = new SpeechSynthesisUtterance();
let voices = [];
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

// close button event listener 
closeBtn.addEventListener('click', closeModal);


//function to start speech
function toggle(startSpeech = true) {
 speechSynthesis.cancel();
 if (startSpeech) {
  speechSynthesis.speak(msg);
 }
}

// checking if buttons clicked
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));

// event listener checking for click
window.addEventListener('click', clickOutside);

// function to check if clicked outside modal and if so stop speech 
function clickOutside(e) {
 if (e.target == modal) {
  toggle(false);
 }
}

// function to check if close modal clicked and if so stop speech
function closeModal() {
 toggle(false);
}