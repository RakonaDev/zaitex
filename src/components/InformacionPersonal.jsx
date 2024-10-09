import { useDispatch, useSelector } from "react-redux";
import "../css/Login/DatosUsuarioLogin.css";
import { useState } from "react";
import { actualizarUser } from "../redux/slice";
import { actualizarDatos } from "../Servicios/useFetch";
import { actualizarCursos } from "../redux/edicionSlice";

export const InformacionPersonal = () => {
  const user = useSelector((state) => state.user);
  const cursos = useSelector((state) => state.cursos);

  const dispatch = useDispatch();

  const [modoEdicion, setModoEdicion] = useState(false);
  const [readOnly, setReadOnly] = useState(true);

  const BotonEditar = () => {
    const EditarInformacion = () => {
      const $editar = document.querySelector(".editar-btn");

      $editar.style.display = "none";
      setModoEdicion(!modoEdicion);
      setReadOnly(!readOnly);
    };

    return (
      <button type="button" className="editar-btn" onClick={EditarInformacion}>
        Editar
      </button>
    );
  };

  const BotonesEdicion = () => {
    const Cancelar = () => {
      setModoEdicion(!modoEdicion);
      const $inputSexo = document.getElementById("sexo");
      const $inputEmail = document.getElementById("email");
      const $inputContacto = document.getElementById("contacto");

      $inputSexo.value = user.sexo;
      $inputEmail.value = user.gmail_recuperacion;
      $inputContacto.value = user.contacto;

      setReadOnly(!readOnly);
    };

    const GuardarCambios = () => {
      const $inputSexo = document.getElementById("sexo");
      const $inputEmail = document.getElementById("email");
      const $inputContacto = document.getElementById("contacto");

      const cambios = {
        gmail_recuperacion: $inputEmail.value,
        sexo: $inputSexo.value,
        contacto: $inputContacto.value,
      };

      dispatch(actualizarUser(cambios));
      setModoEdicion(!modoEdicion);
      setReadOnly(!readOnly);

      actualizarDatos(
        user.codigo_alumno,
        cambios.gmail_recuperacion,
        cambios.sexo,
        cambios.contacto
      );
    };

    return (
      <div className="botones-editar">
        <button type="button" className="guardar-btn" onClick={GuardarCambios}>
          Guardar
        </button>
        <button type="button" className="cancelar-btn" onClick={Cancelar}>
          Cancelar
        </button>
      </div>
    );
  };

  return (
    <>
      <section className="InfoPersonal-container">
        <header className="InfoPersonal-header">Datos Personales</header>
        <p className="InfoPersonal-parrafo">
          Estos serán los datos que aparecerán en tu certificado y documentos
          que se emitan.
        </p>
        <section className="AlumnoInfo-container">
          <ul className="AlumnoInfo">
            <li className="AlumnoItem">
              <label htmlFor="nombre">Nombres Completos: </label>
              <input
                type="text"
                name="nombre"
                className="AlumnoItemInput"
                id="nombre"
                value={user.nombre_alumno + " " + user.apellido_alumno}
                readOnly
              />
            </li>
            <li className="AlumnoItem">
              <label htmlFor="sexo">Sexo: </label>
              <input
                type="text"
                name="sexo"
                className={
                  modoEdicion ? "AlumnoItemInput edicion" : "AlumnoItemInput"
                }
                id="sexo"
                defaultValue={user.sexo}
                readOnly={readOnly}
              />
            </li>
            <li className="AlumnoItem">
              <label htmlFor="dni">Código: </label>
              <input
                type="text"
                name="dni"
                className="AlumnoItemInput"
                id="dni"
                defaultValue={user.codigo_alumno}
                readOnly
              />
            </li>
            <li className="AlumnoItem">
              <label htmlFor="fecha-nacimiento">Fecha de Registro: </label>
              <input
                type="date"
                name="fecha-nacimiento"
                className="AlumnoItemInput"
                id="fecha-nacimiento"
                defaultValue={user.fecha_registro}
                readOnly={true}
              />
            </li>
            <li className="AlumnoItem">
              <label htmlFor="email">Email de recuperación: </label>
              <input
                type="email"
                name="email"
                className={
                  modoEdicion ? "AlumnoItemInput edicion" : "AlumnoItemInput"
                }
                id="email"
                defaultValue={user.gmail_recuperacion}
                readOnly={readOnly}
              />
            </li>
            <li className="AlumnoItem">
              <label htmlFor="contacto">Contacto: </label>
              <input
                type="text"
                name="contacto"
                className={
                  modoEdicion ? "AlumnoItemInput edicion" : "AlumnoItemInput"
                }
                id="contacto"
                defaultValue={user.contacto}
                readOnly={readOnly}
              />
            </li>
          </ul>
          <aside className="button-container">
            {modoEdicion ? <BotonesEdicion /> : <BotonEditar />}
          </aside>
        </section>
      </section>
    </>
  );
};
