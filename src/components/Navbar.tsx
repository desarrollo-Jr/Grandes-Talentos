import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cerrarMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* BOTÓN HAMBURGUESA SOLO PARA CELULAR */}
      <button
        className="menu-toggle"
        type="button"
        aria-label="Abrir menú"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>


      {/* OPCIONES */}
      <div
        className={`navbar-links ${
          menuOpen ? "menu-open" : ""
        }`}
      >

        <Link
          to="/sumate"
          onClick={cerrarMenu}
        >
          ¡SÚMATE!
        </Link>

        <Link
          to="/nosotros"
          onClick={cerrarMenu}
        >
          NOSOTROS
        </Link>

        <Link
          to="/"
          onClick={cerrarMenu}
        >
          INFORMACIÓN
        </Link>

        <Link
          to="/apoya"
          onClick={cerrarMenu}
        >
          APOYA
        </Link>

        <a
          href="/#contacto"
          onClick={cerrarMenu}
        >
          CONTACTO
        </a>

      </div>

    </nav>
  );
}

export default Navbar;