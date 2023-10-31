import logo from "../../assets/icons/Logo.svg"
import facebook from "../../assets/icons/Facebook.svg"
import twitter from "../../assets/icons/Twitter.svg"
import instagram from "../../assets/icons/Instagram.svg"
import './style.scss'

import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="logo" />
                    <span className="footer-text-logo">E-Flight</span>
                </div>
                <div className="footer-links">
                    <div className="footer-grop">
                        <a href="#">About us</a>
                        <div className="sub-links">
                            <a href="#">How to book</a>
                            <a href="#">Help center</a>
                        </div>
                    </div>
                    <div className="footer-grop">
                        <a href="#">Flight</a>
                        <div className="sub-links">
                            <a href="#">Booking easily</a>
                            <a href="#">Promotions</a>
                        </div>
                    </div>
                    <div className="footer-grop">
                        <a href="#">Contact us</a>
                        <div className="footer-media-social">
                        <img src={facebook} alt="logo" />
                        <img src={twitter} alt="logo" />
                        <img src={instagram} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="footer-Btnsubscribe">
                    <div className="input-container">
                        <input type="email" placeholder="input your email" className="email-input" />
                    </div>
                    <button>Subscribete</button>
                </div>
                <div className="copyright">
                    © 2021 Company, Inc. • Privacy • Terms
                </div>
            </div>
        </footer>
    );
}

export default Footer;
