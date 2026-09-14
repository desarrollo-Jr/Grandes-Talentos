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
          <Link to="/Nosotros">
            NOSOTROS
          </Link>
        </li>
        <li>
          <Link to="/">
            INFORMACIÓN
          </Link>
        </li>
        <Link to="/apoya">
            APOYA
          </Link>
       

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