import React, { Component } from "react";
import '../css/Users.css';
import Cookies from 'universal-cookie';
import backIcon from '../images/back.png'
import editIcon from '../images/edit.png'
import addIcon from '../images/add.png'


const cookies = new Cookies();
const usersUrl = ("http://localhost:3001/user/");



class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            DataisLoaded: false,
            selectedUser: null
        };
    }




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
        fetch(
            usersUrl)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    users: json,
                    DataisLoaded: true,
                });
            });
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
                    return data.json();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    back = () => {
        window.location.href = "/home";
    }

    addUser() {
        window.location.href = "users/add";
    }

    getSelectedUser = e => {
        this.setState({
            selectedUser: {
                [e.target.name]: (e.target.value)
            }
        });
        const validacion = this.state.selectedUser;
        if ((!validacion) || validacion.id === undefined) {
            console.log("No hay usuario seleccionado")
            console.log(this.state.selectedUser);
        } else {
            cookies.set('selectedUser', this.state.selectedUser.id, { path: "/" });
            //window.location.href = "users/update";
            console.log(this.state.selectedUser);
        }
    }
  

    render() {

        const { DataisLoaded, users } = this.state;
        if (!DataisLoaded) return (<div>
           
            <h1> Pleses wait some time.... </h1> </div>);
        return (

            <div className="home-content">

                <input type="checkbox" id="active" />
                <label htmlFor="active" className="menu-btn"><span></span></label>
                <label htmlFor="active" className="close"></label>
                <button className="btn--back" onClick={() => this.back()}>
                    <img src={backIcon} alt="back logo">
                    </img>
                </button>
                <div className="wrapper">
                    <ul>
                        <li><a href="./home">Home</a></li>
                        <li><a href="./services">Servicios</a></li>
                        <li><a href="./locations">Ubicaciones</a></li>
                        <li><a href="./registers">Registros</a></li>
                        <li><a href="./stations">Estaciones</a></li>
                        <li><a href="./schedules">Horarios</a></li>
                    </ul>
                </div>
                <div className="content">
                    <div className="title">
                        Lista de usuarios</div>
                    <div className="container container--user">
                        <div className="user-list-title">
                            <h3>Nombre</h3>
                            <h3>Cédula</h3>
                        </div>
                        {users.map((user) => (
                            <section className="section user-section">
                                <ul className="list user-list">

                                    <li key={user.id}>
                                        {user.name1} {user.surname1}
                                    </li>
                                    <li>
                                        {user.id}
                                    </li>

                                </ul>
                                <button className="btn btn-edit-users" name="id" value={user.id} onClick={this.getSelectedUser}>
                                    <img src={editIcon} alt="edit logo">
                                    </img>
                                </button>
                            </section>
                        ))}
                    </div>
                    <button className="btn btn--add-user" onClick={() => this.addUser()}>
                        <img src={addIcon} alt="edit logo">

                        </img>
                    </button>
                </div>
            </div>
        );
    }
};
export default Users;