import React, { useState } from "react";
import "../css/Admin/PruebasAdmin.css";
import "../css/Boots.css";
import { Api } from "../Servicios/token";
import logoZaitex from "../img/Login/logoZaitex.svg";

function LoginAdmin(props) {
  
  const[incorrecto, setIncorrecto] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    var postRequest = {
      usuario: e.target[0].value,
      password: e.target[1].value,
      btnEnviar: e.target[2].value
    };

    const Api = import.meta.env.VITE_API_URL;

    fetch(Api+"buscar_admin.php",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postRequest)
    }).then(response => response.json())
    .then(data => {
      sessionStorage.setItem("token", JSON.stringify(data));
      setIncorrecto(false);
      props.setLogeado(true);
      console.log(data);
    })
    .catch(
      (error) => {
        console.log(error);
        setIncorrecto(true);
      }
    )
  };

  return (
    <>
      <div className="LoginAdmin-container">
        <img src={logoZaitex} alt="" style={{ width: "100px", height: "100px", position: "absolute", top: "10px", left: "50px" }} />
        <form
          className="form-admin d-flex flex-column align-items-center"
          onSubmit={handleSubmit}
        >
          <h2 style={{ color: "black" }}>Bienvenido a la administración</h2>
          <div className="d-flex flex-column justify-content-center align-items-center " style={{ width: "100%", height: "320px" }}>
            <div className="mt-3 d-flex flex-column">
              <label htmlFor="usuario" className="text-black">
                Usuario:{" "}
              </label>
              <input
                type="text"
                name="usuario"
                id="usuario"
                placeholder="Ingrese su usuario"
                className="form-control"
              />
              { incorrecto ? <span className="text-incorrect">* Usuario Incorrecto</span> : null }
            </div>
            <div className="mt-3 d-flex flex-column">
              <label htmlFor="password" className="text-black">
                Contraseña:{" "}
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Ingrese su contraseña"
                className="form-control"
              />
              <span className="text-incorrect" hidden>* Contraseña Incorrecta</span>
            </div>
          </div>
          <input type="submit" value="Enviar" className="btn-admin mt-3" />
        </form>
      </div>
    </>
  );
}

export default LoginAdmin;
