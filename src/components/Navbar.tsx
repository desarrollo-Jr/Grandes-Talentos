import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/sumate">
            ¡SÚMATE!
          </Link>
        </li>

        <li>
          <Link to="/proyectos">
            PROYECTOS
          </Link>
        </li>

        <li>
          <Link to="/#informacion">
            INFORMACIÓN
          </Link>
        </li>

        <li>
          <Link to="/apoya">
            APOYA
          </Link>
        </li>

        <li>
          <a href="/#contacto">
            CONTACTO
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;