import React from "react";
import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Home} from "./components/Home";
import {Vehicles} from "./components/Vehicles";

function App() {
  return (
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/vehiculos" element={<Vehicles />} />
         <Route path="/vehiculos/:id" element={<div>detalle del vehiculo</div>} />
         <Route path="/empresa"  />

         {/* Define other routes that you need*/}
       </Routes>
  );
}

export default App;
