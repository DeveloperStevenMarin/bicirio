import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import UpdateUser from "./UpdateUser"
export default function UserCard({ user }) {
  const [selectedUser, setSelectedUser] = useState();
  const handleClick = (event) => {
    const selectedUser = event.target.value;
    setSelectedUser(event.target.value)
    console.log(selectedUser);
  };

  if (!selectedUser) {
    return (
      <section className="section user-section">
        <ul className="list user-list">
          <li key={user.id}>
            {user.name1} {user.surname1}
          </li>
          <li>{user.id}</li>
        </ul>
        <button
          className="btn btn-edit-users"
          name="id"
          value={JSON.stringify(user)}
          onClick={()=>setSelectedUser(JSON.stringify(user))}
        >
          <BiEdit className="icon--update" />
        </button>
      </section>
    );
  } else {
    return <>
      <UpdateUser selectedUser={JSON.stringify(user)}/>
    </>;
  }
}
