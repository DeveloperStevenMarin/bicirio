import React, { useState, useEffect } from "react";
import "./Users.css";
import { BiArrowBack } from "react-icons/bi";
import { API_USER_URL } from "../../config/config";
import MenuList from "../general/MenuList";
import UserList from "./UserList";
import { useDispatch, useSelector } from "react-redux";
import { initializeUserList } from "../../features/users/userSlice";

export default function User() {
  let [dataIsLoaded, setDataIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const userListStore = useSelector((state) => state.userListStore);
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
    fetch(API_USER_URL, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(initializeUserList(json));
        setDataIsLoaded(true);
      });
  }, []);
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
        <UserList userList={userListStore.data} />
      </div>
    );
  }
}
