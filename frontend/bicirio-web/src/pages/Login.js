import React, { Component } from "react";
import '../css/Login.css';
import axios from 'axios';

const baseUrl = "http://localhost:3001/user";

class Login extends Component {
    state = {
        form: {
            userID: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    }

    auth = async () => {
        await axios.get(baseUrl, { params: { id: this.state.form.userID, password: this.state.form.password } }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }


    render() {
        return (
            <div className="MainContainer">

                <div className="form-group">
                    <label>
                        Cedula:
                    </label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        name="userID"
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>
                        Password:
                    </label>
                    <br />
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.handleChange}
                    />
                    <br />
                    <button className="btn btn-primary" onClick={this.auth}>
                        Iniciar sesión
                    </button>
                </div>

            </div>
        );
    }
};

export default Login;