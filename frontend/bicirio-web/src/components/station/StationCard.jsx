import { BiEdit } from "react-icons/bi";
export default function StationCard({ station }) {
  const getSelectedStation = (e) => {
    this.setState({
      selectedStation: {
        [e.target.name]: e.target.value,
      },
    });
    const validacion = this.state.selectedStation;
    if (!validacion || validacion.id === undefined) {
      console.log("No hay usuario seleccionado");
      console.log(this.state.selectedUser);
    } else {
      window.location.href = "stations/update";
      console.log(this.state.selectedUser);
    }
  };

  return (
    <section className="section user-section">
      <ul className="list user-list">
        <li key={station.id}>{station.name}</li>
        <li>{station.longitude}</li>
      </ul>
      <button className="btn btn-edit-users" name="id" value={station.id}>
        <BiEdit />
      </button>
    </section>
  );
}
