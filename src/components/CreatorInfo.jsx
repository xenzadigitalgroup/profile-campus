// src/components/CreatorInfo.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import tailwindLogo from '../assets/tailwind-svgrepo-com.svg'; // Pastikan file logo Tailwind ada di path ini

const CreatorInfo = () => {
    return (
        <div className="text-center mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-700">This website was created by</p>
            <p className="text-gray-700">ZAKI MUSHTHAFA BILLAH, IF-1, BP23.</p>
            <div className="flex justify-center items-center space-x-2 mt-2">
            <p className="text-gray-700">Built with:</p>
                <FontAwesomeIcon icon={faReact} className="text-blue-500 h-6 w-6" />
                <img src={tailwindLogo} alt="Tailwind CSS" className="h-6 w-6" />
                <span className="text-gray-700 text-sm">React + Tailwind CSS</span>
            </div>
        </div>
    );
};

export default CreatorInfo;
