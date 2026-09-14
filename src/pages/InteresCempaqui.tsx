import Header from "../components/Header";
import Footer from "../components/Footer";

import logoCemPaqui from "../assets/images/imagen6.jpg";

import "../styles/interesacempaqui.css";

function InteresCempaqui() {
  return (
    <>
      <Header />

      <main className="interes-cem-page">

        <section className="interes-cem-container">

          <div className="interes-cem-logo">
            <img
              src={logoCemPaqui}
              alt="CEM PAQUI"
            />
          </div>

          <div className="interes-cem-formulario">

            <h1>¡ESCRÍBENOS!</h1>

            <p>
              ! Déjanos tu información y en breve te 
              <p>  contestaremos !</p>
            </p>

            <form>

              <input
                type="text"
                placeholder="Nombre del aspirante "
              />

              <input
                type="email"
                placeholder="Correo electrónico "
              />

              <input
                type="text"
                placeholder="Condición médica "
              />

              <textarea
                placeholder="Comentarios "
                rows={5}
              />

              <button type="submit">
                ENVIAR
              </button>

            </form>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default InteresCempaqui;