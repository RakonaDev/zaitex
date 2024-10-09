import React, { useEffect, useState } from "react";
import "../css/Boots.css";
import "../css/Admin/PanelAdmin.css";

function PanelAdmin() {
  const [openRegister, setOpenRegister] = useState(false);
  const [openMatricular, setOpenMatricular] = useState(false);
  const [alumnos, setAlumnos] = useState([]);
  const [mode, setMode] = useState(false);
  const [matriculas, setMatriculas] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "mostrar_alumnos.php")
      .then((response) => response.json())
      .then((data) => {
        setAlumnos(data);
      })
      .catch((error) => console.error("Error al obtener los alumnos"));

    fetch(
      import.meta.env.VITE_API_URL +
        "mostrarMatriculas.php?tokenAdmin=" +
        apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        setMatriculas(data);
      })
      .catch((error) => {
        console.error("Error al obtener las matriculas");
        location.pathname = "/";
      });
  }, []);

  const handlerMode = () => {
    setMode(!mode);
  };

  return (
    <>
      <div className="PanelAdmin-container text-black">
        <h1 className="text-center">Panel Admin</h1>

        <div className="d-flex mt-5 btn-group">
          <button
            id="myBtn"
            className="btn"
            onClick={() => setOpenRegister(true)}
          >
            Registrar un Alumno
          </button>
          <button
            id="myBtn"
            className="btn"
            onClick={() => setOpenMatricular(true)}
          >
            Matricular el alumno a un Curso
          </button>
        </div>

        {/* MODAL DE REGISTRO */}
        <div
          id="myModal"
          className="modal"
          {...(openRegister
            ? { style: { display: "block" } }
            : { style: { display: "none" } })}
        >
          <div className="modal-content">
            <span className="close" onClick={() => setOpenRegister(false)}>
              &times;
            </span>
            <form
              action="https://www.zai-tex.com/backend/insertar_alumno.php"
              method="POST"
              className="d-flex flex-column form-admin-container"
              encType="multipart/form-data"
            >
              <div className="d-flex flex-column">
                <h2>Formulario Registrar</h2>
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="nombre">Nombre: </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingrese nombre del estudiante"
                  required
                />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="apellido">Apellido: </label>
                <input
                  type="text"
                  name="apellido"
                  id="apellido"
                  placeholder="Ingrese apellido del estudiante"
                  required
                />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="dni">DNI: </label>
                <input
                  type="text"
                  name="dni"
                  id="dni"
                  placeholder="Ingrese el dni del estudiante"
                  required
                />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="contacto">Contacto: </label>
                <input
                  type="tel"
                  name="contacto"
                  id="contacto"
                  placeholder="Ingrese el numero del estudiante"
                  className="form-control"
                  required
                />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="gmail">Gmail: </label>
                <input
                  type="email"
                  name="gmail"
                  id="gmail"
                  placeholder="Ingrese el gmail del estudiante"
                  className="form-control"
                />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="sexo">Sexo: </label>
                <select name="sexo" id="sexo" className="form-select" required>
                  <option value="Masculino" selected>
                    Masculino
                  </option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="imagen">Foto: </label>
                <input
                  type="file"
                  name="imagen"
                  id="imagen"
                  className="mt-1 form-file"
                  accept="image/*"
                  required
                />
              </div>
              <input type="submit" value="Registrar" className="btn-admin" />
            </form>
          </div>
        </div>

        {/* MODAL DE MATRICULACION */}
        <div
          id="myModal"
          className="modal"
          {...(openMatricular
            ? { style: { display: "block" } }
            : { style: { display: "none" } })}
        >
          <div className="modal-content">
            <span className="close" onClick={() => setOpenMatricular(false)}>
              &times;
            </span>
            <form
              action="http://www.zai-tex.com/backend/ingresar_matricula.php"
              method="POST"
              className="d-flex flex-column form-admin-matricula-container"
            >
              <div>
                <h2 className="text-center">Registrar Matricula</h2>
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="codigo">Codigo Alumno: </label>
                <input type="text" name="codigo" id="codigo" required />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="matricula">Tipo de Matricula: </label>
                <select
                  name="matricula"
                  id="matricula"
                  className="form-select"
                  onChange={() => handlerMode()}
                  required
                >
                  <option value="taller" selected>
                    Taller
                  </option>
                  <option value="curso">Curso</option>
                </select>
              </div>
              <div className="d-flex flex-column mt-1">
                {mode ? (
                  <label htmlFor="tipo">Curso: </label>
                ) : (
                  <label htmlFor="tipo">Taller</label>
                )}
                {mode ? (
                  /* Curso */
                  <select
                    className="form-select"
                    name="tipo"
                    id="tipo"
                    required
                  >
                    <option value="1" selected>
                      Personaje de Manga
                    </option>
                    <option value="2">Photoshop</option>
                    <option value="3">Corel Draw</option>
                    <option value="4">Ilustrator</option>
                    <option value="5">AutoCad para Interiores</option>
                    <option value="6">Marketing</option>
                  </select>
                ) : (
                  /* Taller */
                  <select
                    className="form-select"
                    name="tipo"
                    id="tipo"
                    required
                  >
                    <option value="1" selected>
                      Dibujo Tradicional
                    </option>
                    <option value="2">Ilustración Digital</option>
                  </select>
                )}
              </div>
              <input
                type="submit"
                value="Registrar"
                name="matricular"
                className="btn-admin"
              />
            </form>
          </div>
        </div>

        <div className="tabla-container">
          <table className="mt-5 tabla-alumnos">
            <thead>
              <tr className="table-head">
                <th className="item-head">Codigo</th>
                <th className="item-head">Contraseña</th>
                <th className="item-head">Nombre</th>
                <th className="item-head">Apellido</th>
                <th className="item-head">Fecha de Registro</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((registro, index) => (
                <tr key={index} className="table-row">
                  <td className="text-center">{registro.codigo_alumno}</td>
                  <td className="text-center">{registro.contrasena}</td>
                  <td className="text-center">{registro.nombre_alumno}</td>
                  <td className="text-center">{registro.apellido_alumno}</td>
                  <td className="text-center">{registro.fecha_registro}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="mt-5 tabla-alumnos">
            <thead>
              <tr className="table-head">
                <th className="item-head">Tipo</th>
                <th className="item-head">Codigo</th>
                <th className="item-head">Matriculado</th>
                <th className="item-head">Fecha de Matricula</th>
              </tr>
            </thead>
            <tbody>
              {matriculas.map((registro, index) => (
                <tr key={index} className="table-row">
                  <td className="text-center">{registro.tipo}</td>
                  <td className="text-center">{registro.codigo_alumno}</td>
                  <td className="text-center">{registro.nombre}</td>
                  <td className="text-center">{registro.fecha_matricula}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PanelAdmin;
