import { BiEdit, BiSearchAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function UserCard({ user }) {
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.Store.loggedUser.data);

  const handleClick = (event) => {
    const selectedUser = event.target.value;
    if (loggedUser.profile >= user.profile) {
      navigate("/users/update", { state: { selectedUser } });
    } else {
      alert("No es posible modificar un usuario con mayores permisos");
    }
  };

  const openUserDetails = (event) => {
    const selectedUser = event.target.value;
    navigate("./userDetails", { state: { selectedUser } });
  };

  return (
    <section className="section user-section">
      <ul className="list user-list">
       <h5>{user.name1} {user.surname1}</h5>
      </ul>
      <button
        className="btn btn-edit-users"
        key={user.id}
        value={JSON.stringify(user)}
        onClick={openUserDetails}
      >
        <BiSearchAlt className="icon--update" fill="white" />
      </button>
      <button
        className="btn btn-edit-users"
        name="id"
        value={JSON.stringify(user)}
        onClick={handleClick}
      >
        <BiEdit className="icon--update" fill="white" />
      </button>
    </section>
  );
}
