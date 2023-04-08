
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import React, { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";



function App() {

  const globalContext = useContext(ContextGlobal);
  // const themeMode = globalContext.theme.darkmode;

  return (
      <div className="App app-container">
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;
