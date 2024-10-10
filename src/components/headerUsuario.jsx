import { useEffect, useState } from "react";
import { buscarAlumno } from "../Servicios/buscarAlumno";
import "../css/HeaderUsuario.css";
import { PerfilAlumno } from "./PerfilAlumno";

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/slice";
import { useAuth } from "../hooks/useAuth";

export function HeaderUsuario() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  /*const [datos, setDatos] = useState(null);*/

  useEffect(() => {
    const usuario = JSON.parse(sessionStorage.getItem("tokenUsuario"));
    if(useAuth(usuario)){
      window.location.pathname = "/login";
    }
    else{
      buscarAlumno(usuario.codigo_alumno, usuario.contrasena).then((data) => {
        /*setDatos(data);*/
        dispatch(addUser(data));
        if (data.codigo_alumno == null || data.codigo_alumno == undefined) {
          window.location.pathname = "/login";
        }
      })
      .catch(() => {
        window.location.pathname = "/login";
      });
    }
  }, []);
  return (
    <>
      <div className="sombra-header"></div>
      <header className="HeaderUsuario-container">
        {user != null ? <PerfilAlumno /> : ""}
      </header>
    </>
  );
}
