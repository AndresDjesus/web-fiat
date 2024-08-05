import React from "react";
import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Home} from "./components/Home";
import {Vehicles} from "./components/Vehicles";
import {Services} from "./components/Services";
import {Empresa} from "./components/Empresa";
import {Blog} from "./components/Blog";
import {Contactanos} from "./components/Contactanos";
import { VehicleId } from "./components/VehicleId";
import {ServicesId} from "./components/ServicesId"
import {BlogId} from "./components/BlogId"


function App() {
  return (
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/vehiculos" element={<Vehicles />} />
         <Route path="/vehiculos/:id" element={<VehicleId />} />
         <Route path="/empresa" element={<Empresa />} />
         <Route path="/servicios" element={<Services />} />
         <Route path="/servicios/:id" element={<ServicesId />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/blog/:id" element= {<BlogId />} />
         <Route path="/contactanos" element={<Contactanos />} />
   
      
       </Routes>
  );
}

export default App;
