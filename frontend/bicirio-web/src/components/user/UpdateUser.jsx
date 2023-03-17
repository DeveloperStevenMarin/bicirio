import React, { useState } from "react";
import "./AddUser.css";
import { BiArrowBack } from "react-icons/bi";

function UpdateUser({ selectedUser }) {
  const [register, setRegister] = useState();
  const userToUpdate = JSON.parse(selectedUser);
  const updateUserUrl = "http://localhost:3001/user/" + userToUpdate.id;
  console.log(updateUserUrl);
  const back = () => {
    window.location.href = "./";
  };
  const handleSubmit = async (e) => {
    try {
      await fetch(updateUserUrl, {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      })
        .then(window.location.reload())
        .catch((error) => {
          alert("Por favor verifique los datos:" + error);
        });
    } catch (e) {
      alert(e);
    }
  };

  const handleChange = async (e) => {
    await setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
    console.log(register);
  };
  return (
    <div className="home-content">
      <button className="btn--back" onClick={back}>
        <BiArrowBack />
      </button>
      <div className="content">
        <section className="section user-section">
          <div className="form form--add-user">
            <div className="form_input-container--add-user">
              <input
                id="password"
                className="form_input--add-user"
                type="text"
                placeholder=" "
                name="password"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="password" className="form_placeholder--add-user">
                {userToUpdate.password}
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="name1"
                className="form_input--add-user"
                type="text"
                placeholder=" "
                autoComplete="new-password"
                name="name1"
                minLength={3} maxLength={20}
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="name1" className="form_placeholder--add-user">
                {userToUpdate.name1}
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="name2"
                className="form_input--add-user"
                type="text"
                placeholder=" "
                name="name2"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="name2" className="form_placeholder--add-user">
                {userToUpdate.name2}
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="surname1"
                className="form_input--add-user"
                type="text"
                placeholder=" "
                name="surname1"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="surname1" className="form_placeholder--add-user">
                {userToUpdate.surname1}
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="surname2"
                className="form_input--add-user"
                type="text"
                placeholder=" "
                name="surname2"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="surname2" className="form_placeholder--add-user">
                {userToUpdate.surname2}
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="id"
                className="form_input--add-user"
                type="number"
                autoComplete="email"
                placeholder=" "
                name="profile"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="id" className="form_placeholder--add-user">
                {userToUpdate.profile}
              </label>
            </div>
            <button
              type="text"
              className="btn_form-submit--user"
              onClick={handleSubmit}
            >
              Actualizar informacion
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UpdateUser;
