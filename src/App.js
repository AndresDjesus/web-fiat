import React from "react";
import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Home} from "./components/Home";
import {Vehicles} from "./components/Vehicles";
import {Services} from "./components/Services";
import {Empresa} from "./components/Empresa";
import {Blog} from "./components/Blog";
import {Registro} from "./components/Registro";
import {Backoffice } from "./components/Backoffice";
import { BackofficeVehicles } from "./components/BackofficeVehicles";

function App() {
  return (
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/vehiculos" element={<Vehicles />} />
         <Route path="/vehiculos/:id" element={<div>detalle del vehiculo</div>} />
         <Route path="/empresa" element={<Empresa />} />
         <Route path="/servicios" element={<Services />} />
         <Route path="/servicios/:id" element={<div>detalle del servicio</div>} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/get-started" element={<Registro />} />
         <Route path="/backoffice" element = {<Backoffice />} />
         <Route path="/backoffice/vehiculos" element = {<BackofficeVehicles />} />
        

         {/* Define other routes that you need*/}
       </Routes>
  );
}

export default App;
