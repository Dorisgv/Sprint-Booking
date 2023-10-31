import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Style.scss';
import icon from './../../assets/images/Frame.svg';
import iconRight from './../../assets/images/FlechaDerecha.svg';
import iconTicket from './../../assets/images/Ticket.svg';
import iconPersona from './../../assets/images/iconoPersona.svg';
import { getFligthsOne } from './../Services/Conexion.js'
import moment from "moment";

const Calendarflights = () => {
  const [fecha, setFecha] = React.useState(new Date());
  const [minFecha, setMinFecha] = React.useState(new Date());
  const fechaFormateada = '';
  const [searchResults, setSearchResults] = React.useState([]);

  const filterFlight = async () => {
    const data2 = await getFligthsOne();
    

    
    const matchedFlights = data2.filter((flight) => {
      return (
        flight.origen === formik.values.origen &&
        flight.destino === formik.values.destino &&
        flight.fecha_salida === fechaFormateada 
        
      );
    });

    
    setSearchResults(matchedFlights);
  
  }

  const validationSchema = Yup.object({
    origen: Yup.string()
      .min(5, "Por favor ingrese al menos 5 caracteres")
      .required("Este campo es obligatorio"),
    destino: Yup.string()
      .required("Este campo es obligatorio"),
    fecha_salida: Yup.date()
      .required("Este campo es obligatorio"),
  });

  const initialValues = {
    origen: "",
    destino: "",
    fecha_salida: null,
  };

  const handleSubmit = (values) => {
    fechaFormateada = moment(values.fecha_salida).format("YYYY-MM-DD");
    console.log("Fecha formateada:", fechaFormateada);
    filterFlight();

    
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    
    console.log(searchResults);
  }, [searchResults]);

  return (
    <section >
      <h1>Find your flight</h1>
      <div className="main__selector">
        <div className="main__selector--buttons">
          <button className="main__selector--buttons-One"> 
          <div><img src={icon} alt="" /></div>
            Round trip</button>
          <button className="main__selector--buttons-Two">
          <div><img src={iconRight} alt="" /></div>
            One way</button>
        </div>
        <div className="main__selector--division"></div>
        <div className="main__selector--select">
        <div className="main__selector--select-three">
        <div><img src={iconPersona} alt="" /></div>
          <select >
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div className="main__selector--select-Four">
        <div><img src={iconTicket} alt="" /></div>
          <select>
          
            <option>Economy</option>
            <option>Firts class</option>
          </select>
          </div>
        </div>
      </div>
      
      <form className="main__form" onSubmit={formik.handleSubmit}>
        <div className="main__form--city">
          <label htmlFor="origen">
            From
            <select
              name="origen"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.origen}
            >
              <option value='Bogotá'>Bogotá</option>
              <option value='Medellín'>Medellin</option>
              <option value='Bogotá'>Bogotá</option>
            </select>
          </label>
          {formik.touched.origen && formik.errors.origen && (
            <p className="error-message">{formik.errors.origen}</p>
          )}
          <label htmlFor="destino">
            To
            <select
              name="destino"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.destino}
            >
              <option value='Bogotá'>Bogotá</option>
              <option value='Medellín'>Medellin</option>
              <option value='Bogotá'>Bogotá</option>
            </select>
          </label>
          {formik.touched.destino && formik.errors.destino && (
            <p className="error-message">{formik.errors.destino}</p>
          )}
        </div>
        <button type="submit">Buscar</button>
      </form>
      <section className="main__date">
        <div>
          <button>Departure date</button>
          <button>Returned date</button>
        </div>
        <ReactDatePicker
          selected={fecha}
          onChange={date => {
            setFecha(date);
            formik.setFieldValue("fecha_salida", date); // Actualiza el campo fecha_salida en el formulario
          }}
          minDate={minFecha}
          inline
          calendarClassName='myDatePicker'
        />
        {formik.touched.fecha_salida && formik.errors.fecha_salida && (
          <p className="error-message">{formik.errors.fecha_salida}</p>
        )}
      </section>
      

    </section>);
};

export default Calendarflights;