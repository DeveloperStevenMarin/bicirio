import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function UserCard({ user }) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    const selectedUser = event.target.value;
    navigate("/users/update", { state: { selectedUser } });
  };

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
        onClick={handleClick}
      >
        <BiEdit className="icon--update" />
      </button>
    </section>
  );
}
