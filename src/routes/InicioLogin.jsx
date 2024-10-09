import { useEffect, useState } from "react";
import "../css/Login/InicioLogin.css";
import { useSelector } from "react-redux";
import { buscarCursosMatriculados } from "../Servicios/mostrarCursosMatriculados";

import personajeManga from "../img/Ilustracion/personajeManga.png";
import Ilustrator from "../img/Software/Ilustrator.png";
import CorelDraw from "../img/Software/CorelDraw.png";

import { TipoCurso } from "../components/TipoCurso";

export function InicioLogin() {
  const user = useSelector((state) => state.user);
  const [cursos, setCursos] = useState([]);

  const [mostrarCategoria1, setMostrarCategoria1] = useState(false);
  const [mostrarCategoria2, setMostrarCategoria2] = useState(false);
  const [mostrarCategoria3, setMostrarCategoria3] = useState(false);

  const [mostrarCursoPersonaje, setMostrarCursoPersonaje] = useState(false);
  const [mostrarCursoIlustrator, setMostrarCursoIlustrator] = useState(false);
  const [mostrarCursoCorel, setMostrarCursoCorel] = useState(false);

  useEffect(() => {
    buscarCursosMatriculados(localStorage.getItem("tokenCorreo")).then(
      (data) => {
        console.log(data);
        setCursos(data);
        data.map((item) => {
          switch (item.id_categoria) {
            case 1:
              setMostrarCategoria1(true);
              break;
            case 2:
              setMostrarCategoria2(true);
              break;
            case 3:
              setMostrarCategoria3(true);
              break;
          }

          switch (item.id_curso) {
            case 1:
              setMostrarCursoPersonaje(true);
              break;
            case 2:
              setMostrarCursoIlustrator(true);
              break;
            case 3:
              setMostrarCursoCorel(true);
              break;
          }
        });
      }
    );
  }, []);

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

  return (
    <div className="InicioLogin-container">
      <div className="InicioLogin-Section">
        <p className="InicioLogin-Titulo">Cursos</p>
        <div className="Cursos-container">
          {mostrarCategoria1 ? <ApartadoCategoria1 /> : ""}
          {mostrarCategoria2 ? <ApartadoCategoria2 /> : ""}
        </div>
      </div>
    </div>
  );
}
