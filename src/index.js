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
    element: <div>empresa</div>,
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


