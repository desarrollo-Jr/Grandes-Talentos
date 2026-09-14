import "../styles/footer.css";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        
        <div className="footer-column">
          <h3>
            Transparencia
            </h3>

          <Link to="/nosotros">
          Nosotros
          </Link>

          <Link to="/derechos-humanos">
            Derechos Humanos
          </Link>

          <Link to="/apoyos">
            Apoyos
          </Link>

          <Link to="/informacion">
            Información
          </Link>

          <Link to="/contacto">
            Contacto
          </Link>

          <Link to="/aviso-privacidad">
            Aviso de privacidad
          </Link>
        </div>

        
        <div className="footer-column">
          <h3>Aliados
          </h3>

          <a href="#">Empresa 1</a>
          <a href="#">Empresa 2</a>
          <a href="#">Empresa 3</a>
          <a href="#">Empresa 4</a>
          <a href="#">Empresa 5</a>
          <a href="#">Empresa 6</a>
        </div>

        
        <div className="footer-column">
          <h3>Redes</h3>

          <a
            href="https://www.facebook.com/GrandesTalentos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
            Facebook
          </a>

          <a
            href="https://www.instagram.com/GrandesTalentos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            Instagram
          </a>

          <a
            href="https://www.youtube.com/@GrandesTalentos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
            Youtube
          </a>

          <a
            href="https://twitter.com/GrandesTalentos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
            Twitter
          </a>

          <a
            href="https://www.tiktok.com/@GrandesTalentos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
            TikTok
          </a>

          <a
            href="https://wa.me/527711234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>

        {/* LOGO */}
        <div className="footer-brand">

          <img
            src="/logo2.webp"
            alt="Fundación Grandes Talentos"
            className="footer-logo"
          />

          <p>
            Fundación Grandes Talentos Índigo A.C.
          </p>

          <strong>México 2024</strong>

        </div>

      </div>


      {/* FOOTER ÍNDIGO */}
      <div className="footer-indigo">

        <img
          src="/logo1.webp"
          alt="Grupo Índigo"
        />

        <div className="footer-social-bottom">

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>

          <a
            href="https://wa.me/527711234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <div className="footer-social-icons">

            <a
              href="https://www.facebook.com/TU_PAGINA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/@TU_CANAL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>

            <a
              href="https://wa.me/527711234567"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>


      {/* FOOTER INFERIOR */}
      <div className="footer-bottom">

        <div className="footer-location">
          <FaMapMarkerAlt />
          <span>México</span>
        </div>

        <p>
          Copyright © 2024 powered by Grandes Talentos. All rights reserved
          by Grupo Índigo
        </p>

        <div className="footer-links">
          <a href="#">Aviso de privacidad</a>
          <a href="#">Términos y condiciones</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;