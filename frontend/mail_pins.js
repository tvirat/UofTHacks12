// Create Google Map pin with functionality (zooming in & description)
function initMap(latitude, longitude, title) {
  const location = { lat: latitude, lng: longitude };
  const map = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA2dcOrY0N80JXxMyCvkTC4LutaC21w5VE";

  const marker = new google.maps.marker.AdvancedMarkerElement({
    position: location,
    map,
    title: `${title}`,
    content: pin.element,
    gmpClickable:true,
  });

  map.addListener("center_changed", () => {
    window.setTimeout(() => {
      map.panTo(marker.position);
    }, 3000);
  });

  marker.addListener("click", ({ domEvent, latLng }) => {
    const { target } = domEvent;

    map.setZoom(8);
    map.setCenter(marker.position);

    infoWindow.close();
    infoWindow.setContent(marker.title);
    infoWindow.open(marker.map, marker);
  });
}