import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import FormBooking from "../Pages/BookingOne/FormBooking";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/FormBooking" element={<FormBooking />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router
