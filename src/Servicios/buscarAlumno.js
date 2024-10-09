import { Api } from "./token";

export function buscarAlumno(codigo, contrasena) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      import.meta.env.VITE_API_URL +
        "buscar_alumno.php?codigo_alumno=" +
        codigo +
        "&contrasena=" +
        contrasena,
      true
    );
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        var data = JSON.parse(xhr.responseText);
        resolve(data);
      } else {
        reject("Error" + xhr.status);
      }
    };
    xhr.send();
  });
}
