import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ScheduleCard from "../ScheduleCard/ScheduleCard";

export default function ScheduleList({ scheduleList }) {
  const navigate = useNavigate();
  
  const addSchedule = () => {
    navigate("./add");
  };
  return (
    <div className="content">
      <div className="title">Lista de horarios</div>
      <div className="container container--user">
        <div className="schedule-list-title">
          <h3 className="schedule-list-title--userID">Operario</h3>
          <h3 className="schedule-list-title--in-time">Hora entrada</h3>
          <h3 className="schedule-list-title--out-time">Hora salida</h3>
          <h3 className="schedule-list-title--update">Actualizar</h3>
        </div>
        {scheduleList.map((schedule) => (
          
          <ScheduleCard schedule={schedule} />
          
        ))}
      </div>
      <button className="btn btn--add-user" onClick={addSchedule}>
        <BiPlus fill="white" />
      </button>
    </div>
  );
}
