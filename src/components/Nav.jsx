import { NavLink } from "react-router-dom";
import "../components/Nav.css";

function Nav({ closeMobileNav }) {
  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? "utlActive" : ""}`;

  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <NavLink to="/" className={linkClass} onClick={closeMobileNav}>
            MONE
          </NavLink>
        </li>

        <li>
          <NavLink to="/nosotros" className={linkClass} onClick={closeMobileNav}>
            Nosotros
          </NavLink>
        </li>

        <li>
          <NavLink to="/servicios" className={linkClass} onClick={closeMobileNav}>
            Servicios
          </NavLink>
        </li>

        <li>
          <NavLink to="/productos" className={linkClass} onClick={closeMobileNav}>
            Productos
          </NavLink>
        </li>

        <li>
          <NavLink to="/contacto" className={linkClass} onClick={closeMobileNav}>
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
