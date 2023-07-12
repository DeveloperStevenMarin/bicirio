import React, { useState } from "react";
import { API_STATION_URL } from "../../../config/config";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function AddStation() {
  const [register, setRegister] = useState({});
  const [selectedLocation, setSelectedLocation] = useState(null);

  const mapOptions = {
    zoomControl: false, // Desactivar el control de zoom
    fullscreenControl: true, // Mantener el control de pantalla completa
    mapTypeControl: false, //Desactiva el tipo de mapa
  };

  const createStation = async () => {
    const data = {
      name: register.name,
      latitude: register.latitude,
      longitude: register.longitude,
    };
    if (!data.name || !data.latitude) {
      alert("Por favor, complete todos los campos.");
      console.log(register);
    } else {
      fetch(API_STATION_URL, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            alert(data.message);
          } else {
            alert("Estacion creada con éxito");
            window.location.href = "./";
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  const handleChange = (event) => {
    event.persist();
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
    console.log(register);
  };

  const back = () => {
    window.location.href = "./";
  };

  const center = {
    lat: 6.154279,
    lng: -75.3799089,
  };
  const handleMapClick = (event) => {
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
    const latLng = {
      lat: parseFloat(event.latLng.lat()),
      lng: parseFloat(event.latLng.lng()),
    };

    setSelectedLocation(latLng);
    setRegister({
      ...register,
      latitude: parseFloat(event.latLng.lat()),
      longitude: parseFloat(event.latLng.lng()),
    });
  };

  return (
    <div className="home-content">
      <div className="content">
        <section className="section user-section">
          <div className="form form--add-station">
            <div className="form_input-container--add-user">
              <input
                id="name"
                className="form_input--add-user"
                type="text"
                placeholder=" "
                name="name"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="name" className="form_placeholder--add-user">
                Nombre de la estación
              </label>
            </div>
            <h4>Ubicacion:</h4>
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
                    onClick={handleMapClick}
                    options={mapOptions}
                  >
                    <Marker position={selectedLocation} />
                    {selectedLocation && <Marker position={selectedLocation} />}
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>

            <button
              type="text"
              className="btn_form-submit--user"
              onClick={createStation}
            >
              Crear Estacion
            </button>
            <button
              type="text"
              className="btn_form-submit--station"
              onClick={back}
            >
              Cancelar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
