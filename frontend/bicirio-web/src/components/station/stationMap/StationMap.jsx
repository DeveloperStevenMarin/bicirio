import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import endMarkerIcon from "../../../images/mapMarkerEnd.png";
import { useEffect, useState } from "react";

export default function StationMap({ latitude, longitude }) {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  });
  const mapOptions = {
    disableDefaultUI: true, // Desactiva los controles por defecto del mapa
  };

  const center = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  };
 
    return (
      <div className="station-map-modal-background">
        <div
          className="modal-content"
          style={{ height: "100px", width: "100%" }}
        >
          <LoadScript googleMapsApiKey="AIzaSyDpVxmkHARFpN4E18So3tUeZ0tNR0zXdD8">
            <GoogleMap
              mapContainerClassName="station-map-container"
              center={center}
              zoom={12}
              options={mapOptions}
            >
              {selectedLocation && <Marker position={selectedLocation} />}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    );
  
}
