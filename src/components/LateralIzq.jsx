import React from 'react'
import Frame_peso from "../components/MyBooking-D/Images/Frame_peso.png"
import Line_details from "../components/MyBooking-D/Images/Line_details.png"

const LateralIzq = () => {
    return (
        <>
            <aside>
                <div>
                    <img src={Frame_peso} alt="signoPeso" />
                    <h3>Price details</h3>
                </div>
                <img src={Line_details} alt="signoPeso" />
                <div className='cont'>
                    <h4>Adult basic fee</h4>
                    <h4>$150</h4>
                </div>
            </aside>
        </>
    )
}

export default LateralIzq
