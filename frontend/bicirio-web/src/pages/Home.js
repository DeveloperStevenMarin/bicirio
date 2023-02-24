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
        if ((!cookies.get('id'))) {
            window.location.href = "./";
        } else if ((cookies.get('profile') <= 0)) {
            alert("Usted no es admin");
            cookies.remove('id');
            cookies.remove('name1');
            cookies.remove('name2');
            cookies.remove('surname1');
            cookies.remove('surname2');
            cookies.remove('profile');
            cookies.remove('active');
            cookies.remove('schedule');
        }
       
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
    render() {
        return (
            <div className="home-content">
                <input type="checkbox" id="active" />
                <label htmlFor="active" className="menu-btn"><span></span></label>
                <label htmlFor="active" className="close"></label>
                <button className="btn--logout" onClick={() => this.logout()}>
                    <img src={logoutLogo} alt="logout logo">
                    </img>
                </button>
                <div className="wrapper">
                    <ul>
                        <li><a href="./users">Usuarios</a></li>
                        <li><a href="./services">Servicios</a></li>
                        <li><a href="./locations">Ubicaciones</a></li>
                        <li><a href="./registers">Registros</a></li>
                        <li><a href="./stations">Estaciones</a></li>
                        <li><a href="./schedules">Horarios</a></li>
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