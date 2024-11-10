import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Ruta correcta para Navbar
import HomePage from "./pages/HomePage"; // Ajusta la ruta de HomePage si está en otra ubicación
import BusquedaPage from "./pages/BusquedaPage";
import NotFoundPage from "./pages/NotFoundPage";
import ListadoPage from "./pages/ListadoCompraPage"; // Asegúrate de que el nombre del archivo es correcto

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar agregado */}
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/busqueda" element={<BusquedaPage />} />
          <Route path="/listado" element={<ListadoPage />} />
          
          {/* Ruta para manejar páginas no encontradas */}
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
