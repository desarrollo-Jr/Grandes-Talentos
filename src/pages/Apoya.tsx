import Header from "../components/Header";
import Footer from "../components/Footer";

import donacionImg from "../assets/images/imagen3.webp";

import "../styles/apoya.css";

function Apoya() {
  const enviarDonacion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Formulario de donación listo para conectar con una pasarela de pago.");
  };

  return (
    <>
      <Header />

      <main className="apoya-page">

        {/* IMAGEN SUPERIOR */}
        <div
          className="apoya-hero"
          style={{
            backgroundImage: `url(${donacionImg})`,
          }}
        ></div>


        {/* FORMULARIO */}
        <section className="donation-form-section">

          <form
            className="donation-form"
            onSubmit={enviarDonacion}
          >

            <h1>
              TU DONATIVO BRINDA ATENCIÓN MÉDICA DE CALIDAD
              A MILES DE NIÑOS Y NIÑAS
            </h1>


            {/* FILA 1 */}
            <div className="donation-grid">

              <select defaultValue="200">
                <option value="200">$200 pesos</option>
                <option value="500">$500 pesos</option>
                <option value="1000">$1,000 pesos</option>
                <option value="2000">$2,000 pesos</option>
              </select>

              <input
                type="text"
                placeholder="Nombre"
                required
              />

              <input
                type="text"
                placeholder="Apellido Paterno"
                required
              />

              <input
                type="text"
                placeholder="Apellido Materno"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                required
              />

            </div>


            {/* FILA 2 */}
            <div className="donation-second-row">

              <div className="donation-frequency">

                <label>
                  <input
                    type="radio"
                    name="tipoDonacion"
                    value="unica"
                    defaultChecked
                  />

                  <span>
                    Donación Única
                  </span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="tipoDonacion"
                    value="mensual"
                  />

                  <span>
                    Mensual (Padrinos)
                  </span>
                </label>

              </div>


              <select defaultValue="mexico">
                <option value="mexico">México</option>
              </select>


              <select defaultValue="hidalgo">
                <option value="hidalgo">Hidalgo</option>
                <option value="cdmx">Ciudad de México</option>
                <option value="puebla">Puebla</option>
              </select>


              {/* Estos campos son solo visuales por ahora */}
              <input
                type="text"
                placeholder="No. de Tarjeta"
                readOnly
              />

              <input
                type="text"
                placeholder="MM/AA"
                readOnly
              />

              <input
                type="text"
                placeholder="CVV"
                readOnly
              />

            </div>


            {/* PARTE INFERIOR */}
            <div className="donation-bottom">

              <div className="donation-checks">

                <label>
                  <input
                    type="checkbox"
                    required
                  />

                  <span>
                    He leído y aceptado los Términos y políticas de privacidad
                  </span>
                </label>

                <label>
                  <input type="checkbox" />

                  <span>
                    Requiero factura
                  </span>
                </label>

              </div>


              <div className="payment-methods">
                <div>VISA</div>
                <div>Mastercard</div>
                <div>AMEX</div>
              </div>


              <button
                type="submit"
                className="donation-submit"
              >
                Hacer Donativo
              </button>

            </div>

          </form>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Apoya;