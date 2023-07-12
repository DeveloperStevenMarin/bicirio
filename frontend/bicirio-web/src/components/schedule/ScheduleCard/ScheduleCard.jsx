import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function ScheduleCard({ schedule }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    const selectedUser = event.target.value;
    // navigate("/users/update", { state: { selectedUser } });
    console.log(schedule);
  };

  return (
    <section className="section schedule-section">
      <ul className="list schedule-list">
        <li className="schedule-list-item--userID" key={schedule.id}>{schedule.userID}</li>
        <li className="schedule-list-item--in-time">{schedule.assign_in_time}</li>
        <li className="schedule-list-item--out-time">{schedule.assign_out_time}</li>
        <li className="schedule-list-item--update">
          {" "}
          <button
            className="btn btn-edit-users"
            name="id"
            value={JSON.stringify(schedule)}
            onClick={handleClick}
          >
            <BiEdit className="icon--update" fill="white" />
          </button>
        </li>
      </ul>
    </section>
  );
}
