
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Layout from "./Components/layout";
import React, { useContext, useMemo, useState } from "react";
import {ContextGlobal, themes } from "./Components/utils/global.context";



function App() {

  



  // const globalContext = useContext(ContextGlobal);
  // const themeMode = globalContext.theme.darkmode;

  return (
    // <ContextGlobal.Provider value={providerValue}>
      <div className="App app-container" >
        <Layout>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </Layout>
      </div>
    // </ContextGlobal.Provider>
  );
}

export default App;
