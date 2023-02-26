import React, { Component } from "react";
import '../css/AddUser.css';
import Cookies from 'universal-cookie';
import backIcon from '../images/back.png';




const cookies = new Cookies();
const updateUserUrl = ("http://localhost:3001/user/" + cookies.get('selectedUser'));

let user = {}
const getUserData = async () => {
    fetch(updateUserUrl, {
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
    }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.error) {
                alert(data.error); /*displays error message*/
            } else {
                console.log(data)
                user = data;
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

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
                profile: null,
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
        getUserData();
    }
    back = () => {
        window.location.href = "../users";
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
                                <input id="password" className="form_input--add-user" type="text" placeholder=" " name="password" onChange={this.handleChange} />
                                <div className="form_cut"></div>
                                <label htmlFor="password" className="form_placeholder--add-user">{user.password}</label>
                            </div>
                            <div className="form_input-container--add-user">
                                <input id="name1" className="form_input--add-user" type="text" placeholder=" " autoComplete="new-password" name="name1" onChange={this.handleChange} />
                                <div className="form_cut"></div>
                                <label htmlFor="name1" className="form_placeholder--add-user">{user.name1}</label>
                            </div>
                            <div className="form_input-container--add-user">
                                <input id="name2" className="form_input--add-user" type="text" placeholder=" " name="name2" onChange={this.handleChange} />
                                <div className="form_cut"></div>
                                <label htmlFor="name2" className="form_placeholder--add-user">{this.state.newUser.name2}</label>
                            </div>
                            <div className="form_input-container--add-user">
                                <input id="surname1" className="form_input--add-user" type="text" placeholder=" " name="surname1" onChange={this.handleChange} />
                                <div className="form_cut"></div>
                                <label htmlFor="surname1" className="form_placeholder--add-user">{this.state.newUser.surname1}</label>
                            </div>
                            <div className="form_input-container--add-user">
                                <input id="surname2" className="form_input--add-user" type="text" placeholder=" " name="surname2" onChange={this.handleChange} />
                                <div className="form_cut"></div>
                                <label htmlFor="surname2" className="form_placeholder--add-user">{this.state.newUser.surname2}</label>
                            </div>
                            <div className="form_input-container--add-user">
                                <input id="id" className="form_input--add-user" type="number" autoComplete="email" placeholder=" " name="profile" onChange={this.handleChange} />
                                <div className="form_cut"></div>
                                <label htmlFor="id" className="form_placeholder--add-user">{this.state.newUser.profile}</label>
                            </div>
                            <button type="text" className="btn_form-submit--user" onClick={this}>Actualizar informacion</button>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
};

export default UpdateUser;