import { redirect, useLocation } from "react-router-dom";

import { Api } from "./token";

export function useFetch(codigo, contrasena) {
  let encontrado = false;
  $.ajax({
    type: "POST",
    url: import.meta.env.VITE_API_URL + "mostrar_alumnos.php",
    success: function (response) {
      response.map((item) => {
        if (item.codigo_alumno == codigo && item.contrasena == contrasena) {
          sessionStorage.setItem("tokenUsuario", JSON.stringify(item));
          window.location.pathname = "/login/inicio";
        }
      });
    },
  });
  return encontrado;
}

export function actualizarDatos(codigo, gmail_recuperacion, sexo, contacto) {
  const datosActualizados = {
    codigo_alumno: codigo,
    gmail_recuperacion: gmail_recuperacion,
    sexo: sexo,
    contacto: contacto,
  };

  $.ajax({
    type: "POST",
    url: import.meta.env.VITE_API_URL + "actualizar_alumno.php",
    data: datosActualizados,
    success: function (response) {
      console.log("Datos actualizados");
    },
    error: function (err) {
      console.log("Error");
    },
  });
}
