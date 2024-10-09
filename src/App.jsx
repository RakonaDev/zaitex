import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Inicio } from "./routes/Inicio";
import { Nosotros } from "./routes/Nosotros";
import { Cursos } from "./routes/Cursos";
import { Talleres } from "./routes/Talleres";
import { CarrerasCortas } from "./routes/CarrerasCortas";
import { Photoshop } from "./routes/CursoPhotoshop";
import { Ilustracion } from "./routes/RutaIlustracion";
import { Especialidad } from "./routes/RutaEspecialidad";
import { Software } from "./routes/RutaSoftware";
import { PersonajeManga } from "./routes/CursoPersonajeManga";
import { AutoCad } from "./routes/CursoAutoCad";
import { Marketing } from "./routes/CursoMarketing";
import { CorelDraw } from "./routes/CursoCorelDraw";
import { Ilustrator } from "./routes/CursoIlustrator";
import { TallerIlustracionDigital } from "./routes/TallerIlustracionDigital";
import { TallerDibujoTradicional } from "./routes/TallerDibujoTradicional";
import { Redes } from "./components/Redes";
import { useEffect, useState } from "react";
import { Login } from "./routes/Login";
import { InicioLogin } from "./routes/InicioLogin";
import { HeaderUsuario } from "./components/headerUsuario";
import { HeaderInformacion } from "./components/HeaderInformacion";
import { PruebasAdmin } from "./routes/PruebasAdmin";
import { PagosLogin } from "./routes/PagosLogin";
import { BibliotecaLogin } from "./routes/BibliotecaLogin";
import { DatosUsuarioLogin } from "./routes/DatosUsuarioLogin";

function App() {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (location.pathname == "/admin") {
      setAdmin(true);
    }
  }, []);

  function Logout() {
    return (
      <>
        {location.pathname.includes("/login/") ? <HeaderUsuario /> : <Redes />}
        {location.pathname.includes("/login/") ? (
          <HeaderInformacion />
        ) : (
          <Header />
        )}
      </>
    );
  }

  return (
    <>
      {admin ? "" : <Logout />}

      <Routes>
        <Route path="/admin" element={<PruebasAdmin />}></Route>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login/inicio" element={<InicioLogin />}></Route>
        <Route path="/login/biblioteca" element={<BibliotecaLogin />}></Route>
        <Route path="/login/pagos" element={<PagosLogin />}></Route>
        <Route
          path="/login/datos-personales"
          element={<DatosUsuarioLogin />}
        ></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/cursos" element={<Cursos />}></Route>
        <Route path="/cursos/ilustracion" element={<Ilustracion />}></Route>
        <Route
          path="/cursos/ilustracion/personajes-de-manga"
          element={<PersonajeManga />}
        ></Route>
        <Route path="/cursos/especialidades" element={<Especialidad />}></Route>
        <Route
          path="/cursos/especialidades/autocad"
          element={<AutoCad />}
        ></Route>
        <Route
          path="/cursos/especialidades/marketing"
          element={<Marketing />}
        ></Route>
        <Route path="/cursos/software" element={<Software />}></Route>
        <Route
          path="/cursos/software/photoshop"
          element={<Photoshop />}
        ></Route>
        <Route
          path="/cursos/software/coreldraw"
          element={<CorelDraw />}
        ></Route>
        <Route
          path="/cursos/software/illustrator"
          element={<Ilustrator />}
        ></Route>
        <Route path="/talleres" element={<Talleres />}></Route>
        <Route
          path="/talleres/dibujo-tradicional"
          element={<TallerDibujoTradicional />}
        ></Route>
        <Route
          path="/talleres/ilustracion-digital"
          element={<TallerIlustracionDigital />}
        ></Route>
        <Route path="/carreras-cortas" element={<CarrerasCortas />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
}

export default App;
