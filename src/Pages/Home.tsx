import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Home: React.FC = () => {
    const navigate = useNavigate(); // Initialize navigate for programmatic routing

    // Function to handle login button click
    const handleLogin = () => {
        navigate('/login'); // Navigate to the login page
    };

    // Function to handle register button click
    const handleRegister = () => {
        navigate('/register'); // Navigate to the register page
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h1 className="text-3xl font-bold mb-6 text-center">Bienvenido</h1>
                <button
                    onClick={handleLogin} // Trigger login navigation
                    className="w-full bg-blue-500 text-white p-3 rounded mb-4 hover:bg-blue-600 transition duration-200"
                >
                    Iniciar Sesión
                </button>
                <button
                    onClick={handleRegister} // Trigger register navigation
                    className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition duration-200"
                >
                    Registrarse
                </button>
            </div>
        </div>
    );
};

export default Home;
