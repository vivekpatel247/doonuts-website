import React from "react";
import "../Footer/Footer.css"
import logo from "../Images/footer_logo.svg"

const Footer = () => {
    return (
        <div>
            <div className="footer_background">
                <div>
                    <img className="footer_logo" src={logo} alt="logo" />
                    <ul className="footer_link">
                        <li class="nav-item ">
                            <a class="footer_nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="footer_nav-link" href="#">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="footer_nav-link" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="footer_nav-link" href="#">Menu</a>
                        </li>
                        <li class="nav-item">
                            <a class="footer_nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="footer_nav-link" href="#">Pages</a>
                        </li>
                    </ul>
                    <div className="footer_app_logo">
                        <i class="fa-brands fa-facebook-f fa-xl facebook-icon"></i>
                        <i class="fa-brands fa-twitter fa-xl icon twitter-icon"></i>
                        <i class="fa-brands fa-instagram fa-xl icon instagram-icon"></i>
                    </div>
                </div>
            </div>
            <div className="copyright_footer">
                <p className="copyright_footer_text"> Copyright © 2022. Doonuts Created with <span className="heart_logo"> ♥ </span> by UI-UX Studio. </p>
            </div>
        </div>
    )
}

export default Footer