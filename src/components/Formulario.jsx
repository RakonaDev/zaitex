import "../css/Formulario.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function Formulario() {
  var path = location.pathname;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_95hx4qp", "template_oy8cr6q", form.current, {
        publicKey: "wooy2Olw9mEt8FwbB",
      })
      .then(
        () => {
          document.getElementById("nombres").value = "";
          document.getElementById("apellidos").value = "";
          document.getElementById("numero").value = "";
          document.getElementById("email").value = "";
          document.getElementById("respuesta").innerHTML =
            "Pedido realizado correctamente :D";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  if (path.includes("talleres")) {
    return (
      <form
        ref={form}
        onSubmit={sendEmail}
        className={path.includes("/talleres/") ? "form" : "ruta"}
      >
        <div className="header-form">
          <h1>¡ MATRICULA GRATIS !</h1>
        </div>
        <div className="body-form">
          <h2>Solicita más información</h2>
          <input
            type="text"
            name="nombres"
            id="nombres"
            placeholder="Nombre"
            required
          />
          <input
            type="text"
            name="apellidos"
            id="apellidos"
            placeholder="Apellidos"
            required
          />
          <input
            type="tel"
            name="numero"
            id="numero"
            placeholder="Celular"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            autoComplete="off"
          />
          <select id="talleres" name="curso" required>
            <option value="Dibujo Tradicional">Dibujo Tradicional</option>
            <option value="Ilustracion Digital">Ilustracion Digital</option>
          </select>
          <p>
            <input type="checkbox" id="checkbox-form" required />
            <label htmlFor="checkbox-form">
              Acepto haber leído las políticas de privacidad y los términos y
              condiciones.
            </label>
          </p>
          <div>
            <p id="respuesta"></p>
          </div>
        </div>
        <input type="submit" className="submitBtn" value="Solicitar" />
      </form>
    );
  } else if (path.includes("cursos")) {
    return (
      <form
        ref={form}
        onSubmit={sendEmail}
        className={
          path.includes("/cursos/software/") ||
          path.includes("/cursos/ilustracion/") ||
          path.includes("/cursos/especialidades/")
            ? "form"
            : "ruta"
        }
      >
        <div className="header-form">
          <h1>¡ MATRICULA GRATIS !</h1>
        </div>
        <div className="body-form">
          <h2>Solicita más información</h2>
          <input
            type="text"
            name="nombres"
            id="nombres"
            placeholder="Nombre"
            required
          />
          <input
            type="text"
            name="apellidos"
            id="apellidos"
            placeholder="Apellidos"
            required
          />
          <input
            type="tel"
            name="numero"
            id="celular"
            placeholder="Celular"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            autoComplete="off"
          />
          <select id="talleres" name="curso" required>
            <option value="Adobe Illustrator">Adobe Illustrator</option>
            <option value="Adobe Photoshop">Adobe Photoshop</option>
            <option value="Corel Draw">Corel Draw</option>
            <option value="AutoCAD para Interiores">
              AutoCAD para Interiores
            </option>
            <option value="Marketing">Marketing</option>
            <option value="Personaje de Manga">Personajes de Manga</option>
          </select>
          <p>
            <input type="checkbox" id="checkbox-form" required />
            <label htmlFor="checkbox-form">
              Acepto haber leído las políticas de privacidad y los términos y
              condiciones.
            </label>
          </p>
          <div>
            <p id="respuesta"></p>
          </div>
        </div>
        <input type="submit" className="submitBtn" value="Solicitar" />
      </form>
    );
  }
}
