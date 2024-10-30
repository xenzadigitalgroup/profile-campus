import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CampusProfile from './components/CampusProfile';
import CampusDetails from './components/CampusDetails';
import Footer from './components/Footer';
import AllNews from './components/AllNews';
import CreatorInfo from './components/CreatorInfo';

const App = () => {
    return (
        <Router>
            <div className="bg-gray-100">
                <Header />
                <div className="max-w-4xl mx-auto p-4">
                    <Routes>
                        {/* Home route dengan CampusProfile, CreatorInfo, dan CampusDetails */}
                        <Route 
                            path="/" 
                            element={
                                <>
                                    <CampusProfile />
                                    <CampusDetails />
                                    <CreatorInfo /> {/* Menampilkan informasi pembuat */}
                                </>
                            } 
                        />
                        {/* Route untuk halaman all-news */}
                        <Route path="/all-news" element={<AllNews />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
