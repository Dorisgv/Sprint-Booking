import React from "react";
import explore from "../../assets/images/Explore your world.png";
import iconRight from "./../../assets/images/FlechaDerecha.svg";
import iconTicket from "./../../assets/images/Ticket.svg";
import personas from "./../../assets/images/Personas.svg";
import "./StylePag.scss";
import hamburguer_aside from "./../../assets/images/Hamburguer_aside.svg";
import flecha_aside from "./../../assets/images/aside_flechaarriba.svg";
import circulo_aside from "./../../assets/images/circulo_aside.svg";
import linea2 from "./../../assets/images/Line 2.png";
import filtro from "./../../assets/images/Filtro.svg";
import cuadrorectangle from "./../../assets/images/Rectangle.png";
import flechaNavegacion from "./../../assets/images/FlechaHouston.svg"
import flechaDoble from "./../../assets/images/Flecha doble.svg"
import calendario from "./../../assets/images/Calendario.svg"
import despliegueDoble from "./../../assets/images/Despliegue doble.svg"
import lupa from "./../../assets/images/lupa.png"
const Roundtrip = () => {
  return (
    <>
      <div>
        <img src={explore} alt="explore" />
      </div>

      <aside className="main">
        <img
          className="hambuerguer_aside"
          src={hamburguer_aside}
          alt="hamburguer"
        />
        <div>
          <div className="main__aside">
            <div className="main__title">
              <h1 className="main__title--sortby">Sort by</h1>
            </div>
            <h4>Reset</h4>
            <img className="main__linea2" src={linea2} alt="linea2" />
          </div>

          <b>Price</b>
          <img className="flecha_aside" src={flecha_aside} alt="flecha" />
          <div className="main__circle1">
            <img className="circulo_aside" src={circulo_aside} alt="circulo" />
            <span className="Lowest-price">Lowest price</span>
          </div>
          <div className="main__circle1">
            <img className="circulo_aside" src={circulo_aside} alt="circulo" />
            <span className="Highest-price">Highest price</span>
          </div>
        </div>
      </aside>

      <aside className="asidetwo">
        <img className="asidetwo__filtroimg" src={filtro} alt="filtro" />
        <div className="asidetwo__filters">
          <h1 className="asidetwo__filters--oneFi">Filters</h1>
          <h4>Reset</h4>
        </div>
        <img className="asidetwo__linea2" src={linea2} alt="linea2" />

        <div className="asidetwo__transit">
          <b className="asidetwo__transit--negrita">No. of transit</b>
          <img
            className="asidetwo__transit--flechaaside"
            src={flecha_aside}
            alt="flecha"
          />
        </div>
        <div className="asidetwo__container">
          <div className="asidetwo__container--rectangleOne">
            <img
              className="asidetwo__container--rect"
              src={cuadrorectangle}
              alt="rectangle"
            />
            <span className="asidetwo__container--direct">Direct</span>
            <p className="asidetwo__container--dolares">30 USD</p>
          </div>
          <div className="asidetwo__container--rectangleOne">
            <img
              className="asidetwo__container--rect"
              src={cuadrorectangle}
              alt="rectangle"
            />
            <span className="asidetwo__container--direct">1 transit</span>
            <p className="asidetwo__container--dolares">45 USD</p>
          </div>
        </div>
        <img className="asidetwo__linea2" src={linea2} alt="linea2" />
        <div className="asidetwo__transit">
          <b className="asidetwo__transit--negrita">Transit point</b>
          <img
            className="asidetwo__transit--flechaaside"
            src={flecha_aside}
            alt="flecha"
          />
        </div>
        <div className="asidetwo__container">
          <div className="asidetwo__container--rectangleOne">
            <img
              className="asidetwo__container--rect"
              src={cuadrorectangle}
              alt="rectangle"
            />
            <span className="asidetwo__container--direct">Osaka (ITM)</span>
            
          </div>
          <div className="asidetwo__container--rectangleOne">
            <img
              className="asidetwo__container--rect"
              src={cuadrorectangle}
              alt="rectangle"
            />
            <span className="asidetwo__container--direct">Kuala Lumpur (KUL)</span>
            
          </div>
        </div>
        <img className="asidetwo__linea2" src={linea2} alt="linea2" />
        <div className="asidetwo__transit">
          <b className="asidetwo__transit--negrita">Transit duration</b>
          <img
            className="asidetwo__transit--flechaaside"
            src={flecha_aside}
            alt="flecha"
          />
        </div>
      </aside>


      <div className="buttons">
        <button className="main__selector--buttons-One">
          <div>
            <img src={iconRight} alt="" />
          </div>
          One way
        </button>
        <button className="main__selector--buttons-One">
          <div>
            <img src={personas} alt="" />
          </div>
          1
        </button>
        <button className="main__selector--buttons-One">
          <div>
            <img src={iconTicket} alt="" />
          </div>
          Economy
        </button>
      </div>
      <nav className="container-navegacion">
            <button className="navegacion"> 
                <img src={flechaNavegacion} alt="flecha__navegacion" />
                    <p className="houston1">Houston (HOU)</p>
            </button >
            <img className="flecha-doble" src={flechaDoble} alt="flecha-doble" />
            <button className="navegacion-LAX"> 
                <img src={flechaNavegacion} alt="flecha__navegacion" />
                    <p className="houston1">Los Angeles (LAX)</p>
            </button>
            <button className="navegacion-calendario"> 
                <img src={calendario} alt="" />
                    <p className="houston1">9/12/2023 - 12/2/2023</p>
                <img src={despliegueDoble} alt="" />    
            </button>
            <img className="lupa" src={lupa} alt="" />
      </nav>

      

      <section></section>
    </>
  );
};

export default Roundtrip;
