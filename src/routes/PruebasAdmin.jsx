import "../css/Admin/PruebasAdmin.css";
import { useEffect, useState } from "react";
import LoginAdmin from "../components/LoginAdmin";
import PanelAdmin from "../components/PanelAdmin";

export const PruebasAdmin = () => {
  const [logeado, setLogeado] = useState(false);
  
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "buscarToken.php",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: sessionStorage.getItem("token") })
    }).then(response => response.json())
    .then(data => {
      setLogeado(true);
    })
    .catch(
      (error) => {
        props.setLogeado(false);
      }
    )
  },[logeado])

  return (
    <>
      <div className="PanelAdmin-container">
        {logeado ? <PanelAdmin setLogeado={setLogeado} /> : <LoginAdmin setLogeado={setLogeado} />}
      </div>
    </>
  );
};
