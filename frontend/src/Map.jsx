"use client";

import { useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";

export default function MapSetup() {

    const position = { lat: 53.54, lng: 10 };
    const [open, setOpen] = useState(false);
    const snazzyMapStyle = [
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#f49f53"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f9ddc5"
                },
                {
                    "lightness": "-7"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#645c20"
                },
                {
                    "lightness": "38"
                }
            ]
        },
        {
            "featureType": "poi.government",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#9e5916"
                },
                {
                    "lightness": "46"
                },
                {
                    "gamma": "1"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#813033"
                },
                {
                    "saturation": "0"
                },
                {
                    "lightness": "38"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#645c20"
                },
                {
                    "saturation": "0"
                },
                {
                    "lightness": "39"
                },
                {
                    "gamma": "1.00"
                }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#a95521"
                },
                {
                    "lightness": "35"
                }
            ]
        },
        {
            "featureType": "poi.sports_complex",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#9e5916"
                },
                {
                    "saturation": "0"
                },
                {
                    "lightness": "32"
                },
                {
                    "gamma": "1.00"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "saturation": "0"
                },
                {
                    "lightness": "43"
                },
                {
                    "gamma": "1.00"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#f19f53"
                },
                {
                    "saturation": "0"
                },
                {
                    "lightness": "16"
                },
                {
                    "gamma": "1.00"
                },
                {
                    "weight": "1.30"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#f19f53"
                },
                {
                    "saturation": "0"
                },
                {
                    "lightness": "-10"
                },
                {
                    "gamma": "1.00"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "38"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "saturation": "0"
                },
                {
                    "lightness": "43"
                },
                {
                    "gamma": "1.00"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#1994bf"
                },
                {
                    "saturation": "-69"
                },
                {
                    "lightness": "43"
                },
                {
                    "gamma": "0.99"
                }
            ]
        }
    ];

    const mapOptions = {
        styles: snazzyMapStyle,
        gestureHandling: "auto",
        scrollwheel: true,
        zoomControl: true,
        mapTypeControl: false
    };

    return (
        <APIProvider apiKey={"AIzaSyA2dcOrY0N80JXxMyCvkTC4LutaC21w5VE"}>
            <div style={{height: "100vh", width: "100vw"}}>
                <Map
                     mapId={"ef577be4298356b7"}
                     options={mapOptions}
                >
                    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                    <Pin
                        background={"black"}
                        borderColor={"black"}
                        glyphColor={"white"}
                    />
                    </AdvancedMarker>
                    {open && (<InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                        <p style={{color: "black"}}>I visited Hamburg bla bla bla...</p>
                    </InfoWindow>)}
                </Map>
            </div>
        </APIProvider>
    );
}