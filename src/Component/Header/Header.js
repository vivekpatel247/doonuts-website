import React from "react";
import "../Header/Header.css"
import logo from "../Images/logo-doonuts 1.svg"

const Header = () => {
    return (
        <div className="header_section">
            <div className="section_container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" href="#"> <img className="header_logo" src={logo} alt="logo" /> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">MENU</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">SHOP</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">CONTACT US</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PAGES
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                </ul>
                            </li>
                        </ul>

                        <button className="header_btn">
                            <i class="fa-regular fa-heart fa-xl"></i>
                            <i class="fa-solid fa-bag-shopping fa-xl"></i>
                            <i class="fa-regular fa-user fa-xl"></i>
                        </button>
                    
                    </div>
                </div>
            </nav>
            </div>
        </div>
    )
}

export default Header