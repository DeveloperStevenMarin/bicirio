import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";

export default function UserList({ userList }) {
  const [userPerPage, setUserPerPage] = useState(15);
  const users = useSelector((state) => state.userList);
  console.log(users);
  const addUser = () => {
    window.location.href = "users/add";
  };
  return (
    <div className="content">
      <div className="title">Lista de usuarios</div>
      <div className="container container--user">
        <div className="user-list-title">
          <h3>Nombre</h3>
          <h3>Cédula</h3>
        </div>
        {userList.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
      <button className="btn btn--add-user" onClick={addUser}>
        <BiPlus />
      </button>
    </div>
  );
}
