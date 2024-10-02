import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>(''); // State for username input
    const [password, setPassword] = useState<string>(''); // State for password input
    const [error, setError] = useState<string | null>(null); // State for error messages
    const navigate = useNavigate(); // Hook for navigation after login

    const handleLogin = async () => {
        try {
            // Make a POST request to the login endpoint
            const response = await axios.post('https://localhost:7294/Auth/login', {
                username,
                password
            });
            const token = response.data.token; // Extract token from response
            localStorage.setItem('token', token); // Store the token in local storage
            setError(null); // Reset error if login is successful
            alert('Login successful!'); // Notify user of successful login
            navigate('/options'); // Navigate to the options page after login
        } catch (error) {
            // Handle login errors
            setError('Error logging in. Please check your credentials.');
            console.error('Error logging in:', error); // Log the error
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} // Update username state
                    className="border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                    className="border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    onClick={handleLogin} // Call handleLogin on button click
                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-200"
                >
                    Login
                </button>
                {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
