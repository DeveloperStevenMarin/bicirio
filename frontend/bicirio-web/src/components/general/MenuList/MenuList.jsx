import { Link } from "react-router-dom";
export default function MenuList() {
  return (
    <div className="home-content">
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>

      <div className="wrapper">
        <ul>
          <li>
            <Link to={"/bicirio/home"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/bicirio/users"}>Usuarios</Link>
          </li>
          <li>
            <Link to={"/bicirio/services"}>Servicios</Link>
          </li>
          <li>
            <Link to={"/bicirio/location"}>Ubicaciones</Link>
          </li>
          <li>
            <Link to={"/bicirio/registers"}>Registros</Link>
          </li>
          <li>
            <Link to={"/bicirio/stations"}>Estaciones</Link>
          </li>
          <li>
            <Link to={"/bicirio/schedules"}>Horarios</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
