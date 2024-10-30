// src/components/CampusProfile.js

import React from 'react';
import logo from '../assets/logoupi.png'; // Ganti dengan path logo Anda
import campusImage from '../assets/kampus.jpg'; // Ganti dengan path gambar kampus Anda
import NewsComponent from './NewsComponent'; // Mengimpor komponen berita

const CampusProfile = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* Foto kampus di bagian atas */}
            <img src={campusImage} alt="Kampus" className="w-full h-64 object-cover rounded-lg" />

            {/* Bagian Profil Kampus */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-white shadow-md rounded-lg p-4 flex-1">
                    <img src={logo} alt="Logo Kampus" className="w-32 mx-auto" />
                    <h2 className="text-xl font-bold text-center mt-2">Universitas Putra Indonesia "YPTK" Padang</h2>
                    <p className="mt-2 text-center">
                        Universitas Putra Indonesia "YPTK" Padang atau bisa disebut juga sebagai UPI ini adalah kampus terbaik No.1 di Sumatera Barat. Dimana ini sesuai dengan visinya yaitu "Menjadi Universitas yang unggul dan kompetitif dalam menghasilkan Sumber Daya Manusia yang berkarakter didasari Nilai-Nilai 12 Prinsip Dasar UPI-YPTK Padang pada tahun 2039"
                    </p>
                </div>
            </div>

            {/* Menambahkan Komponen Berita */}
            <NewsComponent />
        </div>
    );
};

export default CampusProfile;