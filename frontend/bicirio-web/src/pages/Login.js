import React, { Component } from 'react'
import '../css/Login.css';

class Login extends Component {
    render() {
        return (
            <div className='LoginMainContainer'>
                <div className='LoginSecondaryContainer'>
                    <div className='form-group'>
                        <label>Cédula: </label>
                        <br />
                        <input
                            type="text"
                            className='form-control'
                        />
                        <br />
                        <label>Contraseña: </label>
                        <br />
                        <input
                            type="password"
                            className='form-control'
                        />

                    </div>
                </div>
            </div>
        );
    }
}
export default Login;