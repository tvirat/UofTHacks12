const Marker = new window.google.maps.marker.AdvancedMarkerElement({
    map,
    position: { lat: 37.4239163, lng: -122.0947209 }, //Toronto
});

export default Marker;

  //Add pins to the map
  //pins.forEach((pin) => {
    //new window.google.maps.marker.AdvancedMarkerElement({
      //position: { lat: pin.latitude, lng: pin.longitude },
      //map: map,
      //title: pin.description, // Tooltip when hovering over the marker
      //content: pin.description,
      //gmpClickable:true,
    //});

    //map.addListener("center_changed", () => { 
      //window.setTimeout(() => { 
        //map.panTo(marker.position);
      //}, 3000);
    //});
    
    //marker.addListener("click", ({ domEvent, latLng }) => {
      //const { target } = domEvent;
  
      //map.setZoom(8);
      //map.setCenter(marker.position);
  
      //window.google.maps.infoWindow.close();
      //window.google.maps.infoWindow.setContent(marker.title);
      //window.google.maps.infoWindow.open(marker.map, marker);
    //});
    
  //});