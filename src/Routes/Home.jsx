import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { data } = useContext(ContextGlobal);
  console.log('dentistsData Home', data);

  return (
    <main className="main-container" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {data.map((dentist) => <div><Card dentist={dentist} key={dentist.id}></Card><p>{dentist.id}</p></div>)}
      </div>
    </main>
  )
}

export default Home