import { useState } from "react";
import { BiEdit, BiUserPlus, BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { API_USER_STATION_URL } from "../../../config/config";
import StationMap from "../stationMap/StationMap";
export default function StationCard({ station }) {
  const [checkList, setCheckList] = useState([]);
  const navigate = useNavigate();
  const handleClick = (event) => {
    const selectedStation = event.target.value;
    navigate("./update", { state: { selectedStation } });
  };

  const handleClickUserStation = async (event) => {
    const selectedStation = event.target.value;
    setCheckList(await getStationUsers(station.id));
    navigate("./addUser", { state: { selectedStation } });
  };
  const getStationUsers = async (stationID) => {
    const res = await fetch(API_USER_STATION_URL + "/" + stationID, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("checkList", JSON.stringify(json));
      });
    return res;
  };

  return (
    <section className="user-detail--section">
      <ul className="list user-list">
        <li key={station.id}>{station.name}</li>
      </ul>
      <StationMap latitude={station.latitude} longitude={station.longitude} />
      <button
        className="btn btn-edit-users"
        name="id"
        value={JSON.stringify(station)}
        onClick={handleClick}
      >
        <BiEdit className="icon--update" fill="white" />
      </button>
      <button
        className="btn btn-edit-users"
        name="id"
        value={JSON.stringify(station)}
        onClick={handleClickUserStation}
      >
        <BiUserPlus className="icon--update" fill="white" />
      </button>
    </section>
  );
}
