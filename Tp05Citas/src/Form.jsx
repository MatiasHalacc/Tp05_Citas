import React from 'react'

export default function Form() {
    
  return (
    <>
        <div className ="container-form">
            <label>Nombre Mascota</label>
            <input type="text" placeholder="Nombre Mascota"  className='u-full-width'/>
            <label>Nombre Dueño</label>
            <input type="text"  placeholder="Nombre dueño de la mascota" className='u-full-width'/>
            <label>Fecha</label><input type="date"  className='u-full-width'/>
            <label>hora</label><input type="time"  className='u-full-width'/>
            <label>Sintomas</label><textarea >
            </textarea><button type="submit" className="button-primary">Agregar Cita</button>
        </div>
    </>
        
  )
}
