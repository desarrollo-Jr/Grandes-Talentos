import { useState } from "react";
import type { FormEvent } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import empresasImg from "../assets/images/sumate/empresas.webp";
import mentoresImg from "../assets/images/sumate/mentores.webp";
import voluntariosImg from "../assets/images/sumate/voluntarios.webp";

import "../styles/sumate.css";

type TipoFormulario =
  | "empresas"
  | "mentores"
  | "voluntarios"
  | null;

function Sumate() {
  const [formularioActivo, setFormularioActivo] =
    useState<TipoFormulario>(null);

  const enviarFormulario = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    alert("Formulario enviado correctamente");
  };

  return (
    <>
      <Header />

      <main className="sumate-page">

        {/* ENCABEZADO */}
        <div className="sumate-page-header">

          <h1>
            ¡SÚMATE A NUESTRA RED DE APOYO!
          </h1>

          <p>
            Selecciona la forma en la que deseas participar
            con Fundación Grandes Talentos.
          </p>

        </div>


        {/* CONTENEDOR */}
        <div className="sumate-cards">

          {/* ========================
              EMPRESAS
          ======================== */}

          <div className="sumate-option">

            {formularioActivo === "empresas" ? (

              <div className="sumate-form-box">

                <h2>EMPRESAS</h2>

                <form
                  className="sumate-form"
                  onSubmit={enviarFormulario}
                >

                  <input
                    type="text"
                    placeholder="Nombre Completo..."
                    required
                  />

                  <input
                    type="email"
                    placeholder="Correo de contacto..."
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Teléfono..."
                    required
                  />

                  <input
                    type="text"
                    placeholder="Organización / Empresa..."
                    required
                  />

                  <input
                    type="text"
                    placeholder="Ciudad..."
                    required
                  />

                  <input
                    type="text"
                    placeholder="Área de interés..."
                  />

                  <textarea
                    placeholder="Comentarios..."
                    rows={2}
                  />

                  <button
                    type="submit"
                    className="form-submit"
                  >
                    ENVIAR
                  </button>

                </form>

                <button
                  type="button"
                  className="form-back"
                  onClick={() => setFormularioActivo(null)}
                >
                  REGRESAR
                </button>

              </div>

            ) : (

              <>
                <button
                  type="button"
                  className="sumate-image-button"
                  onClick={() =>
                    setFormularioActivo("empresas")
                  }
                >
                  <img
                    src={empresasImg}
                    alt="Empresas"
                  />
                </button>

                <h2>EMPRESAS</h2>

                <button
                  type="button"
                  className="sumate-button"
                  onClick={() =>
                    setFormularioActivo("empresas")
                  }
                >
                  ¡SUMARME!
                </button>
              </>

            )}

          </div>


          {/* ========================
              VOLUNTARIOS
          ======================== */}

          <div className="sumate-option">

            {formularioActivo === "voluntarios" ? (

              <div className="sumate-form-box">

                <h2>VOLUNTARIOS</h2>

                <form
                  className="sumate-form"
                  onSubmit={enviarFormulario}
                >

                  <input
                    type="text"
                    placeholder="Nombre Completo..."
                    required
                  />

                  <input
                    type="email"
                    placeholder="Correo de contacto..."
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Teléfono..."
                    required
                  />

                  <input
                    type="text"
                    placeholder="Ciudad..."
                    required
                  />

                  <input
                    type="text"
                    placeholder="Área de interés..."
                  />

                  <input
                    type="text"
                    placeholder="Disponibilidad..."
                  />

                  <textarea
                    placeholder="Comentarios..."
                    rows={2}
                  />

                  <button
                    type="submit"
                    className="form-submit"
                  >
                    ENVIAR
                  </button>

                </form>

                <button
                  type="button"
                  className="form-back"
                  onClick={() => setFormularioActivo(null)}
                >
                  REGRESAR
                </button>

              </div>

            ) : (

              <>
                <button
                  type="button"
                  className="sumate-image-button"
                  onClick={() =>
                    setFormularioActivo("voluntarios")
                  }
                >
                  <img
                    src={voluntariosImg}
                    alt="Voluntarios"
                  />
                </button>

                <h2>VOLUNTARIOS</h2>

                <button
                  type="button"
                  className="sumate-button"
                  onClick={() =>
                    setFormularioActivo("voluntarios")
                  }
                >
                  ¡SUMARME!
                </button>
              </>

            )}

          </div>


          {/* ========================
              MENTORES
          ======================== */}

          <div className="sumate-option">

            {formularioActivo === "mentores" ? (

              <div className="sumate-form-box">

                <h2>MENTORES</h2>

                <form
                  className="sumate-form"
                  onSubmit={enviarFormulario}
                >

                  <input
                    type="text"
                    placeholder="Nombre Completo..."
                    required
                  />

                  <input
                    type="email"
                    placeholder="Correo de contacto..."
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Teléfono..."
                    required
                  />

                  <input
                    type="text"
                    placeholder="Profesión..."
                    required
                  />

                  <input
                    type="text"
                    placeholder="Ciudad..."
                    required
                  />

                  <input
                    type="text"
                    placeholder="Área de experiencia..."
                  />

                  <textarea
                    placeholder="Comentarios..."
                    rows={2}
                  />

                  <button
                    type="submit"
                    className="form-submit"
                  >
                    ENVIAR
                  </button>

                </form>

                <button
                  type="button"
                  className="form-back"
                  onClick={() => setFormularioActivo(null)}
                >
                  REGRESAR
                </button>

              </div>

            ) : (

              <>
                <button
                  type="button"
                  className="sumate-image-button"
                  onClick={() =>
                    setFormularioActivo("mentores")
                  }
                >
                  <img
                    src={mentoresImg}
                    alt="Mentores"
                  />
                </button>

                <h2>MENTORES</h2>

                <button
                  type="button"
                  className="sumate-button"
                  onClick={() =>
                    setFormularioActivo("mentores")
                  }
                >
                  ¡SUMARME!
                </button>
              </>

            )}

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Sumate;