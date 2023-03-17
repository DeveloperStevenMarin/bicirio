import React, { useState, useEffect } from "react";
import "./Stations.css";
import { BiArrowBack } from "react-icons/bi";
import { API_STATION_URL } from "../../config/config";
import MenuList from "../general/MenuList";
import StationList from "./StationList";
import { useDispatch, useSelector } from "react-redux";

export default function Station() {
  let [stationList, setStationList] = useState([]);
  let [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [selectedstation, setSelectedstation] = useState({ id: "" });
  const dispatch = useDispatch();
  const [loggedUser, setLoggedUser] = useState({
    name1: "",
    surname1: "",
    profile: 0,
  });
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    setLoggedUser(loggedUser);
    if (!loggedUser) {
      window.location.href = "./";
    } else if (loggedUser.profile <= 0) {
      console.log(loggedUser);
      alert("Usted no es admin");
      localStorage.removeItem("loggedUser");
    }
    fetch(API_STATION_URL, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setStationList(json);
        //dispatch(json);

        setDataIsLoaded(true);
      });
  }, []);
  //console.log(useSelector((state) => state.userList));
  const back = async () => {
    window.location.href = "/home";
  };

  if (!dataIsLoaded) {
    return (
      <>
        <h1> Pleses wait some time.... </h1>
      </>
    );
  } else {
    return (
      <div className="home-content">
        <button className="btn--back" onClick={() => back()}>
          <BiArrowBack />
        </button>
        <MenuList />
        <StationList stationList={stationList} />
      </div>
    );
  }
}
