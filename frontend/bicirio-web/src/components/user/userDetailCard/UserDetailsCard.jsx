import { useLocation, useNavigate } from "react-router-dom";
import { API_SCHEDULE_URL } from "../../../config/config";
import Loading from "../../general/Loading/Loading";
import { useEffect, useState } from "react";

export default function UserDetailsCard() {
  let [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [scheduleList, setScheduleList] = useState([]);
  const selectedUser = useLocation();
  const user = JSON.parse(selectedUser.state.selectedUser);
  const navigate = useNavigate();
  let data = { user };

  useEffect(() => {
    getScheduleList();
  }, []);
  switch (user.profile) {
    case 0:
      data.user.profile = "Operario";
      break;
    case 1:
      data.user.profile = "Técnico";
      break;
    case 2:
      data.user.profile = "Supervisor";
      break;
    case 3:
      data.user.profile = "Coordinador";
      break;
  }
  if (user.active === true) {
    data.user.active = "Activo";
  } else {
    data.user.active = "Inactivo";
  }
  scheduleList.map((schedule) => {
    if (schedule.id === user.scheduleID) {
      data.user.scheduleID =
        schedule.assign_in_time + " - " + schedule.assign_out_time;
    } else if (!user.scheduleID) {
      data.user.scheduleID = "No tiene horario asignado";
    }
  });

  const back = async () => {
    navigate(-1);
  };

  const getScheduleList = async () => {
    fetch(API_SCHEDULE_URL, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setScheduleList(json);
        setDataIsLoaded(true);
      });
  };
  if (!dataIsLoaded) {
    return <Loading />;
  } else {
    return (
      <div className="home-content">
        <div className="content">
          <div className="title">
            {data.user.name1} {data.user.surname1}
          </div>
          <div className="container container--user">
            <section
              className="section user-section"
              style={{ flexDirection: "column", gap: "0px" }}
            >
              <div
                className="user-list-title"
                style={{ justifyContent: "space-between" }}
              >
                <h3>Cédula: </h3>
                <h3>{data.user.id}</h3>
              </div>
              <div
                className="user-list-title"
                style={{ justifyContent: "space-between" }}
              >
                <h3>Perfil: </h3>
                <h3>{data.user.profile}</h3>
              </div>
              <div
                className="user-list-title"
                style={{ justifyContent: "space-between" }}
              >
                <h3>Estado: </h3>
                <h3>{user.active}</h3>
              </div>
              <div
                className="user-list-title"
                style={{ justifyContent: "space-between" }}
              >
                <h3>Horario: </h3>
                <h3>{user.scheduleID}</h3>
              </div>
              <div className="user-details-btn-container">
                <button className="btn--default">Ver horas de entrada</button>

                <button className="btn--default">Ver horas de salida</button>

                <button value={"stations"} className="btn--default">
                  Ver estaciones
                </button>

                <button type="text" className="btn--default" onClick={back}>
                  Cancelar
                </button>
              </div>
              <button
                className="btn btn-edit-users"
                name="id"
                value={JSON.stringify(user)}
              ></button>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
