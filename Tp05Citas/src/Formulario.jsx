import React, { useState } from 'react'
import './Formulario.css'

export default function Formulario({listado,setListado}) {
  let id = 0;
  const [item,setItem] = useState({
    id: id,
    mascota: '',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
  })
  let guardarCita = () => {
      id++;
      setListado([...listado,item]);
  }

  const handleChange = (e)=>{    
    setItem({
      ...item,
      [e.target.name]:e.target.value
    });
  }
  
  return (

    <>
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form>
              <label>Nombre Mascota</label><input type="text" name="mascota" className = "u-full-width" placeholder="Nombre Mascota" onChange={handleChange}  />
              <label>Nombre Dueño</label><input type="text" name="propietario" className = "u-full-width" placeholder="Nombre dueño de la mascota" onChange={handleChange}  />
              <label>Fecha</label><input type="date" name="fecha" className = "u-full-width" onChange={handleChange}  />
              <label>hora</label><input type="time" name="hora" className = "u-full-width" onChange={handleChange}  />
              <label>Sintomas</label><textarea name="sintomas" className = "u-full-width" onChange={handleChange}></textarea>
              <button type="button" className = "u-full-width button-primary" onClick={guardarCita}>Agregar Cita</button>
            </form>
        </div>
    </>
  )
}
