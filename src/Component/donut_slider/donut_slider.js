import React from "react";
import "../donut_slider/donut_slider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import donut_one from "../Images/donut_one.png"
import donut_two from "../Images/donut_two.png"
import donut_three from "../Images/donut_three.png"
import donut_four from "../Images/donut_four.png"
import donut_five from "../Images/donut_five.png"
import donut_six from "../Images/donut_six.png"

function Responsive_donut() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
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
            <div className="donut_slider_section">
                <div className="container">
                    <div class="donutslider_title donutslider_title--left-line"> Follow us on instagram </div>
                    <h1 className="donutslider_section_title"> <span> @ </span> DOONUTS </h1>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <img className="donut_one" src={donut_one} alt="donut_one" />
                        </div>
                        <div>
                            <img className="donut_two" src={donut_two} alt="donut_two" />
                        </div>
                        <div>
                            <img className="donut_three" src={donut_three} alt="donut_three" />
                        </div>
                        <div>
                            <img className="donut_four" src={donut_four} alt="donut_four" />
                        </div>
                        <div>
                            <img className="donut_five" src={donut_five} alt="donut_five" />
                        </div>
                        <div>
                            <img className="donut_six" src={donut_six} alt="donut_six" />
                        </div>
                        <div>
                            <img className="donut_one" src={donut_one} alt="donut_one" />
                        </div>
                        <div>
                            <img className="donut_two" src={donut_two} alt="donut_two" />
                        </div>
                        <div>
                            <img className="donut_three" src={donut_three} alt="donut_three" />
                        </div>
                        <div>
                            <img className="donut_four" src={donut_four} alt="donut_four" />
                        </div>
                        <div>
                            <img className="donut_five" src={donut_five} alt="donut_five" />
                        </div>
                        <div>
                            <img className="donut_six" src={donut_six} alt="donut_six" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Responsive_donut;












