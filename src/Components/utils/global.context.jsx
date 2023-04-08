import { createContext, useReducer } from "react";

const theme = {
  lightmode: true,
  darkmode: false
};

export const initialState = {theme: theme, data: []}

export const ContextGlobal = createContext(initialState);

const themeReducer = (state, action) => {
  switch (action.type) {
    case "lightmode":
      return { darkMode: false};
    case "darkmode":
      return { darkmode: true}
    default:
      return state
  }
};


export function GlobalProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState.theme.darkmode);

  return <ContextGlobal.Provider value={{state: state, dispacth: dispatch, initialState}}>{props.children}</ContextGlobal.Provider>

}


// export const ContextProvider = ({ children }) => {
//   //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
//   return (
//     <ContextGlobal.Provider value={{}}>
//       {children}
//     </ContextGlobal.Provider>
//   );
// };
