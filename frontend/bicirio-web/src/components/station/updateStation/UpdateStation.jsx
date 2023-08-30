import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useLocation, useNavigate } from "react-router-dom";
import { API_STATION_URL } from "../../../config/config";

export default function UpdateStation() {
  const [register, setRegister] = useState();
  const selectedStation = useLocation();
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(null);

  const mapOptions = {
    zoomControl: false, // Desactivar el control de zoom
    fullscreenControl: true, // Mantener el control de pantalla completa
    mapTypeControl: false, //Desactiva el tipo de mapa
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

  const stationToUpdate = JSON.parse(selectedStation.state.selectedStation);
  const updateStationUrl = API_STATION_URL + "/" + stationToUpdate.id;
  const back = () => {
    navigate(-1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(updateStationUrl, {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      })
        .then(navigate(-1))
        .catch((error) => {
          alert("Por favor verifique los datos:" + error);
        });
    } catch (e) {
      alert(e);
    }
  };

  const handleChange = async (e) => {
    await setRegister({
      ...register,
      [e.target.name]: e.target.value,
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
              onClick={handleSubmit}
            >
              Actualizar
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
