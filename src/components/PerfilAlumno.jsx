import { useEffect, useState } from "react";
import "../css/HeaderUsuario.css";

import zaitexBannerLogo from "../img/Login/zaitexBanner-logo.svg";
import abajoAlumno from "../img/Login/abajoAlumno.svg";
import fotoBanner from "../img/Login/fotoBanner.svg";
import miCuenta from "../img/Login/miCuenta.svg";
import cerrarSesion from "../img/Login/cerrarSesion.svg";

import { useSelector } from "react-redux";
import { Perfil } from "./Perfil";
import { redirect, useLocation } from "react-router-dom";

export function PerfilAlumno() {
  const [renderizar, setRenderizar] = useState(false);
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const renderizarPerfil = () => {
    if (location.pathname.includes("datos-personales")) {
      return;
    } else {
      setRenderizar(!renderizar);
    }
  };
  /*
  useEffect(() => {
    const imagen = document.getElementById("img");
    imagen.style.backgroundImage =
      "url(https://www.zai-tex.com/img/" + user.foto_alumno + ")";
    console.log(user.foto_alumno);
  }, []);
  */
  return (
    <>
      <div className="perfil-alumno">
        <img src={"https://www.zai-tex.com/" + user.foto_alumno} alt={user.codigo_alumno} className="foto-alumno" onClick={renderizarPerfil} id="img" />
        <span className="nombre-alumno" onClick={renderizarPerfil}>
          {user.nombre_alumno}
        </span>
        <img src={abajoAlumno} alt="" onClick={renderizarPerfil} />
      </div>
      {renderizar && !location.pathname.includes("datos-personales") ? (
        <Perfil foto_alumno={user.foto_alumno} renderizar={renderizar} />
      ) : (
        ""
      )}
    </>
  );
}
