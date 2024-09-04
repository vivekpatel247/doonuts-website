import React from "react";
import "../Slider_Menu/slider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Responsive() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="slider_menu_section">
                <div className="container">
                    <div class="slider_title slider_title--left-line"> Want your too? </div>
                    <h1 className="slider_section_title"> <span> GET </span> YOUR DONUT </h1>

                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="slider_iteam_one">
                                <div className="iteam_one_titlebar">
                                    <h3 className="iteam_name"> Raspberry Donut </h3>
                                    <button className="discount"> 20% Off </button>
                                </div>
                                <div class="searchbox">
                                    <p> $5.99 </p>
                                    <button><span> <i class="fa-solid fa-bag-shopping"></i> </span> </button>
                                </div>
                            </div>
                            <div className="slider_iteam_two">
                                <div className="iteam_one_titlebar">
                                    <h3 className="iteam_name"> Raspberry Donut </h3>
                                    <button className="discount"> 20% Off </button>
                                </div>
                                <div class="searchbox">
                                    <p> $5.99 </p>
                                    <button><span> <i class="fa-solid fa-bag-shopping"></i> </span> </button>
                                </div>
                            </div>
                            <div className="slider_iteam_three">
                                <div className="iteam_one_titlebar">
                                    <h3 className="iteam_name"> Raspberry Donut </h3>
                                    <button className="discount"> 20% Off </button>
                                </div>
                                <div class="searchbox">
                                    <p> $5.99 </p>
                                    <button><span> <i class="fa-solid fa-bag-shopping"></i> </span> </button>
                                </div>
                            </div>
                            <div className="slider_iteam_four">
                                <div className="iteam_one_titlebar">
                                    <h3 className="iteam_name"> Raspberry Donut </h3>
                                    <button className="discount"> 20% Off </button>
                                </div>
                                <div class="searchbox">
                                    <p> $5.99 </p>
                                    <button><span> <i class="fa-solid fa-bag-shopping"></i> </span> </button>
                                </div>
                            </div>
                            <div className="slider_iteam_one">
                                <div className="iteam_one_titlebar">
                                    <h3 className="iteam_name"> Raspberry Donut </h3>
                                    <button className="discount"> 20% Off </button>
                                </div>
                                <div class="searchbox">
                                    <p> $5.99 </p>
                                    <button><span> <i class="fa-solid fa-bag-shopping"></i> </span> </button>
                                </div>
                            </div>
                            <div className="slider_iteam_two">
                                <div className="iteam_one_titlebar">
                                    <h3 className="iteam_name"> Raspberry Donut </h3>
                                    <button className="discount"> 20% Off </button>
                                </div>
                                <div class="searchbox">
                                    <p> $5.99 </p>
                                    <button><span> <i class="fa-solid fa-bag-shopping"></i> </span> </button>
                                </div>
                            </div>
                            <div className="slider_iteam_three">
                                <div className="iteam_one_titlebar">
                                    <h3 className="iteam_name"> Raspberry Donut </h3>
                                    <button className="discount"> 20% Off </button>
                                </div>
                                <div class="searchbox">
                                    <p> $5.99 </p>
                                    <button><span> <i class="fa-solid fa-bag-shopping"></i> </span> </button>
                                </div>
                            </div>
                            <div className="slider_iteam_four">
                                <div className="iteam_one_titlebar">
                                    <h3 className="iteam_name"> Raspberry Donut </h3>
                                    <button className="discount"> 20% Off </button>
                                </div>
                                <div class="searchbox">
                                    <p> $5.99 </p>
                                    <button><span> <i class="fa-solid fa-bag-shopping"></i> </span> </button>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Responsive;












