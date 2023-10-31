import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import FormBooking from "../Pages/BookingOne/FormBooking";
import Layout from "../components/Layout/Layout";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>} />
                <Route path="/FormBooking" element={<FormBooking />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router
