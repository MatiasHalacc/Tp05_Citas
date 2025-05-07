import React from 'react'
import Cita from './Cita'
export default function Listadocitas({listado, setListado}) {
    console.log(listado)
    const eliminarCita = (id) => {
      const updated = listado.filter(item => item.id !== id);
      setListado(updated);
    }
  return (
    <>
        <div className = "one-half column">
          <h2>Administra tus citas</h2>
          {listado.map((item)=>(
            <Cita item={item} eliminarCita={eliminarCita}/>
          ))}          
        </div>
    </>
  )
}
