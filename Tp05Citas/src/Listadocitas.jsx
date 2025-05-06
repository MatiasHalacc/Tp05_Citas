import React from 'react'
import Cita from './Cita'
export default function Listadocitas({listado, setListado}) {
    console.log(listado)
  return (
    <>
        <div className = "one-half column">
          <h2>Administra tus citas</h2>
          {listado.map(item=>(
            <Cita item={item} listado={listado}/>
          ))}          
        </div>
    </>
  )
}
