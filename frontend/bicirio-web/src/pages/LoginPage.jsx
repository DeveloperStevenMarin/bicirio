import React, { Component } from "react";
import "../css/Login.css";
import Cookies from "universal-cookie";
import { API_USER_URL } from "../config/config";

const loginUrl = API_USER_URL + "/login/";
const cookies = new Cookies();

function login() {
    fetch()
}

export default function LoginPage() {
  return (
    <div className="container container--login">
      <div className="container container--login">
        <div className="screen">
          <div className="screen__content">
            <form className="login" autoComplete="nope">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Ingrese su cédula"
                  name="id"
                  autoComplete="off"
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
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">Ingresa aquí</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
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
    </div>
  );
}
