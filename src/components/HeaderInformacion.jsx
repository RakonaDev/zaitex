import "../css/HeaderInformacion.css";

import { useDispatch, useSelector } from "react-redux";

import logoZaitex from "../img/Login/logoZaitex.svg";
import logoZaitexSeleccionado from "../img/Login/logoZaitexSeleccionado.svg";

import extender from "../img/Login/extender.svg";

import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import abajo from "../img/Login/abajo.svg";
import abajoSeleccionado from "../img/Login/abajoSeleccionado.svg";

import curso from "../img/Login/curso.svg";
import cursoSeleccionado from "../img/Login/cursoSeleccionado.svg";

import biblioteca from "../img/Login/biblioteca.svg";
import bibliotecaSeleccionado from "../img/Login/bibliotecaSeleccionado.svg";

import pagos from "../img/Login/pagos.svg";
import pagosSeleccionado from "../img/Login/pagosSeleccionado.svg";
import { setDividorWidth } from "../redux/reduxDividor";
import { DividorContext } from "../context/dividorContext";

export function HeaderInformacion() {
  const dividir = useSelector((state) => state.dividir);

  const { setPalanca, palanca } = useContext(DividorContext);
  const location = useLocation();
  const [opcion, setOpcion] = useState("inicio");

  const activarTexto = {
    color: "#1962EC",
    fontWeight: "700",
  };

  const desactivarTexto = {
    color: "#FFFFFF",
    fontWeight: "500",
  }

  useDispatch(setDividorWidth(palanca));

  useEffect(() => {
    if (location.pathname.includes("inicio")) {
      switchParaActivarInicio();
      setOpcion("inicio");
    } else if (location.pathname.includes("biblioteca")) {
      switchParaActivarBiblioteca();
      setOpcion("biblioteca");
    } else if (location.pathname.includes("pagos")) {
      switchParaActivarPagos();
      setOpcion("pagos");
    }
    else{

    }
  }, [location]);

  /* Zona de activacion de un boton */
  const switchParaActivarInicio = () => {
    const $cubridor = document.querySelector(".cubridor");
    $cubridor.classList.remove("biblioteca");
    $cubridor.classList.remove("pagos");
    $cubridor.classList.add("inicio");
  };

  const switchParaActivarBiblioteca = () => {
    const $cubridor = document.querySelector(".cubridor");
    $cubridor.classList.remove("pagos");
    $cubridor.classList.remove("inicio");
    $cubridor.classList.add("biblioteca");
  };

  const switchParaActivarPagos = () => {
    const $cubridor = document.querySelector(".cubridor");
    $cubridor.classList.remove("inicio");
    $cubridor.classList.remove("biblioteca");
    $cubridor.classList.add("pagos");
  };
  /*
  const extenderButton = () => {
    setPalanca(!palanca);
    useDispatch(setDividorWidth())
  };
  */

  return (
    <div
      className={
        palanca
          ? "headerInformacion-container palanca"
          : "headerInformacion-container"
      }
      style={{ width: dividir.dividirWidth }}
    >
      <img
        src={palanca ? logoZaitexSeleccionado : logoZaitex}
        alt=""
        className={
          palanca ? "headerInformacion-logo palanca" : "headerInformacion-logo"
        }
      />
      <nav>
        <ul className="headerInformacion-options">
          <div
            className={
              location.pathname != "/login/datos-personales"
                ? palanca
                  ? "cubridor apretar " + opcion
                  : "cubridor " + opcion
                : ""
            }
          ></div>
          <Link
            to="/login/inicio"
            className={palanca ? "option-item encoger" : "option-item"}
            onClick={switchParaActivarInicio}
          >
            <img
              src={
                opcion == "inicio" &&
                location.pathname != "/login/datos-personales"
                  ? cursoSeleccionado
                  : curso
              }
              alt=""
            />
            <p
              className={palanca ? "guardarParrafo" : ""}
              style={
                opcion == "inicio" &&
                location.pathname != "/login/datos-personales"
                  ? activarTexto
                  : desactivarTexto
              }
            >
              Mis cursos
            </p>
            <img
              src={opcion == "inicio" && !palanca ? abajoSeleccionado : abajo}
              alt=""
              className="abajoLogo"
              style={palanca ? {display: "none"}: {}}
            />
          </Link>
          <Link
            to="/login/biblioteca"
            className={palanca ? "option-item encoger" : "option-item"}
            onClick={switchParaActivarBiblioteca}
          >
            <img
              src={opcion == "biblioteca" && location.pathname != "/login/datos-personales" ? bibliotecaSeleccionado : biblioteca}
              alt=""
            />
            <p
              className={palanca ? "guardarParrafo" : ""}
              style={opcion == "biblioteca" && location.pathname != "/login/datos-personales" ? activarTexto : desactivarTexto}
            >
              Biblioteca
            </p>
          </Link>
          <Link
            to="/login/pagos"
            className={palanca ? "option-item encoger" : "option-item"}
            onClick={switchParaActivarPagos}
          >
            <img src={opcion == "pagos" && location.pathname != "/login/datos-personales" ? pagosSeleccionado : pagos} alt="" />
            <p
              className={palanca ? "guardarParrafo" : ""}
              style={opcion == "pagos" && location.pathname != "/login/datos-personales" ? activarTexto : desactivarTexto}
            >
              Pagos
            </p>
          </Link>
        </ul>
      </nav>
      <img
        src={extender}
        alt=""
        className={palanca ? "extender" : "extender rotate"}
        onClick={() => setPalanca(!palanca)}
      />
    </div>
  );
}
