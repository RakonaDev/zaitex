import { useEffect, useState } from "react";
import { buscarAlumno } from "../Servicios/buscarAlumno";
import "../css/HeaderUsuario.css";
import { PerfilAlumno } from "./PerfilAlumno";

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/slice";

export function HeaderUsuario() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  /*const [datos, setDatos] = useState(null);*/

  useEffect(() => {
    const usuario = JSON.parse(sessionStorage.getItem("tokenUsuario"));
    buscarAlumno(usuario.codigo_alumno, usuario.contrasena).then((data) => {
      /*setDatos(data);*/
      dispatch(addUser(data));
      if (user.codigo_alumno == null || user.codigo_alumno == undefined) {
        window.location.pathname = "/login";
      }
      console.log(data.codigo_alumno);
    });
  }, []);
  return (
    <>
      <header className="HeaderUsuario-container">
        {user != null ? <PerfilAlumno /> : ""}
      </header>
    </>
  );
}
