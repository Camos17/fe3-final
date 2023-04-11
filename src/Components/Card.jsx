import React from "react";


const Card = ({ dentist }) => {
  console.log('dentist data', dentist.name);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src="./images/dentist.png" alt="" />
        <span>{dentist.name}</span>
        <span>{dentist.username}</span>
        <span>{dentist.id}</span>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
