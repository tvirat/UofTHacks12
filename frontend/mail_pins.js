// Create Google Map pin
function initMap(latitude, longitude, place) {
  const location = { lat: latitude, lng: longitude };
  const map = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA2dcOrY0N80JXxMyCvkTC4LutaC21w5VE";

  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: location,
    title: place,
  });
}
window.initMap = initMap;