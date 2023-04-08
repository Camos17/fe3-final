import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState('');
  const [age, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [isValidNameField, setIsValidNameField] = useState(false);
  const [isValidAgeField, setIsValidEmailField] = useState(false);

  const handlerOnChangeName = (e) => setName(e.target.value);
  const handlerOnChangeAge = (e) => setEmail(e.target.value);

  const validateName = (name) => {
    const nameTransformed = name.trim();
    if (nameTransformed.length > 1) {
      return true;
    } else {
      return false;
    }
  };


  const getErrorMessage = (validName, validAge) => {
    let errorMsg = '';
    if (!validName && !validAge) {
      errorMsg = 'Por favor verifique su información nuevamente';
    } else if(!validName) {
      errorMsg = 'Verifica que hayas ingresa el nombre.';
    }
    return errorMsg;
  };

  // TODO: Validate why does not change isValidAeField after changin valu in the input
  const handlerOnSubmit = (e) => {
    e.preventDefault();

    setIsValidNameField(validateName(name));

    if (isValidNameField) {
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
    
  };


  return (<>
    <div className='form-rejuvenate__container'>
      <form onSubmit={handlerOnSubmit} className='form-rejuvenate'>
        <div>
          <label htmlFor='name'>Ingresa Nombre</label>
          <input 
          type='text'
          id='name'
          placeholder='Nombre'
          value={name}
          onChange={handlerOnChangeName}
        />
        </div>
        <div>
          <label htmlFor='age'>Ingresa Email</label>
          <input 
            type='text'
            id='age'
            placeholder='Email'
            value={age}
            onChange={handlerOnChangeAge}
          />
        </div>
        <button type='submit'>Enviar</button>
      </form>

      {errorMessage ? <div>
          <p>{getErrorMessage(isValidNameField, isValidAgeField)}</p>
        </div> : ''}
    </div>
    

  </>);
};

export default Form;
