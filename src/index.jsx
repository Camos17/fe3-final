import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './Components/utils/global.context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route path='home' element={<Home/>}></Route>
            <Route path='dentist' element={<Detail/>}></Route>
            <Route path='favs' element={<Favs/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);


