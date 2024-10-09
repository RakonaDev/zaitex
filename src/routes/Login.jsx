import { useState } from "react";
import "../css/Login.css";

import { useFetch } from "../Servicios/useFetch";

import backgroundLogin from "../img/Login/backgroundLogin.jpg";

import logoZaitex from "../img/Login/logoZaitex.svg";
import ojoCerrado from "../img/Login/ojoCerrado.svg";
import ojoAbierto from "../img/Login/ojoAbierto.svg";

export function Login() {
  const [cambio, setCambio] = useState(false);

  function mostrarContraseña() {
    setCambio(!cambio);
  }

  function enviandoElementos(event) {
    event.preventDefault();
    console.log(document.getElementById("contrasenaLogin").value);
    console.log(document.getElementById("codigoLogin").value);

    var codigo = document.getElementById("codigoLogin").value;
    var contrasena = document.getElementById("contrasenaLogin").value;

    const encontrado = useFetch(codigo, contrasena);
    console.log(encontrado);
  }

  return (
    <div className="login-container">
      <img src={backgroundLogin} alt="" className="background-login" />
      <div className="login">
        <img src={logoZaitex} alt="" />
        <form
          className="form-login"
          onSubmit={(event) => enviandoElementos(event)}
        >
          <input
            type="text"
            name="codigo"
            id="codigoLogin"
            placeholder="Por favor, ingresa tu código de usuario"
            required
          />
          <label
            htmlFor="contrasenaLogin"
            className="ojo-item"
            onClick={mostrarContraseña}
          >
            <img
              src={cambio ? ojoAbierto : ojoCerrado}
              alt=""
              className="item-ojo"
            />
          </label>
          <input
            type={cambio ? "text" : "password"}
            name="contrasena"
            id="contrasenaLogin"
            placeholder="Aquí tu contraseña"
            required
          />
          <input
            type="submit"
            onSubmit={(event) => enviandoElementos(event)}
            value="Iniciar Sesión"
            id="iniciarSesion"
          />
        </form>
      </div>
      <footer className="loginFooter">
        <p>Copyright © ZAI-TEX 2022 Todos los Derechos Reservados</p>
      </footer>
    </div>
  );
}
