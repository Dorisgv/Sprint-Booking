import React from 'react'
import MyBooking from '../../components/MyBooking-D/MyBooking'
import LateralIzq from '../../components/LateralIzq'

const FormBooking = () => {
    return (
        <>
            <div className='ContPage'>
                <div className='ContForm'>
                    <MyBooking />
                </div>
                <div className='ContIzq'>
                    <LateralIzq />
                </div>
            </div>
        </>

    )
}

export default FormBooking