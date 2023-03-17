export default function MenuList() {
    return(
  <div className="home-content">
    <input type="checkbox" id="active" />
    <label htmlFor="active" className="menu-btn">
      <span></span>
    </label>
    <label htmlFor="active" className="close"></label>

    <div className="wrapper">
      <ul>
        <li>
          <a href="./users">Usuarios</a>
        </li>
        <li>
          <a href="./services">Servicios</a>
        </li>
        <li>
          <a href="./locations">Ubicaciones</a>
        </li>
        <li>
          <a href="./registers">Registros</a>
        </li>
        <li>
          <a href="./stations">Estaciones</a>
        </li>
        <li>
          <a href="./schedules">Horarios</a>
        </li>
      </ul>
    </div>
  </div>
  )
}
