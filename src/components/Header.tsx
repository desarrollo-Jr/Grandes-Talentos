import "../styles/header.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      
      <div className="header-container">

        {/* LOGO = BOTÓN DE INICIO */}
        <Link
          to="/"
          className="logo"
          aria-label="Ir al inicio"
        >
          <img
            src="/logo2.webp"
            alt="Fundación Grandes Talentos"
            className="logo-image"
          />
        </Link>

        <Navbar />

        

      </div>
    </header>
  );
}

export default Header;