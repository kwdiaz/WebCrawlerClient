import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importar Router para el enrutamiento
import './styles/index.css'; // Importar estilos
import Home from './Pages/Home'; // Importar componente Home
import Options from './Pages/Options'; // Asegúrate de que la ruta sea correcta
import Login from './Pages/Auth/Login'; // Importar componente de Login
import Register from './Pages/Auth/Register'; // Importar componente de Registro

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Establecer Home como la página de inicio */}
                <Route path="/login" element={<Login />} /> {/* Ruta para el componente de Login */}
                <Route path="/register" element={<Register />} /> {/* Ruta para el componente de Registro */}
                <Route path="/options" element={<Options />} /> {/* Ruta para el componente de Options */}
            </Routes>
        </Router>
    );
};

export default App;
