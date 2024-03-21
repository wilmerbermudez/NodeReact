import React from 'react';
import ReactDOM from 'react-dom/client';
import Empleados from './empleados';
import Solicitudes from './solicitudes';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from './dashboard';



  const router = createBrowserRouter([
    {
        path: "/empleados",
        element:  <Empleados />,
    },
    {
        path: "/solicitudes",
        element:  <Solicitudes />,
    },
    {
      path: "/",
      element:  <Dashboard />,
  },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
