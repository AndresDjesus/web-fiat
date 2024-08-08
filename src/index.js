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
import { Contactanos } from './components/Contactanos';
import { VehicleId } from './components/VehicleId';
import {BlogId} from './components/BlogId';


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
    element: <VehicleId />,
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
    path: "/blog",
    element: <Blog />,
    errorElement: <div>error</div>
  },
  {
    path: "/blog/:id",
    element: <BlogId />,
    errorElement: <div>error</div>
  },
  {
    path: "/contactanos",
    element: <Contactanos />,
    errorElement: <div>error</div>
  },
  {
    path: "/servicios",
    element: <Services />,
    errorElement: <div>error</div>
  }, 

]);

root.render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);


