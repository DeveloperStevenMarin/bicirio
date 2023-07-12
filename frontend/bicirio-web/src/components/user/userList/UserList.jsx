import { useState } from "react";
import { BiPlus } from "react-icons/bi";

import UserCard from "../userCard/UserCard";
import { useNavigate } from "react-router-dom";

export default function UserList({ userList }) {
  const [userPerPage, setUserPerPage] = useState(15);
  const navigate = useNavigate();
  const addUser = () => {
    navigate("./add");
  };
  return (
    <div className="content">
      <div className="title">Lista de usuarios</div>
      <div className="container container--user">
        <div className="user-list-title">
        </div>
        {userList.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
      <button className="btn btn--add-user" onClick={addUser}>
        <BiPlus fill="white"/>
      </button>
    </div>
  );
}
