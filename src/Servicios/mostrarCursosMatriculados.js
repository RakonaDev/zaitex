

export function buscarCursosMatriculados(codigo, hashCodigo) {
  const request = {
    codigo_alumno: codigo,
    hashCodigo: hashCodigo
  }
  var cursos = [];
  /*
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      import.meta.env.VITE_API_URL + "mostrarCursosMatriculados.php?codigo_alumno=" + codigo,
      true
    );
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        var data = JSON.parse(xhr.responseText);
        resolve(data);
      } else {
        reject("Error" + xhr.status);
        location.pathname = "/";
      }
    };
    xhr.send();
  });
  */
  $.ajax({
    type: "POST",
    url: import.meta.env.VITE_API_URL + "mostrarCursosMatriculados.php",
    data: request,
    success: function (response) {
      cursos = response;
      console.log(response)
    },
    catch: function () {
      console.error("No se pudo obtener los cursos");
    }
  });
  return cursos;
}
