import React, { useEffect, useState } from "react";
import "./Login.css";
import { API_USER_URL } from "../../config/config";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addLoggedUser } from "../../features/users/loggedUserSlice";

export default function LoginPage() {
  const loginUrl = API_USER_URL + "/login/";
  const [form, setForm] = useState();
  useSelector(state => state.loggedUser);
  const dispatch = useDispatch();
  useEffect(() => {
   
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) {
      window.location.href = "./home";
    }
  }, []);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    login();
    console.log("enviado");
  };

  const login = async () => {
    await fetch(loginUrl, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: form.id,
        password: form.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {

        if (data.error) {
          alert(data.error); /*displays error message*/
        } else {
          if (data.active === true) {
            dispatch(addLoggedUser(data));
            window.location.href = "./home";
            localStorage.setItem("loggedUser", JSON.stringify(data));
            
          } else {
            alert("Este usuario no está activo");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container container--login">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="Ingrese su cédula"
                name="id"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Ingrese su contraseña"
                autoComplete="off"
                name="password"
                onChange={handleChange}
              />
            </div>
            <Button text="Ingresar" />
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}
