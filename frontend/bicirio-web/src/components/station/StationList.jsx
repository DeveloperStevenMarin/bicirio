import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { useSelector } from "react-redux";
import StationCard from "./StationCard";

export default function StationList({ stationList }) {
  const [stationPerPage, setStationPerPage] = useState(15);
  const addStation = () => {
    window.location.href = "stations/add";
  };
  return (
    <div className="content">
      <div className="title">Lista de estaciones</div>
      <div className="container container--user">
        <div className="user-list-title">
          <h3>Nombre</h3>
          <h3>Ubicacion</h3>
        </div>
        {stationList.map((station) => (
          <StationCard station={station} />
        ))}
      </div>
      <button className="btn btn--add-user" onClick={addStation}>
        <BiPlus />
      </button>
    </div>
  );
}
