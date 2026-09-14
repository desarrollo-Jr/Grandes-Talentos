import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import despensasImg from "../assets/images/despensas.jpg";
import utilesImg from "../assets/images/imagen2.webp";
import consultaImg from "../assets/images/imagen3.webp";
import navidadImg from "../assets/images/imagen4.jpg";
import reyMagoImg from "../assets/images/imagen5.jpg";
import cemPaquiImg from "../assets/images/imagen6.jpg";

import "../styles/proyectos.css";

function Proyectos() {
  return (
    <>
      <Header />

      <main className="projects-page">

        <div className="projects-container">

          {/* =========================================
              DESPENSAS
          ========================================= */}

          <article className="project-card">

            <img
              src={despensasImg}
              alt="Despensas"
              className="project-image"
            />

            <h2>DESPENSAS</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <a
              href="/#donaciones"
              className="project-button"
            >
              <span>›</span>
              ¡DONA AQUÍ!
            </a>

          </article>


          {/* =========================================
              ÚTILES ESCOLARES
          ========================================= */}

          <article className="project-card">

            <img
              src={utilesImg}
              alt="Útiles escolares"
              className="project-image"
            />

            <h2>ÚTILES ESCOLARES</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <a
              href="/#donaciones"
              className="project-button"
            >
              <span>›</span>
              ¡DONA AQUÍ!
            </a>

          </article>


          {/* =========================================
              CONSULTA MÉDICA
          ========================================= */}

          <article className="project-card">

            <img
              src={consultaImg}
              alt="Consulta médica"
              className="project-image"
            />

            <h2>CONSULTA MÉDICA</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <a
              href="/#donaciones"
              className="project-button"
            >
              <span>›</span>
              ¡DONA AQUÍ!
            </a>

          </article>


          {/* =========================================
              REGALOS DE NAVIDAD
          ========================================= */}

          <article className="project-card">

            <img
              src={navidadImg}
              alt="Regalos de Navidad"
              className="project-image"
            />

            <h2>REGALOS DE NAVIDAD</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <a
              href="/#donaciones"
              className="project-button"
            >
              <span>›</span>
              ¡DONA AQUÍ!
            </a>

          </article>


          {/* =========================================
              SÉ UN REY MAGO
          ========================================= */}

          <article className="project-card">

            <img
              src={reyMagoImg}
              alt="Sé un Rey Mago"
              className="project-image"
            />

            <h2>SÉ UN REY MAGO</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <a
              href="/#donaciones"
              className="project-button"
            >
              <span>›</span>
              ¡DONA AQUÍ!
            </a>

          </article>


          {/* =========================================
              CEM PAQUI
          ========================================= */}

          <article className="project-card">

            <img
              src={cemPaquiImg}
              alt="CEM PAQUI"
              className="project-image"
            />

            <h2>CEM PAQUI</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <Link
              to="/cempaqui"
              className="project-button cem-paqui-button"
            >
              <span>›</span>
              VER MÁS
            </Link>

          </article>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Proyectos;