import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import campusData from '../data/campusData';


const CampusDetails = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white shadow-md rounded-lg p-4 flex-1">
                <h3 className="mt-4 font-semibold">6 Fakultas Unggulan :</h3>
                <ul className="list-disc list-inside">
                    {campusData.programs.map((program, index) => (
                        <li key={index}>{program}</li>
                    ))}
                </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex-1">
                <h3 className="mt-4 font-semibold">Kontak:</h3>
                
                {/* Kontak dengan ikon */}
                <div className="flex flex-col mt-4 space-y-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 h-5 w-5" />
                        <span>{campusData.contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faPhone} className="text-gray-600 h-5 w-5" />
                        <span>{campusData.contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 h-5 w-5" />
                        <span>{campusData.contact.facebook}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600 h-5 w-5" />
                        <span>{campusData.contact.instagram}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600 h-5 w-5" />
                        <span>{campusData.contact.instagram2}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampusDetails;
