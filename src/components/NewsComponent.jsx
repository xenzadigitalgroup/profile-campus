// src/components/NewsComponent.js

import React from 'react';
import { Link } from 'react-router-dom'; // Mengimpor Link dari react-router-dom
import newsData from '../data/newsData'; // Mengimpor data berita

const NewsComponent = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <h3 className="text-lg font-semibold">Berita Terbaru</h3>
            {newsData.length > 0 ? (
                <div>
                    <img src={newsData[0].image} alt={newsData[0].title} className="w-60 h-60 object-cover rounded" />
                    <h4 className="font-bold mt-2">{newsData[0].title}</h4>
                    <p className="mt-2">{newsData[0].description}</p>
                    <Link to="/all-news" className="mt-4 text-blue-500 hover:underline">
                        Lihat Semua Berita
                    </Link>
                </div>
            ) : (
                <p>Tidak ada berita terbaru.</p>
            )}
        </div>
    );
};

export default NewsComponent;