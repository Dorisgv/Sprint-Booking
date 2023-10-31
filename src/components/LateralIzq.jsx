import React from 'react'
import Frame_peso from "../components/MyBooking-D/Images/Frame_peso.png"
import Line_details from "../components/MyBooking-D/Images/Line_details.png"
import Line_detailsPeq from "../components/MyBooking-D/Images/Line_detailsPeq.png"
import Frame_avion from "../components/MyBooking-D/Images/Frame_avion.png"
import Container_nube from "../components/MyBooking-D/Images/Container_nube.png"
import avionLlegando from "../components/MyBooking-D/Images/Frame_avion_llegando.png"
import luna from "../components/MyBooking-D/Images/Frame_luna.png"
import linea2puntos from "../components/MyBooking-D/Images/linea2puntos.png"
import avionDespegando from "../components/MyBooking-D/Images/avionDespegando.png"
import calendarioV from "../components/MyBooking-D/Images/calendarioV.png"

const LateralIzq = () => {
    return (
        <>
            <aside className='contIzqPD'>
                <div className='titlePD'>
                    <img className='peso' src={Frame_peso} alt="signoPeso" />
                    <h3 className='titleLZ'>Price details</h3>
                </div>
                <img src={Line_details} alt="linea" />
                <div className='cont'>
                    <h4 className='subtitulos'>Adult basic fee</h4>
                    <h4 className='subtitulosLado'>$150</h4>
                </div>
                <div className='cont'>
                    <h4 className='subtitulos'>Tax</h4>
                    <h4 className='subtitulosLado'>Included</h4>
                </div>
                <div className='cont'>
                    <h4 className='subtitulos'>Regular total price</h4>
                    <h4 className='subtitulosLado'>$150</h4>
                </div>
                <div className='cont'>
                    <h4 className='subtituloSave'>Save</h4>
                    <h4 className='subtitulosLadoSave'>-$1.5</h4>
                </div>
                <img className='linePeq' src={Line_detailsPeq} alt="line" />
                <div className='cont'>
                    <h4 className='subtitulos'>Total</h4>
                    <h3 className='subtitulosLadoTotal'>$148.5</h3>
                </div>
            </aside>
            {/* <aside className='contIzqPD1'>
                <div className='titlePD'>
                    <img className='peso' src={Frame_avion} alt="avion" />
                    <h3>Houston - Los Angeles</h3>
                </div>
                <img src={Line_details} alt="lineG" />
                <div className='nube'>
                    <img className='iconNube' src={Container_nube} alt="nube" />
                    <h4>Cloudy Airlines</h4>
                </div>
                <h3 className='ciudad'>HOU - LAS</h3>
                <div className='arrive'>
                    <img src={avionLlegando} alt="avion" />
                    <h3 className='arriveEco'>Economy</h3>
                </div>
                <div className='Hora'>
                    <h3>23:15 - 1:25</h3>
                    <img src={linea2puntos} alt="lineaTwo" />
                </div>
                <div>
                    <img src={luna} alt="luna" />
                    <h3>2h10m</h3>
                    <img src={avionDespegando} alt="avionD" />
                    <h3>Direct</h3>
                </div>
                <div className='contFecha'>
                    <h3>9</h3>
                    <h3>Feb, 2023</h3>
                </div>
                <img src={Line_detailsPeq} alt="line" />
                <div className='subTitulos'>
                    <img src={Frame_peso} alt="signoPeso" />
                    <h3>Refundable</h3>
                </div>
                <div className='subTitulos'>
                    <img src={calendarioV} alt="calendario" />
                    <h3>Reschedule Available</h3>
                </div>
                -------------------------
                <div>
                    <img src={Container_nube} alt="nube" />
                    <h4>Cloudy Airlines</h4>
                </div>
                <h3>LAS - LAX</h3>
                <div>
                    <img src={avionLlegando} alt="avion" />
                    <h3>Economy</h3>
                </div>
                <div className='Hora'>
                    <h3>2:25 - 7:40</h3>
                    <img src={linea2puntos} alt="lineaTwo" />
                </div>
                <div>
                    <img src={luna} alt="luna" />
                    <h3>5h15m</h3>
                    <img src={avionDespegando} alt="avionD" />
                    <h3>Direct</h3>
                </div>
                <div className='contFecha'>
                    <h3>10</h3>
                    <h3>Feb, 2023</h3>
                </div>
                <img src={Line_detailsPeq} alt="line" />
                <div className='subTitulos'>
                    <img src={Frame_peso} alt="signoPeso" />
                    <h3>Refundable</h3>
                </div>
                <div className='subTitulos'>
                    <img src={calendarioV} alt="calendario" />
                    <h3>Reschedule Available</h3>
                </div>

            </aside> */}
        </>
    )
}

export default LateralIzq
