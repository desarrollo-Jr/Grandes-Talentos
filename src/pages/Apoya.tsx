import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/apoya.css";

import imagenCausa from "../assets/images/iamgen01.jpg";
import imagenApoya from "../assets/images/imagen3.webp";
import imagenAyuda from "../assets/images/imagen2.webp";

function Apoya() {
  return (
    <>
      <Header />

      <main className="apoya-page">

        {/* =================================================
            APOYA LA CAUSA
        ================================================= */}
        <section className="causa-section">

          <div className="causa-container">

            <div className="causa-image">
              <img
                src={imagenCausa}
                alt="Apoya la causa"
              />
            </div>

            <div className="causa-content">

              <h2>Apoya la Causa</h2>

              <p>
                Una de las afectaciones más graves fue en los ingresos
                familiares y llevó a que 1 de cada 3 hogares con niños
                experimentase inseguridad alimentaria moderada o severa;
                es decir, carencia de alimentos o situación de hambre.
                El cierre de las escuelas obligó a más de 25.4 millones
                de alumnos de educación básica a continuar sus estudios
                a través del programa “Aprende en casa”.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            APOYA / AYUDA
        ================================================= */}
        <section className="ayuda-section">

          <div className="ayuda-grid">

            {/* APOYA */}
            <article className="ayuda-card">

              <img
                src={imagenApoya}
                alt="Apoya"
                className="ayuda-image"
              />

              <h2>APOYA</h2>

              <p>
                La violencia contra niñas, niños y adolescentes ocurre en
                varios ámbitos: en el hogar, la escuela, su comunidad,
                las instituciones, el medio digital y -de manera transversal-
                por cuestiones de género, puesto que las niñas y adolescentes
                son más propensas a sufrir violencia sexual y agresiones
                psicológicas en la mayoría de los entornos y, por otro lado,
                los hombres suelen ser las principales víctimas de homicidios.
              </p>

            </article>


            {/* AYUDA */}
            <article className="ayuda-card">

              <img
                src={imagenAyuda}
                alt="Ayuda"
                className="ayuda-image"
              />

              <h2>AYUDA</h2>

              <p>
                Las niñas sufren más agresiones psicológicas que los niños,
                mientras que los niños suelen ser disciplinados con castigos
                físicos u otras formas de disciplina severa (INSP, ENIM 2015).
                De acuerdo con los datos existentes, el 63% de las niñas y
                niños de entre 1 y 14 años han experimentado al menos una
                forma de disciplina violenta.
              </p>

            </article>

          </div>

        </section>


        {/* =================================================
            VOLUNTARIADO
        ================================================= */}
        <section className="voluntariado-section">

          {/* TÍTULO */}
          <div className="voluntariado-title">

            <span></span>

            <h2>VOLUNTARIADO</h2>

            <span></span>

          </div>


          {/* =================================================
              MENTORÍA / CONSULTA
          ================================================= */}
          <div className="voluntariado-grid">

            {/* MENTORÍA */}
            <article className="voluntariado-item">

              <div className="voluntariado-box">

                <div className="voluntariado-icon">
                  ⚙
                </div>

                <div className="voluntariado-box-text">
                  <h3>MENTORÍA</h3>
                </div>

              </div>

              <p>
                Si eres un profesional en tu ramo tienes facilidad para
                modelar el aprendizaje de los niños y niñas en los ejes
                principales de nuestra propuesta: tecnología, diseño,
                arte y cultura, te necesitamos. Aporta tiempo de calidad
                a nuestros programas de mentoría.
              </p>

            </article>


            {/* CONSULTA */}
            <article className="voluntariado-item">

              <div className="voluntariado-box">

                <div className="voluntariado-icon">
                  ⚙
                </div>

                <div className="voluntariado-box-text">
                  <h3>CONSULTA</h3>
                </div>

              </div>

              <p>
                Si eres un profesional de la salud física y mental este
                es tu momento de devolver al entorno la buena fortuna que
                has tenido de ser un profesionista. Ayúdanos donando tiempo
                de calidad en consulta para los diversos casos de niños
                con alguna necesidad física o mental, para que su situación
                mejore y promovamos el bienestar de los niños y niñas mexicanos.
              </p>

            </article>

          </div>


          {/* =================================================
              ÚNETE A NUESTRO VOLUNTARIADO
          ================================================= */}
          <div className="voluntariado-subtitle">

            <span></span>

            <h2>
              ÚNETE A NUESTRO VOLUNTARIADO Y
              <br />
              TRANSFORMA VIDAS
            </h2>

            <span></span>

          </div>


          <p className="voluntariado-intro">
            Ser voluntario es una oportunidad para marcar la diferencia
            en la vida de muchos niños que necesitan apoyo, orientación
            y cariño. Ya sea de forma presencial o en línea, tu ayuda
            puede cambiar su futuro. ¡Súmate a nuestra comunidad y juntos
            construyamos un mundo mejor!
          </p>


          {/* =================================================
              PRESENCIAL / EN LÍNEA
          ================================================= */}
          <div className="voluntariado-grid">

            {/* PRESENCIAL */}
            <article className="voluntariado-item">

              <div className="voluntariado-box">

                <div className="voluntariado-icon">
                  ⚙
                </div>

                <div className="voluntariado-box-text">

                  <small>VOLUNTARIADO</small>

                  <h3>PRESENCIAL</h3>

                </div>

              </div>

              <p>
                Forma parte de nuestro equipo de voluntarios presenciales
                y ayuda directamente a niños en situaciones vulnerables.
                Acompáñalos en actividades educativas, recreativas y de
                desarrollo personal, brindándoles el apoyo y la motivación
                que necesitan.
              </p>

            </article>


            {/* EN LÍNEA */}
            <article className="voluntariado-item">

              <div className="voluntariado-box">

                <div className="voluntariado-icon">
                  ⚙
                </div>

                <div className="voluntariado-box-text">

                  <small>VOLUNTARIADO</small>

                  <h3>EN LÍNEA</h3>

                </div>

              </div>

              <p>
                Si prefieres apoyar desde casa, nuestro programa de
                voluntariado en línea te permite brindar acompañamiento
                educativo y emocional a niños a través de plataformas
                digitales. Puedes ayudarlos con tareas, lecturas o
                simplemente ser un apoyo en su día a día.
              </p>

            </article>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Apoya;