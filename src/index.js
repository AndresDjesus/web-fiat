import { MantineProvider, MantineThemeProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import React from 'react';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './components/Home';
import { Vehicles } from './components/Vehicles';
import { Empresa } from './components/Empresa';
import { Services } from './components/Services';
import { Blog } from './components/Blog';
import { Registro } from './components/Registro';
import { Backoffice } from './components/Backoffice';
import { BackofficeVehicles } from './components/BackofficeVehicles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>error</div>
  },
  {
    path: "/vehiculos",
    element: <Vehicles/>,
    errorElement: <div>error</div>
  },
  {
    path: "/vehiculos/:id",
    element: <div>detalle del vehiculo</div>,
    errorElement: <div>error</div>
  },
  {
    path: "/empresa",
    element: <Empresa />,
    errorElement: <div>error</div>
  },
  {
    path: "/servicios",
    element: <Services />,
    errorElement: <div>error</div>
  },
  {
    path: "/servicios/:id",
    element: <div>detalle del vehiculo</div>,
    errorElement: <div>error</div>
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <div>error</div>
  },
  {
    path: "/get-started",
    element: <Registro />,
    errorElement: <div>error</div>
  },
  {
    path: "/servicios",
    element: <Services />,
    errorElement: <div>error</div>
  }, 
  {
    path: "/backoffice",
    element: <Backoffice />,
    errorElement: <div>error</div>
  },
  {
    path: "/backoffice/vehiculos",
    element: <BackofficeVehicles />,
    errorElement: <div>error</div>
  }

]);

root.render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);


