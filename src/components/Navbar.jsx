import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "hover")} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "hover")} to="/busqueda">
            Busqueda
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "hover")} to="/listado">
            Listado
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
