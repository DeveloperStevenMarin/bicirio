import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "../home/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { removeLoggedUser } from "../../features/users/loggedUserSlice";
import {
  API_OUT_TIME_URL,
  API_STATION_URL,
  API_USER_STATION_URL,
  API_LOCATION_URL,
} from "../../config/config";
import { useEffect, useState } from "react";
import { initializeStationList } from "../../features/stations/stationSlice";
export default function WorkingArea() {
  const loggedUser = useSelector((state) => state.Store.loggedUser.data);
  const stationList = useSelector((state) => state.Store.stationList.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [assignedStations, setAssignedStations] = useState([]);
  const [assignedStationsData, setAssignedStationsData] = useState([]);
  // Obtener la ubicación cada 2.5 minutos (60,000 milisegundos)
  const interval = 60000;

  const out_time = async (userId, scheduleID) => {
    await fetch(API_OUT_TIME_URL, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: userId,
        scheduleID: scheduleID,
      }),
    });
  };
  const getAssignedStations = async (userID) => {
    try {
      const response = await fetch(API_USER_STATION_URL + "/" + userID, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      const json = await response.json();

      // Primero, actualiza assignedStations con los datos obtenidos
      setAssignedStations(json);

      // Luego, realiza el filtrado
      const assignedStationIDs = json.map((assignment) => assignment.stationID);
      const filteredStations = stationList.filter((station) => {
        return assignedStationIDs.includes(station.id);
      });

      console.log(filteredStations);
      setAssignedStationsData(filteredStations);
    } catch (error) {
      console.error("Error al obtener las estaciones asignadas:", error);
      // Puedes mostrar un mensaje de error al usuario si lo deseas
    }
  };
  const getAllStations = async () => {
    try {
      const response = await fetch(API_STATION_URL, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const json = await response.json();
        dispatch(initializeStationList(json));
      } else {
        console.error("Error al obtener la lista de estaciones");
      }
    } catch (error) {
      console.error("Error al obtener la lista de estaciones:", error);
    }
  };
  const postLocation = async (lat, long, userID, serviceID) => {
    try {
      const response = await fetch(API_LOCATION_URL, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitude: lat,
          longitude: long,
          userID: userID,
          serviceID: serviceID,
        }),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
      } else {
        console.error("Error al obtener la lista de estaciones");
      }
    } catch (error) {
      console.error("Error al obtener la lista de estaciones:", error);
    }
  };
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371000; // Radio de la Tierra en metros

    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    return distance;
  }

  function isWithinPerimeter(actualLocation, stationLocation, radius) {
    const distance = calculateDistance(
      actualLocation.latitud,
      actualLocation.longitud,
      stationLocation.latitude,
      stationLocation.longitude
    );
    console.log(distance);

    return distance <= radius;
  }

  useEffect(() => {
    getAssignedStations(loggedUser.id);
    getAllStations();
  }, [loggedUser.id]);
  useEffect(() => {
    // Función para obtener la ubicación actual
    async function getLocation() {
      if (navigator.geolocation) {
        try {
          const posicion = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });

          const latitud = posicion.coords.latitude;
          const longitud = posicion.coords.longitude;
          console.log(latitud, longitud);
          const actualLocation = { latitud, longitud };
          const stationsInsidePerimeter = assignedStationsData.filter(
            (station) => {
              return isWithinPerimeter(actualLocation, station, 30); // 30 metros de radio
            }
          );

          if (stationsInsidePerimeter.length === 0) {
            alert("Estás fuera de las estaciones");
            postLocation(
              latitud,
              longitud,
              loggedUser.id,
              loggedUser.serviceID
            );
          } else {
            alert(
              "Estás dentro de las estaciones: " +
                stationsInsidePerimeter
                  .map((station) => station.name)
                  .join(", ")
            );
          }
        } catch (error) {
          console.error("Error al obtener la ubicación:", error);
        }
      } else {
        console.error("Geolocalización no soportada por este navegador");
      }
    }

    // Obtener la ubicación cada 5 minutos
    if (assignedStationsData.length > 0) {
      // Verifica si assignedStationsData tiene datos
      const intervalId = setInterval(getLocation, interval);
      return () => clearInterval(intervalId);
    }

    // Limpiar el intervalo cuando el componente se desmonte
  }, [assignedStationsData]);
  const logout = async () => {
    out_time(loggedUser.id, loggedUser.schedule);
    dispatch(removeLoggedUser(null));
    navigate("-1");
  };

  return (
    <div className="home-content">
      <button className="btn--logout" onClick={() => logout()}>
          <BiLogOut fill="white" />
      </button>
      <div className="content">
        <div className="title">Área de trabajo</div>
        <p>
          {loggedUser.name1} {loggedUser.surname1}
        </p>
        <ul>
          <ul>
            {assignedStationsData.map((station) => (
              <li key={station.id}>{station.name}</li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}
