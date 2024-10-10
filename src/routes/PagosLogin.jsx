import { useContext } from "react";
import "../css/Boots.css";
import "../css/Login/PagosLogin.css";
import Working from "../img/Inicio/working.svg";
import { DividorContext } from "../context/dividorContext";

export const PagosLogin = () => {

  const { palanca } = useContext(DividorContext);

  return (
    <div className="d-flex">
      <div className={ palanca ? "dividorInformacion hidden" : "dividorInformacion"}></div>
      <div className="PagosLogin-container">
        <h1>Trabajando en ello...</h1>
        <img src={Working} alt="" className="foto-working"/>
      </div>
    </div>
  );
};
