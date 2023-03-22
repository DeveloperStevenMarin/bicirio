import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function StationCard({ station }) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    const selectedStation = event.target.value;
    navigate("/stations/update", { state: { selectedStation } });
  };

  return (
    <section className="section user-section">
      <ul className="list user-list">
        <li key={station.id}>{station.name}</li>
        <li>{station.longitude}</li>
      </ul>
      <button
        className="btn btn-edit-users"
        name="id"
        value={JSON.stringify(station)}
        onClick={handleClick}
      >
         <BiEdit className="icon--update" />
      </button>
    </section>
  );
}
