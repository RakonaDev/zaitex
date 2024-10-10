import "../css/HeaderUsuario.css";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import fotoBanner from "../img/Login/fotoBanner.svg";
import miCuenta from "../img/Login/miCuenta.svg";
import cerrarSesion from "../img/Login/cerrarSesion.svg";
import zaitexBannerLogo from "../img/Login/zaitexBanner-logo.svg";

export const Perfil = () => {
  const user = useSelector((state) => state.user);

  const logout = () => {
    sessionStorage.clear();
    window.location.pathname = "/login";
  };

  return (
    <div
      className="mostrarPerfil-container"
      style={
        !location.pathname.includes("datos-personales") ? {animation: "top-in 0.7s", top: "100px"} : {}        
      }
    >
      <div className="banner-perfil">
        <img src={zaitexBannerLogo} alt="" className="zaitexBannerLogo" />
        <img src={fotoBanner} alt="" className="fotoBanner" />
      </div>
      <img
        src={"https://www.zai-tex.com/" + user.foto_alumno}
        id="img-perfil"
        className="foto-perfil"
      ></img>
      <section className="informacion-alumno">
        <p className="nombre">{user.nombre_alumno}</p>
        <p className="gmail">{user.gmail_recuperacion}</p>
      </section>
      <footer className="footer-perfil">
        <Link to="/login/datos-personales" className="info-privada">
          <img src={miCuenta} alt="" />
          <p>Mi cuenta</p>
        </Link>
        <button type="button" className="boton-footerPerfil" onClick={() => logout()}>
          <img src={cerrarSesion} alt="" />
          <p>Cerrar Sesión</p>
        </button>
      </footer>
    </div>
  );
};
