import React from 'react'
import ReactDOM from 'react-dom/client'
import MyBooking from './components/MyBooking-D/MyBooking.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/MyBooking" element={<MyBooking />} />
    </Routes>
  </BrowserRouter>
)
