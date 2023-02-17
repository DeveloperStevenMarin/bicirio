import React, { Component } from "react";
import '../css/Home.css';
import Cookies from 'universal-cookie';
import logoutLogo from '../images/logout.png'


const cookies = new Cookies();
const usersUrl = ("http://localhost:3001/user/");
const stationsUrl = ("http://localhost:3001/station/");
const locationsUrl = ("http://localhost:3001/location/");
const servicesUrl = ("http://localhost:3001/service/");
const inHourUrl = ("http://localhost:3001/in_time/");
const registersUrl = ("http://localhost:3001/register/");
const outHourUrl = ("http://localhost:3001/out_time/");
const schedulesUrl = ("http://localhost:3001/schedule/");

class Home extends Component {

    componentDidMount() {
        if (!cookies.get('id')) {
            window.location.href = "./";
        }
        this.getUsers();
        this.getLocations();
        this.getStations();
        this.getServices();
        this.getInHours();
        this.getOutHours();
        this.getSchedules();
        this.getRegisters();
    }

    logout = async () => {
        cookies.remove('id');
        cookies.remove('name1');
        cookies.remove('name2');
        cookies.remove('surname1');
        cookies.remove('surname2');
        cookies.remove('profile');
        cookies.remove('active');
        cookies.remove('schedule');
        window.location.href = "./";
    }

    getUsers = async () => {
        fetch(usersUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },

        }).then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    console.table("Lista de usuarios: ", data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    getStations = async () => {
        fetch(stationsUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },

        }).then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    console.table("Lista de estaciones: ", data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    getLocations = async () => {
        fetch(locationsUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },

        }).then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    console.table("Lista de ubicaciones", data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    getServices = async () => {
        fetch(servicesUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },

        }).then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    console.table("Lista de servicios", data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    getRegisters = async () => {
        fetch(registersUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },

        }).then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    console.table("Lista de Registros", data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    getInHours = async () => {
        fetch(inHourUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },

        }).then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    console.table("Lista de horas de entrada", data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    getOutHours = async () => {
        fetch(outHourUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },

        }).then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    console.table("Lista de horas de salida", data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    getSchedules = async () => {
        fetch(schedulesUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },

        }).then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    console.table("Lista de horas de horarios", data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <input type="checkbox" id="active"/>
                    <label htmlFor="active" className="menu-btn"><span></span></label>
                    <label htmlFor="active" className="close"></label>
                    <button className="btn--logout" onClick={()=> this.logout()}>
                        <img src={logoutLogo}>
                        </img>
                    </button>
                    <div className="wrapper">
                        <ul>
                            <li><a href="#">Usuarios</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Ubicaciones</a></li>
                            <li><a href="#">Registros</a></li>
                            <li><a href="#">Estaciones</a></li>
                            <li><a href="#">Horas de entrada</a></li>
                            <li><a href="#">Horas de salida</a></li>
                            <li><a href="#">Horarios</a></li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="title">
                            Bienvenido</div>
                        <p>
                            {cookies.get('name1')} {cookies.get('surname1')}</p>
                    </div>
            </div>
        );
    }
};

export default Home;