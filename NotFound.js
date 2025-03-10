import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-blue-900">404</h1>
                <p className="text-xl text-gray-600 mt-4">Page Not Found</p>
                <button 
                    onClick={() => navigate('/')}
                    className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full"
                >
                    Return Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;
