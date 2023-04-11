import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, handleChangeTheme} = useContext(ContextGlobal);
  console.log('globalData navbar', theme);
  // const theme = globalContext.theme.darkmode;
  // console.log("theme", theme);

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
        <Link to="home" style={{color: theme.font}}>Home</Link>
        <Link to="dentist" style={{color: theme.font}}>Dentist Detail</Link>
        <Link to="favs" style={{color: theme.font}}>Favorites</Link>
        <Link to="contact" style={{color: theme.font}}>Contacto</Link>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleChangeTheme} style={{background: theme.background, color: theme.font}}>Change theme</button>
    </nav>
  )
}

export default Navbar