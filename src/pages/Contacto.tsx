import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/contact.css";

function Contacto() {
  return (
    <section className="contact-page">
      <div className="contact-page-container">

        <h1>CONTÁCTANOS</h1>

        <div className="contact-page-info">

          {/* TELÉFONO */}
          <div className="contact-page-item">
            <div className="contact-page-icon">
              <FaPhone />
            </div>

            <span>Teléfono</span>
            <p>(771) 257 6279</p>
          </div>

          {/* CORREO */}
          <div className="contact-page-item contact-page-border">
            <div className="contact-page-icon">
              <FaEnvelope />
            </div>

            <span>Mail</span>
            <p>contacto@gintecaply.com</p>
          </div>

          {/* UBICACIÓN */}
          <div className="contact-page-item">
            <div className="contact-page-icon">
              <FaMapMarkerAlt />
            </div>

            <span>Ubicación</span>
            <p>Pachuca, Hidalgo</p>
          </div>

        </div>

        <form
          className="contact-page-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Tu nombre..."
          />

          <input
            type="email"
            placeholder="Tu correo..."
          />

          <textarea
            placeholder="Tu mensaje..."
          />

          <button type="submit">
            ENVIAR
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contacto;