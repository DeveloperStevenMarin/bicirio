import React, { Component } from "react";
import '../css/AddUser.css';
import Cookies from 'universal-cookie';
import backIcon from '../images/back.png';




const cookies = new Cookies();
const createUserUrl = ("http://localhost:3001/user");


class UpdateUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            DataisLoaded: false,
            newUser: {
                id: 0,
                password: '',
                name1: '',
                name2: null,
                surname1: '',
                surname2: null,
            }
        };
    }


    componentDidMount() {

        if ((!cookies.get('id'))) {
            window.location.href = "./";
        }
        this.setState({
            DataisLoaded: true
        });
    }
    back = () => {
        window.location.href = "../users";
    }

    createUser = async () => {
        fetch(createUserUrl, {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: this.state.newUser.id,
                password: this.state.newUser.password,
                name1: this.state.newUser.name1,
                name2: this.state.newUser.name2,
                surname1: this.state.newUser.surname1,
                surname2: this.state.newUser.surname2
            }),
        }).then((response) => response.json())
            .then((data) => {

                if (data.message) {
                    alert(data.message); /*displays error message*/
                } else {
                    alert("Usuario creado con éxito")
                    window.location.href = "../users";
                }
            })
            .catch((err) => {
                alert(err);
            });
    }
    handleChange = async e => {
        await this.setState({
            newUser: {
                ...this.state.newUser,
                [e.target.name]: e.target.value

            }

        });
    }


    render() {

        const { DataisLoaded } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;
        return (

            <div className="home-content">
                <button className="btn--back" onClick={() => this.back()}>
                    <img src={backIcon} alt="back logo">
                    </img>
                </button>
                <div className="content">
                    <section className="section user-section">
                        <div className="form form--add-user">
                            <div className="form_input-container--add-user">
                                <input id="id" className="form_input--add-user" type="number" autoComplete="email" pattern="/^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/gm" placeholder=" " name="id" onChange={this.handleChange} />
                                <div className="form_cut"></div>
                                <label htmlFor="id" className="form_placeholder--add-user">Cédula</label>
                            </div>
                            <div className="form_input-container--add-user">
                                <input id="password" className="form_input--add-user" type="password" placeholder=" " name="password" onChange={this.handleChange} />
                                <div className="form_cut"></div>
                                <label htmlFor="password" className="form_placeholder--add-user">Contraseña</label>
                            </div>
                            <div className="form_input-container--add-user">
                                <input id="name1" className="form_input--add-user" type="text" placeholder=" " autoComplete="new-password" name="name1" onChange={this.handleChange} />
                                <div className="form_cut"></div>
                                <label htmlFor="name1" className="form_placeholder--add-user">Primer nombre</label>
                            </div>
                            <div className="form_input-container--add-user">
                                <input id="name2" className="form_input--add-user" type="text" placeholder=" " name="name2" onChange={this.handleChange} />
                                <div className="form_cut"></div>
                                <label htmlFor="name2" className="form_placeholder--add-user">Segundo nombre</label>
                            </div>
                            <div className="form_input-container--add-user">
                                <input id="surname1" className="form_input--add-user" type="text" placeholder=" " name="surname1" onChange={this.handleChange} />
                                <div className="form_cut"></div>
                                <label htmlFor="surname1" className="form_placeholder--add-user">Primer apellido</label>
                            </div>
                            <div className="form_input-container--add-user">
                                <input id="surname2" className="form_input--add-user" type="text" placeholder=" " name="surname2" onChange={this.handleChange} />
                                <div className="form_cut"></div>
                                <label htmlFor="surname2" className="form_placeholder--add-user">Segundo apellido</label>
                            </div>
                            <button type="text" className="btn_form-submit--user" onClick={this.createUser}>Crear usuario</button>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
};

export default UpdateUser;