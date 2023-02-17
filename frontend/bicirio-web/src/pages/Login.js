import React, { Component } from "react";
import '../css/Login.css';
import Cookies from 'universal-cookie';


const baseUrl = ("http://localhost:3001/user/login/");
const cookies = new Cookies();


class Login extends Component {

    state = {
        form: {
            id: '',
            password: ''
        }
    };
    componentDidMount() {
        if (cookies.get('id')) {
            window.location.href = './home';
        }
    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
    login = async () => {
        fetch(baseUrl, {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: this.state.form.id,
                password: this.state.form.password
            }),
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                // code here //
                if (data.error) {
                    alert(data.error); /*displays error message*/
                } else {
                    if (data.active === true) {
                        cookies.set('id', data.id, { path: "/" });
                        cookies.set('name1', data.name1, { path: "/" });
                        cookies.set('name2', data.name2, { path: "/" });
                        cookies.set('surname1', data.surname1, { path: "/" });
                        cookies.set('surname2', data.surname2, { path: "/" });
                        cookies.set('profile', data.profile, { path: "/" });
                        cookies.set('active', data.active, { path: "/" });
                        cookies.set('schedule', data.schedule, { path: "/" });
                        window.location.href = './home';
                    } else {
                        alert("Este usuario no está activo");
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" placeholder="Ingrese su cédula" name="id" onChange={this.handleChange} />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Ingrese su contraseña" name="password" onChange={this.handleChange} />
                            </div>
                            <button className="button login__submit" onClick={() => this.login()}>
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
        );
    }
};

export default Login;