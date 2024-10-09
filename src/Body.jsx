import "./css/Body.css";
import persona from "./img/persona_1.png";

import cuerpo from "./img/headerInicio.png";
import Inicio_2 from "./img/Inicio/Inicio_2.jpg";
import Inicio_3 from "./img/Inicio/Inicio_3.jpg";
import Inicio_4 from "./img/Inicio/Inicio_4.jpg";

import ComingSoon from "./img/coming-soon.svg";

import { CartaBeneficios } from "./components/CartaBeneficios";

import primerBeneficio from "./img/primerBeneficio.png";
import segundoBeneficio from "./img/segundoBeneficio.png";
import tercerBeneficio from "./img/tercerBeneficio.png";
import cuartoBeneficio from "./img/cuartoBeneficio.png";

import primerBeneficioActivo from "./img/Inicio/primerBeneficioActivo.png";
import segundoBeneficioActivo from "./img/Inicio/segundoBeneficioActivo.png";
import tercerBeneficioActivo from "./img/Inicio/tercerBeneficioActivo.png";
import cuartoBeneficioActivo from "./img/Inicio/cuartoBeneficioActivo.png";

import { Ofrecemos } from "./components/Ofrecemos";
import { Footer } from "./components/Footer";

export function Body() {
  return (
    <>
      <div style={{position:"relative"}}>
        <div className="slideInicio-box">
          <li className="slideInicio-item">
            <img src={cuerpo} alt="body" className="cuerpo-contenedor inicio" />
          </li>
          <li className="slideInicio-item">
            <img src={Inicio_2} alt="body" className="cuerpo-contenedor" />
          </li>
          <li className="slideInicio-item">
            <img src={Inicio_3} alt="body" className="cuerpo-contenedor" />
          </li>
          <li className="slideInicio-item">
            <img src={Inicio_4} alt="body" className="cuerpo-contenedor" />
          </li>
        </div>
        <img src={persona} className="persona-1" width={"700px"} alt="persona" />
      </div>
      <div className="Z-logo"></div>
      <div className="despega-container">
        <h1>DESPEGA</h1>
        <p>Crece profesionalmente</p>
      </div>
      <div className="beneficios-background">
        <h1>Beneficios</h1>
        <section className="beneficios-container">
          <CartaBeneficios
            src={primerBeneficio}
            activo={primerBeneficioActivo}
            texto="Nuestra metodología de 
                    enseñanza está a la 
                    vanguardia de las tendencias 
                    del diseño."
            tipo="caballo"
          />
          <CartaBeneficios
            src={segundoBeneficio}
            activo={segundoBeneficioActivo}
            texto="Establecerás conexiones
                    valiosas con tus compañeros
                    de clase, profesores y
                    profesionales de la industria."
            tipo="personas"
          />
          <CartaBeneficios
            src={tercerBeneficio}
            activo={tercerBeneficioActivo}
            texto="Estamos comprometidos con 
                    proporcionarte los recursos 
                    necesarios para que puedas 
                    desarrollar tus habilidades."
            tipo="blue"
          />
          <CartaBeneficios
            src={cuartoBeneficio}
            activo={cuartoBeneficioActivo}
            texto="Contamos con un equipo de
                    instructores altamente
                    calificados y apasionados en
                    sus respectivos campos."
            tipo="estudiante"
          />
        </section>
        <h1>Que ofrecemos</h1>
      </div>
      <section className="list-ofre-container">
        <Ofrecemos
          titulo="Cursos"
          texto="Un programa virtual especializado para
                ejecutivos, diseñado para desarrollar
                habilidades y conocimientos de manera
                eficiente en poco tiempo."
          color="#FFDEB8"
          contrast="#FFA337"
        />
        <Ofrecemos
          titulo="Talleres"
          texto="Sumérgete en cursos breves, diseñados
                para un aprendizaje práctico y rápido,
                impulsando tus habilidades para destacar
                en tu carrera."
          color="#D9D9D9"
          contrast="#9D9D9D"
        />
        <Ofrecemos
          titulo="Programas"
          texto="Sumérgete en nuestro programa virtual
                especializado, diseñado para ejecutivos
                ambiciosos que desean dominar un área
                específica en tan solo 12 meses."
          color="#FFAEAE"
          contrast="#FD2626"
        />
      </section>
      <div className="proximamente">
        <h1 style={{ color: "white" }}>Eventos</h1>
        <div className="proxi-container">
          <img src={ComingSoon} alt="" className="img-coming" />
          <h2>Próximamente...</h2>
        </div>
      </div>
      <Footer modo="completo" />
    </>
  );
}
