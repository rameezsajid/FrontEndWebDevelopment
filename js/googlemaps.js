// this script gets the google maps api and gives the location a pointer 
// function to get map in the correct location and add pointer whilst controlling zoom
function initMap() {
 // get location
 var point = {
  lat: 52.62978,
  lng: -1.1415587
 };
 // get element my-map from contact page
 var map = new google.maps.Map(document.getElementById('my-map'), {
  // this controls the zoom, the higher the number the more zoomed in the map will be 
  zoom: 12,
  center: point
 });
 // this adds a marker to the map 
 var marker = new google.maps.Marker({
  position: point,
  map: map
 });
}