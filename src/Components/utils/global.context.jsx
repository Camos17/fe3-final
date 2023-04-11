import React, { createContext, useEffect, useMemo, useReducer, useState } from "react";

// const theme = {
//   lightmode: true,
//   darkmode: false
// };

export const themes = {
  light: {
    font: 'black',
    background: 'white'
  },
  dark: {
    font: 'white',
    background: 'black'
  }
};


export const initialState = {theme: themes.light, data: []}

export const ContextGlobal = createContext(initialState);



// const themeReducer = (state, action) => {
//   switch (action.type) {
//     case "lightmode":
//       return { darkMode: false};
//     case "darkmode":
//       return { darkmode: true}
//     default:
//       return state
//   }
// };


// export function GlobalProvider(props) {
//   const [state, dispatch] = useReducer(themeReducer, initialState.theme.darkmode);

//   return <ContextGlobal.Provider value={{state: state, dispacth: dispatch, initialState}}>{props.children}</ContextGlobal.Provider>

// }


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, setTheme] = useState(themes.light);
  const [data, setData] = useState([]);

  const handleChangeTheme = () => {
    if (theme === themes.dark) {
      console.log("handle theme -1", theme);
      setTheme(themes.light);
    }
    if (theme === themes.light) {
      console.log("handle theme -2", theme);
      setTheme(themes.dark);
    }
  };

  const getDentistsData = async () => {
    const dentists = await fetch('https://jsonplaceholder.typicode.com/users');
    const parsedDentistsData = await dentists.json();
    console.log('dentists', dentists, 'data', parsedDentistsData);
    setData(parsedDentistsData);
  };

  useEffect(() => {
    getDentistsData();
  }, []);
  
  const providerValue = useMemo(() => ({theme, handleChangeTheme, data}), [theme, handleChangeTheme, data]);

  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

// export default ContextGlobal;
