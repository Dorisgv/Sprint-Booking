// import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar/Navbar.jsx';
import Calendarflights from './components/home-page/Calendarflights.jsx';
import './index.css';
import Roundtrip from './components/Pag-Vuelos/Roundtrip.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes >
      {/* <Route path="/" element={<Navbar />}/> */}
      <Route path="/" element={<Calendarflights />}/>
      <Route path="Roundtrip" element={<Roundtrip />}/>
    </Routes>
  </BrowserRouter>,
)
