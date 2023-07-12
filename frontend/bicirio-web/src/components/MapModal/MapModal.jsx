import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import defaultMarkerIcon from "../../images/mapMarker.png";
import endMarkerIcon from "../../images/mapMarkerEnd.png";
import startMarkerIcon from "../../images/mapMarkerStart.png";

import { useEffect, useState } from "react";
import Loading from "../general/Loading/Loading";

export default function MapModal({ locationData }) {
  const [markers, setMarkers] = useState([]);
  const [markersLoaded, setMarkersLoaded] = useState(false);
  const [pathMarkers, setPathMarkers] = useState([]);

  useEffect(() => {
    const parsedMarkers = locationData.map((item) => ({
      title: item.timestamp,
      lat: parseFloat(item.latitude),
      lng: parseFloat(item.longitude),
    }));
    const parsedPathMarkers = locationData.map((item) => ({
      lat: parseFloat(item.latitude),
      lng: parseFloat(item.longitude),
    }));
    setPathMarkers(parsedPathMarkers);
    setMarkers(parsedMarkers);
    setMarkersLoaded(true);
  }, [locationData]);

  const onLoad =(event)=>{ 
    console.log(event); 
  }

  const center = {
    lat: 6.150314,
    lng: -75.374108,
  };
  const PolylineOptions = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35, 
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000
  };

  if (!markersLoaded) {
    return <Loading />;
  } else {
    return (
      <div className="map-modal-background">
        <div
          className="modal-content"
          style={{ height: "400px", width: "100%" }}
        >
          <LoadScript googleMapsApiKey="AIzaSyDpVxmkHARFpN4E18So3tUeZ0tNR0zXdD8">
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={12}
            >
              <Polyline path={pathMarkers} options={PolylineOptions} onLoad={onLoad}/>
              {markers.map((marker, index) => {
                let markerIcon = startMarkerIcon;
                if (index === 0) {
                  markerIcon = startMarkerIcon;
                } else if (index === markers.length - 1) {
                  markerIcon = endMarkerIcon;
                } else {
                  markerIcon = defaultMarkerIcon;
                }
                return (
                  <Marker
                    key={index}
                    position={marker}
                    title={marker.title}
                    icon={markerIcon}
                  />
                );
              })}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    );
  }
}

// AIzaSyDpVxmkHARFpN4E18So3tUeZ0tNR0zXdD8
