import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const globalContext = useContext(ContextGlobal);
  // const theme = globalContext.theme.darkmode;
  // console.log("theme", theme);

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
        <Link to="home">Home</Link>
        <Link to="dentist">Dentist Detail</Link>
        <Link to="favs">Favorites</Link>
        <Link to="contact">Contacto</Link>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar