import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  // console.log('dentist data', props.dentist.name);

  const [favDentist, setFavDentist] = useState(props.dentist);
  const [favList, setFavList] = useState([]);
  
  let newFavs = [];

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    
    
    setFavDentist(props.dentist);
    console.log('dentist', favDentist);
    newFavs.push(props.dentist);
    console.log('newFavs', newFavs);
    setFavList(favList => [...favList, favDentist]);
    console.log('favList', favList);
    // localStorage.setItem('favorites', JSON.stringify(newFavs));

  }

  return (
    <Link to={`dentist/${favDentist.id}`}>
      <div className="card">
          {/* En cada card deberan mostrar en name - username y el id */}

          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <img src="./images/dentist.png" alt="" />
          <span>{favDentist.name}</span>
          <span>{favDentist.username}</span>
          <span>{favDentist.id}</span>
          <button onClick={addFav} className="favButton">Add fav</button>
      </div>
    </Link>
  );
};

export default Card;
