import React, { useEffect, useState } from "react";
import { API_STATION_URL, API_USER_STATION_URL } from "../../../config/config";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import Loading from "../../general/Loading/Loading";
import { useLocation } from "react-router-dom";
import UserStationCard from "../userStationCard/UserStationCard";

export default function AddUserStation() {
  const navigate = useNavigate();
  const state = useLocation();
  const station = JSON.parse(state.state.selectedStation);
  const checkList = JSON.parse(localStorage.getItem("checkList"));
  const userList = useSelector((state) => state.Store.userList.data);

  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const back = () => {
    navigate(-1);
  };

  useEffect(() => {
    setDataIsLoaded(true);
  }, []);

  if (!dataIsLoaded) {
    return <Loading />;
  } else {
    return (
      <div className="home-content">
        <div className="content">
          <section className="section user-section">
            <div className="form form--add-user">
              <legend>Selecciona los usuarios para asignar:</legend>
              {userList.map((user) => (
                <UserStationCard
                  station={station}
                  user={user}
                  checkList={checkList}
                />
              ))}
              <div className="add-user-station--container-btn">
                <button onClick={back} className="btn--default">
                  Aceptar
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
