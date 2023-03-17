import React, { useEffect, useState } from "react";
import "./Home.css";
import { BiLogOut } from "react-icons/bi";
import MenuList from "../general/MenuList";
import { useSelector } from "react-redux";

//const loggedUser = useSelector((state) => state.loggedUser);
export default function Home() {
  const [loggedUser, setLoggedUser] = useState({
    name1: "",
    surname1: "",
    profile: "",
  });
  //setLoggedUser(useSelector((state) => state.loggedUser));
  console.log(loggedUser);
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    setLoggedUser(loggedUser);
    if (!loggedUser) {
      window.location.href = "./";
    } else if (loggedUser.profile <= 0) {
      alert("Usted no es admin");
      localStorage.removeItem("loggedUser");
    }
    document.title = `Bicirio`;
  }, []);
  const logout = async () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "./";
  };

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
