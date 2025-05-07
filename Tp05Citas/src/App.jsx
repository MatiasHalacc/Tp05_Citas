import { useState } from "react";
import Formulario from "./formulario"
import Listadocitas from "./Listadocitas"
function App() {
  const [listado, setListado] = useState([]);

 
  return (
    <> 
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
        <Formulario listado={listado} setListado={setListado}/>
        <Listadocitas listado={listado} setListado={setListado}/> 
      </div>
    </div>    
    </>
  )
}

export default App
