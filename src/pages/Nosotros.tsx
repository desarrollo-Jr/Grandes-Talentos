import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/Nosotros.css";

import imagenNosotros from "../assets/images/imagen02.jpg";

function Nosotros() {
  return (
    <>
      <Header />

      <main className="nosotros-page">

        {/* ==============================
            SECCIÓN NOSOTROS
        ============================== */}
        <section className="nosotros-section">

          <div className="nosotros-container">

            <div className="nosotros-image">
              <img
                src={imagenNosotros}
                alt="Fundación Grandes Talentos"
              />
            </div>

            <div className="nosotros-card">

              <h1>Nosotros</h1>

              <p>
                En Fundación Grandes Talentos Indigo A.C. estamos
                comprometidos con la educación en etapas tempranas de los
                niños y niñas de México, mayormente a través de canales
                tecnológicos que faciliten la detección de grandes talentos.
              </p>

              <p>
                Si nuestra causa es tu causa, ¡únete y sirvamos juntos!
                Comenzamos esta iniciativa apoyando de forma altruista a
                comunidades aledañas a la zona de Villa de Tezontepec,
                Hidalgo, México.
              </p>

              <p>
                Reiteradamente, en Navidad y Reyes nos reuníamos un número
                de amigos altruistas y donábamos juguetes, dinero, ropa y
                calzado para que los niños y niñas más necesitados tuvieran
                un juguete, despertando en ellos la magia de creer en un
                poder superior que los cuidaba.
              </p>

            </div>

          </div>

        </section>


        {/* ==============================
            NUESTRO PROPÓSITO
        ============================== */}
        <section className="proposito-section">

          <div className="proposito-container">

            <div className="proposito-title">

              <h2>
                NUESTRO
                <span>PROPÓSITO</span>
              </h2>

              <div className="proposito-line"></div>

            </div>


            <div className="proposito-text">

              <p>
                Al cabo de unos años decidimos que era momento de diseñar
                un mecanismo de ayuda más robusto, en el que pudiéramos
                sumar más personas, empresas y organizaciones comprometidas
                con un México más competitivo, un entorno más equitativo
                y con oportunidades un poco más equilibradas para quienes
                demostraban tener un talento digno de apoyarse para destacar
                en el mundo.
              </p>

              <p>
                Niños y niñas que tengan la fuerza y la energía para cambiar
                el mundo y que solo necesiten un voto de confianza y un
                aliado comprometido que los acompañe.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Nosotros;