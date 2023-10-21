import React from 'react'
import "../MyBooking-D/sass/StyleMyBooking.scss"
import "../MyBooking-D/sass/_mixins.scss"
import Container7 from "../MyBooking-D/Images/Container 7.png"
import Rectangle7 from "../MyBooking-D/Images/Rectangle 7.png"
import Rectangle7_2 from "../MyBooking-D/Images/Rectangle 7 (2).png"
import Frame from "../MyBooking-D/Images/Frame.png"
import Frame_Tarjeta from "../MyBooking-D/Images/Frame Tarjeta.png"
import Frame_flecha_abajo from "../MyBooking-D/Images/Frame_flecha_abajo.png"
import Frame_calendario from "../MyBooking-D/Images/Frame_calendario.png"
import Frame_usuario from "../MyBooking-D/Images/Frame_usuario.png"
import Frame_mundo from "../MyBooking-D/Images/Frame_mundo.png"

const MyBooking = () => {
  return (
    <>
      <h1>My booking</h1>
      <img className='c1' src={Container7} alt="container7" />
      <img src={Container7} alt="container7" />
      <img className='cVerde' src={Rectangle7} alt="rectangle7" />
      <img className='cGrisMedio' src={Rectangle7_2} alt="rectangle7_2" />
      <img className='cGrisFinal' src={Rectangle7_2} alt="rectangle7_2" />
      <h3 className='bookingPV'>Booking</h3>
      <h3 className='purchasePGM' >Purchase</h3>
      <h3 className='ticketPGF'>Get your E-ticket</h3>
      <div className='containerTitlePassenger'>
        <img className='iconInf' src={Frame} alt="frame" />
        <h2 className='titlePassenger'>Passenger details</h2>
      </div>
      <p>Name as on ID card/passport without title and punctuation</p>
      <div className='PassengerName'>
        <h3 className='nombreCampo'>Name</h3>
        <div className='Txt'>
          <input className='inputCampo' type="Your name" />
        </div>
        <h3 className='nombreCampo'>Surname</h3>
        <div className='Txt'>
          <input className='inputCampo' type="Your surname" />
        </div>
      </div>
      <div className='PassengerName1'>
        <h3 className='nombreCampo'>Title</h3>
        <div className='TxtTitle'>
          <input className='inputCampoPeq' type="Your title" />
          <img className='icon' src={Frame_flecha_abajo} alt="flecha_abajo" />
        </div>
        <h3 className='nombreCampo'>Birthday</h3>
        <div className='TxtTitle'>
          <input className='inputCampoPeq' type="Your birthday" />
          <img className='icon' src={Frame_calendario} alt="calendario" />
        </div>
        <h3 className='nombreCampo'>Nationality</h3>
        <div className='TxtTitle'>
          <input className='inputCampoPeq' type="Your nationality" />
          <img className='icon' src={Frame_flecha_abajo} alt="flecha_abajo" />
        </div>
        <img className='iconMundo' src={Frame_mundo} alt="mundo" />
      </div>
      <div className='containerTitlePassenger'>
        <img className='iconInf' src={Frame_Tarjeta} alt="frame_tarjeta" />
        <h2 className='titlePassenger'>Identity</h2>
      </div>
      <div className='contenedorIdentity'>
        <p className='Text_Identity'>
          Passport valid for at least 6 months from departure date is required for international travel or transit abroad.

          Make sure that the passenger's name is exactly as written in the government issued ID/Passport/Driving License.
          Avoid any mistake, because some airlines don't allow name corrections after booking.
        </p>
      </div>
      <div className='contPassport'>
        <h3 className='nombreCampo'>Passport number</h3>
        <div className='contTextPassport'>
          <input className='inputCampo' type="Your passport number" />
        </div>
      </div>
      <div className='PassengerName2'>
        <h3 className='nombreCampo'>Country of issue</h3>
        <div className='Txt'>
          <input className='inputCampo' type="Country issue" />
          {/* <img className='icon_c' src={Frame_flecha_abajo} alt="flecha_abajo" /> */}
        </div>
        <h3 className='nombreCampo'>Passport Expire Date</h3>
        <div className='Txt'>
          <input className='inputCampo' type="PED" />
          {/* <img className='icon_c' src={Frame_calendario} alt="calendario" /> */}
        </div>
      </div>
      <div className='containerTitlePassenger'>
        <img className='iconInf' src={Frame_usuario} alt="frame_usuario" />
        <h2 className='titlePassenger'>Contact details</h2>
      </div>
      <div className='PassengerName'>
        <h3 className='nombreCampo'>Name</h3>
        <div className='Txt'>
          <input className='inputCampo' type="Your C.name" />
        </div>
        <h3 className='nombreCampo'>Surname</h3>
        <div className='Txt'>
          <input className='inputCampo' type="Your C.surname" />
        </div>
      </div>
      <div className='PassengerName1'>
        <h3 className='nombreCampo'>Title</h3>
        <div className='TxtTitle'>
          <input className='inputCampoPeq' type="Your title" />
          <img className='icon' src={Frame_flecha_abajo} alt="flecha_abajo" />
        </div>
        <h3 className='nombreCampo'>Birthday</h3>
        <div className='TxtTitle'>
          <input className='inputCampoPeq' type="Your birthday" />
          <img className='icon' src={Frame_calendario} alt="calendario" />
        </div>
        <h3 className='nombreCampo'>Nationality</h3>
        <div className='TxtTitle'>
          <input className='inputCampoPeq' type="Your nationality" />
          <img className='icon' src={Frame_flecha_abajo} alt="flecha_abajo" />
        </div>
        <img className='iconMundo' src={Frame_mundo} alt="mundo" />
      </div>
      <div className='contButton'>
        <button>Submit</button>
      </div>
    </>
  )
}

export default MyBooking;