import React from "react";
import "../Taste_Rules/Rules.css"
import doonut_img from "../Images/colorful-tasty-donuts.svg"

const Rules = () => {
    return (
        <div className="Taste_Rules_section">
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-sm-12 col-lg-5">
                        <img className="doonut_img" src={doonut_img} alt="doonuts_img" />
                    </div>

                    <div className="col-12 col-sm-12 col-lg-5 Taste_Rules_section_data">
                        <div class="title title--left-line"> We Believe That </div>
                        <div className="Taste_Rules_dataset">
                            <h1 className="Taste_Rules_section_title"> <span> OUR </span> TASTE RULES </h1>
                            <p> Ultricies facilisis volutpat non duis elementum dignissim. Semper proin augue vulputate adipiscing. Sem egestas massa, molestie et, iaculis. Tortor volutpat imperdiet eget convallis volutpat faucibus. </p>
                            <button className="Taste_Rules_btn"> <h5 className="Taste_Rules_btn_text">Get Started</h5> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rules