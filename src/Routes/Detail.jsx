import React from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const params = useParams();
  console.log('current id', params.id);

  return (
    <>
      <div className='main-container'>
        <h1>Detail Dentist id -- {params.id}</h1>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
    </>
  )
}

export default Detail