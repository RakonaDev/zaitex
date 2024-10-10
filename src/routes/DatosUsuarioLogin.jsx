import { Perfil } from "../components/Perfil";
import "../css/Login/DatosUsuarioLogin.css";
import "../css/Boots.css"
import { InformacionPersonal } from "../components/InformacionPersonal";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { DividorContext } from "../context/dividorContext";

export const DatosUsuarioLogin = () => {

  const dividir = useSelector((state) => state.dividir);
  const { palanca } = useContext(DividorContext);

  return (
    <div className="d-flex">
      <div className={palanca ? "dividorUsuario hidden" : "dividorUsuario"}></div>
      <section className="DatosUsuarioLogin-container">
        <aside className="Perfil-container">
          <Perfil />
        </aside>
        <main className="DatosPersonales-container">
          <InformacionPersonal />
        </main>
      </section>
    </div>
  );
};
