import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import logoCemPaqui from "../assets/images/imagen6.jpg";
import imagen3 from "../assets/images/imagen3.webp";
import imagen4 from "../assets/images/imagen2.webp";
import imagen5 from "../assets/images/imagen5.jpg";

import "../styles/Cempaqui.css";

function Cempaqui() {
  return (
    <>
      <Header />

      <main className="cempaqui-page">

        {/* =====================================================
            PRESENTACIÓN CEM PAQUI
        ====================================================== */}

        <section className="cem-presentacion">

          <div className="cem-presentacion-logo">
            <img
              src={logoCemPaqui}
              alt="Logo CEM PAQUI"
            />
          </div>

          <div className="cem-presentacion-info">

            <h1>CEM PAQUI</h1>

            <p>
              CEM PAQUI® es un Ensamble Inclusivo de carácter artístico,
              educativo, cultural y social que demuestra que la diversidad
              puede convertirse en una poderosa fuente de creación artística.
            </p>

            <p>
              Integra a personas con distintas discapacidades y
              neurodivergencias en un espacio de expresión musical colectiva,
              donde cada integrante aporta su talento, personalidad y forma
              particular de sentir y expresarse.
            </p>

            <p>
              Su propuesta artística busca generar inclusión, identidad
              cultural y participación social a través de la música.
            </p>

          </div>

        </section>


        {/* =====================================================
            GALERÍA PRINCIPAL
        ====================================================== */}

        <section className="cem-galeria-principal">

          <img
            src={imagen3}
            alt="Actividad CEM PAQUI"
          />

          <img
            src={imagen4}
            alt="Integrantes de CEM PAQUI"
          />

          <img
            src={imagen5}
            alt="Presentación CEM PAQUI"
          />

        </section>


        {/* =====================================================
            NUESTRA HISTORIA
        ====================================================== */}

        <section className="cem-historia">

          <h2>NUESTRA HISTORIA</h2>

          <div className="cem-texto">

            <p>
              La historia de CEM PAQUI no comenzó con la creación del ensamble.
              Es el resultado de años de trabajo altruista y filantrópico del
              Mtro. Carlos Bastón Coyocohualli, colaborando con asociaciones y
              proyectos de la sociedad civil dedicados a la atención y
              acompañamiento de personas con discapacidad, entre ellas
              personas con síndrome de Down, autismo, hipoacusia y otras
              condiciones.
            </p>

            <p>
              Este camino permitió acumular experiencias, conocer diferentes
              necesidades y desarrollar una visión propia sobre la manera en
              que el arte y la música pueden convertirse en herramientas de
              inclusión, desarrollo humano y participación social.
            </p>

          </div>

        </section>


        {/* =====================================================
            TRAYECTORIA
        ====================================================== */}

        <section className="cem-trayectoria">

          <div className="cem-trayectoria-texto">

            <p>
              Como parte de esta trayectoria, el Mtro. Carlos Bastón
              Coyocohualli participó en distintos trabajos relacionados con la
              inclusión y, de manera destacada, como asesor de la Cámara de
              Diputados del Estado de Hidalgo durante la LXV Legislatura, en
              los trabajos para la creación de la nueva legislación estatal
              para la atención, protección, visibilización e inclusión de las
              personas con condición del espectro autista.
            </p>

            <p>
              De esta experiencia y de los años de trabajo directo con
              personas, familias y organizaciones surge el Método Pedagógico
              Coyocohualli®, una propuesta propia basada en la adaptación, la
              accesibilidad, la participación y el desarrollo de las
              capacidades de cada persona.
            </p>

          </div>


          <div className="cem-collage">

            <div className="cem-cuadro-azul"></div>

            <img
              className="cem-collage-grande"
              src={imagen3}
              alt="Actividad musical CEM PAQUI"
            />

            <div className="cem-collage-derecha">

              <img
                src={imagen4}
                alt="Actividad inclusiva CEM PAQUI"
              />

              <img
                src={imagen5}
                alt="Presentación artística CEM PAQUI"
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            NACIMIENTO CEM PAQUI
        ====================================================== */}

        <section className="cem-nacimiento">

          <div className="cem-nacimiento-columna">

            <p>
              Posteriormente, el Mtro. Carlos Bastón Coyocohualli recibió la
              convocatoria del Mtro. Alfonso Hayyim Flores Barrera, desde la
              Dirección General para la Inclusión de las Personas con
              Discapacidad del Estado de Hidalgo, para participar en la creación
              de un proyecto musical inclusivo.
            </p>

          </div>


          <div className="cem-nacimiento-columna">

            <p>
              La convocatoria no significó la incorporación del ensamble a
              dicha Dirección: CEM PAQUI nació como un proyecto artístico
              independiente, bajo la dirección del Mtro. Carlos Bastón
              Coyocohualli, a partir de aquella invitación.
            </p>

            <p>
              El maestro aceptó el llamado y puso su experiencia al servicio
              de esta nueva propuesta.
            </p>

            <p>
              Así nació CEM PAQUI®, el 2 de septiembre de 2025.
            </p>

          </div>

        </section>


        {/* =====================================================
            IMAGEN DESTACADA
        ====================================================== */}

        <section className="cem-imagen-destacada">

          <img
            src={imagen4}
            alt="CEM PAQUI presentación musical"
          />

          <div className="cem-descripcion">

            <p>
              CEM PAQUI desarrolla una propuesta artística propia que combina
              la música inclusiva con ritmos populares y sonoridades
              ancestrales de México.
            </p>

            <p>
              Su trabajo se sustenta en dos pilares:
            </p>

          </div>

        </section>


        {/* =====================================================
            PROPUESTAS
        ====================================================== */}

        <section className="cem-propuestas">

          {/* PROPUESTA 1 */}

          <article className="cem-propuesta">

            <div className="cem-icono">
              ♿
            </div>

            <div className="cem-titulo-caja">

              <span>
                MÉTODO PEDAGÓGICO
              </span>

              <strong>
                COYOCOHUALLI
              </strong>

            </div>

            <h3>PROPUESTA</h3>

            <p>
              Una metodología desarrollada por el Mtro. Carlos Bastón
              Coyocohualli a partir de años de experiencia práctica en
              procesos de inclusión, educación musical y trabajo con personas
              con discapacidad y neurodivergencias.
            </p>

            <Link
                to="/cem-paqui/interes"
                className="cem-interesa"
                >
                <span className="cem-flecha">›</span>
                <span>Me interesa</span>
                </Link>

          </article>


          {/* PROPUESTA 2 */}

          <article className="cem-propuesta">

            <div className="cem-icono">
              ♿
            </div>

            <div className="cem-titulo-caja">

              <span>
                MODELO DE SONORIDAD ANCESTRAL
              </span>

              <strong>
                INCLUSIVA CEMPAQUI®
              </strong>

            </div>

            <h3>PROPUESTA</h3>

            <p>
              La aplicación artística y educativa de esta metodología, que
              incorpora instrumentos, ritmos y sonoridades ancestrales de
              México dentro de una experiencia musical inclusiva.
            </p>

            <p className="cem-check">
              ✓ El Método establece la forma de enseñar.
              <br />
              ✓ El Modelo convierte esa metodología en una experiencia
              artística propia.
            </p>

            <Link
                to="/cem-paqui/interes"
                className="cem-interesa"
                >
                <span className="cem-flecha">›</span>
                <span>Me interesa</span>
                </Link>

          </article>

        </section>


        {/* =====================================================
            REDES SOCIALES
        ====================================================== */}

        <section className="cem-redes">

          <div className="cem-redes-titulo">
            ¡SÍGUENOS EN NUESTRAS REDES!
          </div>

          <div className="cem-redes-fondo"></div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Cempaqui;