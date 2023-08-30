import React, { useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeLoggedUser } from "../../features/users/loggedUserSlice";
import { API_OUT_TIME_URL } from "../../config/config";
import MenuList from "../general/MenuList/MenuList";
import WorkingArea from "../WorkingArea/WorkingArea";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.Store.loggedUser.data);

  useEffect(() => {
    if (!loggedUser) {
      navigate('/bicirio/');
    }
    document.title = "Bicirio";
  }, [loggedUser, navigate]);

  const logout = async () => {
    if (loggedUser) {
      out_time(loggedUser.id, loggedUser.schedule);
    }
    dispatch(removeLoggedUser(null));
    navigate('/bicirio/');
  };

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

  if (!loggedUser) {
    return null;
  } else if (!loggedUser.profile) {
    logout();
    return null;
  } else if (loggedUser.profile < 2) {
    return <WorkingArea />;
  } else {
    return (
      <div className="home-content">
        <button className="btn--logout" onClick={() => logout()}>
          <BiLogOut fill="white" />
        </button>
        <MenuList />
        <div className="content">
          <div className="title">Bienvenido</div>
          <p>
            {loggedUser.name1} {loggedUser.surname1}
          </p>
        </div>
      </div>
    );
  }
}
