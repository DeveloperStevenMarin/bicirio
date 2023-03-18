import React, { useEffect, useState } from "react";
import "./Home.css";
import { BiLogOut } from "react-icons/bi";
import MenuList from "../general/MenuList";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeLoggedUser } from "../../features/users/loggedUserSlice";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loggedUser = useSelector((state) => state.Store.loggedUser.data);
  useEffect(() => {
    if (!loggedUser) {
      navigate("../");
    } else if (loggedUser.profile <= 0) {
      dispatch(removeLoggedUser(null));
      alert("Usted no es admin");
    }
    document.title = `Bicirio`;
  }, []);
  const logout = async () => {
    dispatch(removeLoggedUser(null));
    navigate("../");
  };

  if (!loggedUser) {
    <></>;
  } else {
    return (
      <div className="home-content">
        <button className="btn--logout" onClick={() => logout()}>
          <BiLogOut />
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
