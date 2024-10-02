import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>(''); // State for username
    const [password, setPassword] = useState<string>(''); // State for password
    const [email, setEmail] = useState<string>(''); // State for email
    const [error, setError] = useState<string | null>(null); // State for error messages
    const [success, setSuccess] = useState<string | null>(null); // State for success messages
    const navigate = useNavigate(); // Hook for navigation between pages

    // Function to handle user registration
    const handleRegister = async () => {
        try {
            const response = await axios.post('https://localhost:7294/Auth/Register', {
                username,
                password,
                email
            });

            // Assuming the response includes a token
            const { token } = response.data;
            localStorage.setItem('token', token); // Store the token in localStorage

            setSuccess('User registered successfully!'); // Set success message
            setError(null); // Reset error message

            // Redirect the user to the Options page after successful registration
            navigate('/login');
        } catch (error) {
            setError('Error registering user. Please try again.'); // Set error message
            setSuccess(null); // Reset success message
            console.error('Error registering user:', error); // Log error
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} // Update username state
                    className="border border-gray-300 p-2 mb-4 w-full rounded"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                    className="border border-gray-300 p-2 mb-4 w-full rounded"
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                    className="border border-gray-300 p-2 mb-4 w-full rounded"
                />
                <button 
                    onClick={handleRegister} // Trigger registration
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Register
                </button>
                {error && <p className="mt-4 text-red-500">{error}</p>} {/* Display error message */}
                {success && <p className="mt-4 text-green-500">{success}</p>} {/* Display success message */}
            </div>
        </div>
    );
};

export default Register;
