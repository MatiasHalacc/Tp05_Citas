import React from 'react'
import './Cita.css'
export default function Cita({item, eliminarCita }) {
  return (
    <>
        <div className = "cita">
            <p>Mascota: <span>{item.mascota}</span></p>
            <p>Dueño: <span>{item.propietario}</span></p>
            <p>Fecha: <span>{item.fecha}</span></p>
            <p>Hora: <span>{item.hora}</span></p>
            <p>Sintomas: <span>{item.sintomas}</span></p>
            <button className = "button elimnar u-full-width" onClick={() => eliminarCita(item.id)}>Eliminar ×</button>
        </div>        
    </>
  )
}
