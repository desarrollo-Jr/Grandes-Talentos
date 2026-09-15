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

  const [enviando, setEnviando] = useState(false);

  /* =========================================
     ENVIAR FORMULARIO
  ========================================= */

  const enviarFormulario = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formulario = e.currentTarget;
    const formData = new FormData(formulario);

    const nombre = String(
      formData.get("nombre") || ""
    );

    const correo = String(
      formData.get("correo") || ""
    );

    const telefono = String(
      formData.get("telefono") || ""
    );

    const ciudad = String(
      formData.get("ciudad") || ""
    );

    let tipoFormulario = "Súmate";
    let mensaje = "";

    /* =========================
       VOLUNTARIOS
    ========================= */

    if (formularioActivo === "voluntarios") {
      tipoFormulario = "Voluntarios";

      const areaInteres = String(
        formData.get("areaInteres") || ""
      );

      const disponibilidad = String(
        formData.get("disponibilidad") || ""
      );

      const comentarios = String(
        formData.get("comentarios") || ""
      );

      mensaje = `
TIPO DE SOLICITUD: VOLUNTARIOS

Nombre: ${nombre}
Correo: ${correo}
Teléfono: ${telefono}
Ciudad: ${ciudad}
Área de interés: ${areaInteres}
Disponibilidad: ${disponibilidad}

Comentarios:
${comentarios}
      `;
    }

    /* =========================
       EMPRESAS
    ========================= */

    if (formularioActivo === "empresas") {
      tipoFormulario = "Empresas";

      const empresa = String(
        formData.get("empresa") || ""
      );

      const areaInteres = String(
        formData.get("areaInteres") || ""
      );

      const comentarios = String(
        formData.get("comentarios") || ""
      );

      mensaje = `
TIPO DE SOLICITUD: EMPRESAS

Nombre: ${nombre}
Correo: ${correo}
Teléfono: ${telefono}
Empresa / Organización: ${empresa}
Ciudad: ${ciudad}
Área de interés: ${areaInteres}

Comentarios:
${comentarios}
      `;
    }

    /* =========================
       MENTORES
    ========================= */

    if (formularioActivo === "mentores") {
      tipoFormulario = "Mentores";

      const profesion = String(
        formData.get("profesion") || ""
      );

      const areaExperiencia = String(
        formData.get("areaExperiencia") || ""
      );

      const comentarios = String(
        formData.get("comentarios") || ""
      );

      mensaje = `
TIPO DE SOLICITUD: MENTORES

Nombre: ${nombre}
Correo: ${correo}
Teléfono: ${telefono}
Profesión: ${profesion}
Ciudad: ${ciudad}
Área de experiencia: ${areaExperiencia}

Comentarios:
${comentarios}
      `;
    }

    try {
      setEnviando(true);

      /*
        IMPORTANTE:
        Se utiliza la misma estructura
        que el formulario de CONTACTO.
      */

      const respuesta = await fetch(
        "/api/enviar-correo",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            tipo: "Contacto",
            nombre,
            correo,
            mensaje: `
FORMULARIO SÚMATE
----------------------------

Categoría: ${tipoFormulario}

${mensaje}
            `,
          }),
        }
      );

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(
          resultado.mensaje ||
            "No se pudo enviar el formulario"
        );
      }

      alert(
        "Formulario enviado correctamente"
      );

      formulario.reset();

      setFormularioActivo(null);
    } catch (error) {
      console.error(
        "Error al enviar formulario:",
        error
      );

      alert(
        "No se pudo enviar el formulario. Intenta nuevamente."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      <Header />

      <main className="sumate-page">

        {/* =========================================
            ENCABEZADO
        ========================================= */}

        <div className="sumate-page-header">

          <h1>
            ¡SÚMATE A NUESTRA RED DE APOYO!
          </h1>

          <p>
            Selecciona la forma en la que deseas
            participar con Fundación Grandes Talentos.
          </p>

        </div>


        {/* =========================================
            CONTENEDOR
        ========================================= */}

        <div className="sumate-cards">


          {/* =========================================
              EMPRESAS
          ========================================= */}

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
                    name="nombre"
                    placeholder="Nombre Completo..."
                    required
                  />

                  <input
                    type="email"
                    name="correo"
                    placeholder="Correo de contacto..."
                    required
                  />

                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono..."
                    required
                  />

                  <input
                    type="text"
                    name="empresa"
                    placeholder="Organización / Empresa..."
                    required
                  />

                  <input
                    type="text"
                    name="ciudad"
                    placeholder="Ciudad..."
                    required
                  />

                  <input
                    type="text"
                    name="areaInteres"
                    placeholder="Área de interés..."
                  />

                  <textarea
                    name="comentarios"
                    placeholder="Comentarios..."
                    rows={2}
                  />

                  <button
                    type="submit"
                    className="form-submit"
                    disabled={enviando}
                  >
                    {enviando
                      ? "ENVIANDO..."
                      : "ENVIAR"}
                  </button>

                </form>

                <button
                  type="button"
                  className="form-back"
                  disabled={enviando}
                  onClick={() =>
                    setFormularioActivo(null)
                  }
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
                    setFormularioActivo(
                      "empresas"
                    )
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
                    setFormularioActivo(
                      "empresas"
                    )
                  }
                >
                  ¡SUMARME!
                </button>
              </>

            )}

          </div>


          {/* =========================================
              VOLUNTARIOS
          ========================================= */}

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
                    name="nombre"
                    placeholder="Nombre Completo..."
                    required
                  />

                  <input
                    type="email"
                    name="correo"
                    placeholder="Correo de contacto..."
                    required
                  />

                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono..."
                    required
                  />

                  <input
                    type="text"
                    name="ciudad"
                    placeholder="Ciudad..."
                    required
                  />

                  <input
                    type="text"
                    name="areaInteres"
                    placeholder="Área de interés..."
                  />

                  <input
                    type="text"
                    name="disponibilidad"
                    placeholder="Disponibilidad..."
                  />

                  <textarea
                    name="comentarios"
                    placeholder="Comentarios..."
                    rows={2}
                  />

                  <button
                    type="submit"
                    className="form-submit"
                    disabled={enviando}
                  >
                    {enviando
                      ? "ENVIANDO..."
                      : "ENVIAR"}
                  </button>

                </form>

                <button
                  type="button"
                  className="form-back"
                  disabled={enviando}
                  onClick={() =>
                    setFormularioActivo(null)
                  }
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
                    setFormularioActivo(
                      "voluntarios"
                    )
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
                    setFormularioActivo(
                      "voluntarios"
                    )
                  }
                >
                  ¡SUMARME!
                </button>
              </>

            )}

          </div>


          {/* =========================================
              MENTORES
          ========================================= */}

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
                    name="nombre"
                    placeholder="Nombre Completo..."
                    required
                  />

                  <input
                    type="email"
                    name="correo"
                    placeholder="Correo de contacto..."
                    required
                  />

                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono..."
                    required
                  />

                  <input
                    type="text"
                    name="profesion"
                    placeholder="Profesión..."
                    required
                  />

                  <input
                    type="text"
                    name="ciudad"
                    placeholder="Ciudad..."
                    required
                  />

                  <input
                    type="text"
                    name="areaExperiencia"
                    placeholder="Área de experiencia..."
                  />

                  <textarea
                    name="comentarios"
                    placeholder="Comentarios..."
                    rows={2}
                  />

                  <button
                    type="submit"
                    className="form-submit"
                    disabled={enviando}
                  >
                    {enviando
                      ? "ENVIANDO..."
                      : "ENVIAR"}
                  </button>

                </form>

                <button
                  type="button"
                  className="form-back"
                  disabled={enviando}
                  onClick={() =>
                    setFormularioActivo(null)
                  }
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
                    setFormularioActivo(
                      "mentores"
                    )
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
                    setFormularioActivo(
                      "mentores"
                    )
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