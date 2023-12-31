import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

//import context
import AmiiboContextProvider from './context/amiiboContext';

//import components vào trang
import Navbar from './components/navbar';
import Hook from './components/hook';
import DateAntd from './components/antDesign';
import JsonPage from './components/importJson';
import ApiPage from './components/fetchApi'

export default function App() {
  return (
    <AmiiboContextProvider>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-dark min-height-100vh">
            <Navbar />
          </div>
          <main className="col-10">
            {/* sử dụng router để chuyển hướng components */}
            <Routes>
              <Route path="/" element={<Hook />} />
              <Route path="/page2" element={<DateAntd />} />
              <Route path="/page3" element={<JsonPage />} />
              <Route path="/page4" element={<ApiPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </AmiiboContextProvider>
  );
}