import React, { useEffect, useRef } from "react";
//import initPin from '../mail_pins.js';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const retroStyle = [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#c9b2a6" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ color: "#dcd2be" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f5f1e6" }],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#b9d3c2" }],
      },
    ];

    const mapOptions = {
      center: { lat: 43.6532, lng: -79.3832 }, // Toronto
      zoom: 10,
      minZoom: 5,
      maxZoom: 15,
      styles: retroStyle,
      gestureHandling: "auto", // Allow dragging/panning
      scrollwheel: true, // Allow scroll zoom
    };

    // Initialize the map
    let map;
    if (mapRef.current) {
      new window.google.maps.Map(mapRef.current, mapOptions);
    }

    // Add pins to the map
    pins.forEach((pin) => {
      new window.google.maps.marker.AdvancedMarkerElement({
        position: { lat: pin.latitude, lng: pin.longitude },
        map: map,
        title: pin.description, // Tooltip when hovering over the marker
        //content: pin.element,
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
      
    });

  }, [pins]); // Dependency array ensures pins are updated when changed

  return (
    <div ref={mapRef} style={{ height: "100vh", width: "100%", }}></div>
    
  );
};

export default Map;