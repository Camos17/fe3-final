import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { ContextProvider } from './Components/utils/global.context'

// const router = createBrowserRouter([
//   {
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/dentist/:id',
//         element: <Detail />
//       }
//     ]

//   }
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='dentist/:id' element={<Detail/>}></Route>
            <Route path='favs' element={<Favs/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </ContextProvider>
  </React.StrictMode>
);


