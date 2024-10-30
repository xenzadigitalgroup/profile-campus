// src/components/AllNews.js

import React from 'react';
import newsData from '../data/newsData';

const AllNews = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Semua Berita</h2>
            {newsData.length > 0 ? (
                <div className="mt-4">
                    {newsData.map((news) => (
                        <div key={news.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                            <img src={news.image} alt={news.title} className="w-auto h-auto object-cover rounded" />
                            <h4 className="font-bold mt-2">{news.title}</h4>
                            {/* Memastikan 'isi' adalah array */}
                            {Array.isArray(news.isi) ? (
                                news.isi.map((paragraph, index) => (
                                    <p key={index} className="mt-2">{paragraph}</p>
                                ))
                            ) : (
                                <p className="mt-2">{news.isi}</p> // Tampilkan isi jika bukan array
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p>Tidak ada berita untuk ditampilkan.</p>
            )}
        </div>
    );
};

export default AllNews;
