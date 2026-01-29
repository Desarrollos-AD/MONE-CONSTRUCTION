import { Routes, Route } from "react-router-dom";

import Inicio from "../pages/Inicio";
import Nosotros from "../pages/Nosotros";
import Servicios from "../pages/Servicios";
import Productos from "../pages/Productos";
import Contacto from "../pages/Contacto";
import Terminos from "../pages/Terminos";

function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>
  );
}

export default AppRouter;
