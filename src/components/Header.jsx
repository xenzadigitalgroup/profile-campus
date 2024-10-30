import React, { useState } from 'react';
import logo from '../assets/logoupi.png'; // Ganti dengan path logo Anda

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-slate-400 text-white p-4">
            <div className="flex items-center justify-between">
                <img src={logo} alt="Logo Kampus" className="h-10" />
                <h1 className="text-2xl font-bold">Universitas Putra Indonesia YPTK</h1>

                {/* Tombol Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden block text-white focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                {/* Navigasi biasa untuk layar besar */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li><a href="https://sisfo.upiyptk.ac.id" className="hover:underline">Sisfo</a></li>
                        <li><a href="https://spmb.upiyptk.ac.id" className="hover:underline">Pendaftaran</a></li>
                        <li><a href="http://elearning.upiyptk.ac.id" className="hover:underline">E-Learning</a></li>
                        <li><a href="https://estudy-filkom.upiyptk.ac.id" className='hover:underline'>E-Study</a></li>
                    </ul>
                </nav>
            </div>

            {/* Sidebar untuk layar kecil, muncul dari kanan */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <button
                    onClick={toggleMenu}
                    className="text-white p-4 focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <nav className="mt-8">
                    <ul className="space-y-4 pl-4">
                        <li><a href="https://sisfo.upiyptk.ac.id" className="hover:underline">Sisfo</a></li>
                        <li><a href="https://spmb.upiyptk.ac.id" className="hover:underline">Pendaftaran</a></li>
                        <li><a href="http://elearning.upiyptk.ac.id" className="hover:underline">E-Learning</a></li>
                        <li><a href="https://estudy-filkom.upiyptk.ac.id" className='hover:underline'>E-Study</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
