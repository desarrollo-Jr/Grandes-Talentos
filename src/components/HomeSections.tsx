import "../styles/home.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import brochurePdf from "../assets/documents/BROCHURE.pdf";
export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-left">
        <div className="hero-content">
          <h2>TEXTO DE APOYO</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <a
            href={brochurePdf}
            download="BROCHURE-Grandes-Talentos.pdf"
            className="hero-button"
          >
            DESCARGAR
          </a>
        </div>

        <div className="decoration decoration-one"></div>
        <div className="decoration decoration-two"></div>
        <div className="decoration decoration-three"></div>
      </div>

      <div className="hero-right">
        <div className="hero-shape shape-one"></div>
        <div className="hero-shape shape-two"></div>
        <div className="hero-shape shape-three"></div>
      </div>
    </section>
  );
}






const values = [
  {
    title: "TEXTO DE APOYO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "TEXTO DE APOYO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "TEXTO DE APOYO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "TEXTO DE APOYO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "TEXTO DE APOYO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export function ValuesSection() {
  return (
    <section className="values-section" id="valores">
      <div className="values-header">
        <h2>TEXTO DE APOYO</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      </div>

      <div className="values-grid">
        {values.map((value, index) => (
          <article className="value-card" key={index}>
            <div className="value-icon">
              <span>⚙</span>
            </div>

            <h3>{value.title}</h3>

            <p>{value.text}</p>
          </article>
        ))}
      </div>

      <div className="values-label">
        VALORES DE LA
        <br />
        FUNDACIÓN
      </div>
    </section>
  );
}

export function ProgramsSection() {
  return (
    <section className="programs-section" id="programas">

      <h2 className="programs-title">
        PROGRAMAS
      </h2>

      <div className="programs-container">

        {/* PROGRAMA 1 */}
        <div className="program-item">

          <img
            src="../public/donation1.webp"
            alt="La magia de los milagros"
            className="program-image"
          />

          <div className="program-pill">
            LA MAGIA DE LOS MILAGROS
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </div>


        {/* PROGRAMA 2 */}
        <div className="program-item">

          <img
            src="../public/donation4.webp"
            alt="Beca un talento"
            className="program-image"
          />

          <div className="program-pill">
            BECA UN TALENTO
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </div>


        {/* PROGRAMA 3 */}
        <div className="program-item">

          <img
            src="../public/donation5.webp"
            alt="1x1 Tecnológico"
            className="program-image"
          />

          <div className="program-pill">
            1X1 TECNOLÓGICO
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </div>

      </div>

    </section>
  );
}


export function DonationCards() {
  return (
    <section className="donation-section">

      <div className="donation-card">
        <img src="/donation1.webp" alt="Apoyo a niños" />

        <h2>TEXTO DE APOYO</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        <a href="#" className="donation-button">
          <span>›</span>
          ¡DONA AQUÍ!
        </a>
      </div>

      <div className="donation-card">
        <img src="/donation2.jpg" alt="" />

        <h2>TEXTO DE APOYO</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        <a href="#" className="donation-button">
          <span>›</span>
          ¡DONA AQUÍ!
        </a>
      </div>

    </section>
  );
}



export function LocationSection() {
  return (
    <section className="location-section">
      <div className="location-map">
        <iframe
          title="Ubicación Fundación Grandes Talentos"
          src="https://www.google.com/maps?q=Calle+Campo+Deportivo+107,+Santa+Julia,+Pachuca+de+Soto,+Hidalgo,+42080&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      <div className="location-info">
        <div className="location-block">
          <h2>UBICACIÓN</h2>

          <p>
            Calle Campo Deportivo #107
            <br />
            Col. Santa Julia, Pachuca de Soto
            <br />
            Estado de Hidalgo
            <br />
            C.P. 42080
          </p>
        </div>

        <div className="location-block">
          <h2></h2>

          <p>
            771 442 1189
          </p>

          <p>
            <strong>Correo de Contacto</strong>
            <br />
            contacto@grandestalentos.org
          </p>
          <p>
        <div className="location-block"></div>
            <strong>Horario de Atención</strong>
            <br />
            Lunes a Viernes de 9:00 am - 5:00 pm
          </p>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-container">

        <h2 className="contact-title">
          CONTÁCTANOS
        </h2>

        <div className="contact-info">

          <div className="contact-info-item">
            <span className="contact-icon">
              <FiPhone />
            </span>

            <span className="contact-label">
              Teléfono
            </span>

            <p>(771) 257 6279</p>
          </div>


          <div className="contact-info-item">
            <span className="contact-icon">
              <FiMail />
            </span>

            <span className="contact-label">
              Mail
            </span>

            <p>contacto@grandestalentos.org</p>
          </div>


          <div className="contact-info-item">
            <span className="contact-icon">
              <FiMapPin />
            </span>

            <span className="contact-label">
              Ubicación
            </span>

            <p>Pachuca, Hidalgo</p>
          </div>

        </div>


        <form
          className="contact-form"
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
export function BannerSection() {
  return (
    <section className="banner-section">
      <video
        className="banner-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/banner.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
    </section>
  );
}
export function VolunteerSection() {
  return (
    <section className="volunteer-section" id="voluntariado">
      <div className="volunteer-title">
        <span></span>
        <h2>VOLUNTARIADO</h2>
        <span></span>
      </div>

      <p className="volunteer-intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </p>

      <div className="volunteer-grid">
        <article className="volunteer-item">
          <div className="volunteer-box">
            <div className="volunteer-icon">⚙</div>

            <div>
              <h3>TITULO</h3>
              <strong>SUBTITULO</strong>
            </div>
          </div>

          <h4>TEXTO DE APOYO</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <a href="#" className="volunteer-button">
            <span>›</span>
            ¡DONA AQUÍ!
          </a>
        </article>

        <article className="volunteer-item">
          <div className="volunteer-box">
            <div className="volunteer-icon">⚙</div>

            <div>
              <h3>TITULO</h3>
              <strong>SUBTITULO</strong>
            </div>
          </div>

          <h4>TEXTO DE APOYO</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <a href="#" className="volunteer-button">
            <span>›</span>
            ¡DONA AQUÍ!
          </a>
        </article>
      </div>
    </section>
  );
}
