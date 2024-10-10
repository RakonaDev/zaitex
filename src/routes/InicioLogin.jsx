import { useContext, useEffect, useState } from "react";
import "../css/Login/InicioLogin.css";
import "../css/Boots.css"
import { useDispatch, useSelector } from "react-redux";
import { buscarCursosMatriculados } from "../Servicios/mostrarCursosMatriculados";

import personajeManga from "../img/Ilustracion/personajeManga.png";
import Ilustrator from "../img/Software/Ilustrator.png";
import CorelDraw from "../img/Software/CorelDraw.png";

import { TipoCurso } from "../components/TipoCurso";
import { actualizarCursos } from "../redux/edicionSlice";

import { DividorContext } from "../context/dividorContext";
import { useAuth } from "../hooks/useAuth";

export function InicioLogin() {
  const user = useSelector((state) => state.user);
  const cursos = useSelector((state) => state.cursos);
  const dividir = useSelector((state) => state.dividir);

  const [mostrarCategoria1, setMostrarCategoria1] = useState(false);
  const [mostrarCategoria2, setMostrarCategoria2] = useState(false);
  const [mostrarCategoria3, setMostrarCategoria3] = useState(false);

  const [mostrarCursoPersonaje, setMostrarCursoPersonaje] = useState(false);
  const [mostrarCursoIlustrator, setMostrarCursoIlustrator] = useState(false);
  const [mostrarCursoCorel, setMostrarCursoCorel] = useState(false);

  const cursosData = buscarCursosMatriculados(
    user.codigo_alumno,
    user.hashCodigo
  );
  useDispatch(actualizarCursos(cursosData));

  const ApartadoCategoria1 = () => {
    return (
      <div className="Categoria-container">
        <div className="Categoria-titulo">
          <p>Ilustración y Dibujos</p>
        </div>
        <div className="Cursos">
          {mostrarCursoPersonaje ? (
            <TipoCurso
              imagen={personajeManga}
              nombre="Personaje Manga"
              path="/#"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };

  const ApartadoCategoria2 = () => {
    return (
      <div className="Categoria-container">
        <div className="Categoria-titulo">
          <p>Software</p>
        </div>
        <div className="Cursos">
          {mostrarCursoIlustrator ? (
            <TipoCurso imagen={Ilustrator} nombre="Ilustrator" />
          ) : (
            ""
          )}
          {mostrarCursoCorel ? (
            <TipoCurso imagen={CorelDraw} nombre="Corel Draw" />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };

  const { setPalanca, palanca } = useContext(DividorContext);

  return (
    <div className="d-flex">
      <div className={palanca ? "dividorInformacion hidden" : "dividorInformacion"}></div>
      <div
        className={palanca ? "InicioLogin-container" : "InicioLogin-container hidden"}
      >
        <div className="InicioLogin-Section">
          <p className="InicioLogin-Titulo">Cursos</p>
          <div className="Cursos-container">
            {mostrarCategoria1 ? <ApartadoCategoria1 /> : ""}
            {mostrarCategoria2 ? <ApartadoCategoria2 /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
