import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  // console.log('dentist data', props.dentist.name);

  const [dentists, setDentists] = useState();
  const [favDentist, setFavDentist] = useState(props.dentist);
  const [favList, setFavList] = useState([]);
  
  let newFavs = [];

  const getStoredDentistData = () => {
    const storedDentists = localStorage.getItem('dentists');
  };

  const setDentistsStorage = (dentists) => {
    localStorage.setItem('dentists', JSON.stringify(dentists));
  };

  const addFav = (e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    e.preventDefault();
    
    setFavDentist(props.dentist);
    console.log('dentist', favDentist);
    newFavs.push(props.dentist);
    console.log('newFavs', newFavs);
    setFavList(favList => [...favList, favDentist]);
    console.log('favList', favList);
    // localStorage.setItem('favorites', JSON.stringify(newFavs));

  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src="./images/dentist.png" alt="" />
        <span className="title">{favDentist.name}</span>
        <span className="subtitle">{favDentist.username} | {favDentist.id}</span>
        
        <span className="detail-btn">
          <Link to={`dentist/${favDentist.id}`}>See More</Link>
        </span>
        
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
