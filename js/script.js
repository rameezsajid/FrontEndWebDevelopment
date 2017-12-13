function myFunction() {
 document.getElementById("my-navbar").classList.toggle("show");
}

// this script opens the dropdown menu 
// it also closes the dropdown menu when a link is clicked on or when clicking outside the menu

window.onclick = function(event) {
 if (!event.target.matches('.dropdown-button')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
   var openDropdown = dropdowns[i];
   if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
   }
  }
 }
}