import React from "react";
import "../Beyond_Donuts/beyond.css"
import couple_img from "../Images/couple_img.png"

const Beyond = () => {
    return (
        <div className="beyond_section">
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-sm-12 col-lg-6 beyond_section_data">
                    <div class="beyond_title beyond_title--left-line"> We Believe That </div>
                        <div className="beyond_dataset">    
                            <h1 className="beyond_section_title"> BEYOND DONUTS </h1>
                            <p className="beyond_info"> Ultricies facilisis volutpat non duis elementum dignissim. Semper proin augue vulputate adipiscing. Sem egestas massa, molestie et, iaculis. Tortor volutpat imperdiet eget convallis volutpat faucibus. </p>
                            <button className="beyond_sec_btn"> <h5 className="beyond_sec_btn_text">Get Started</h5> </button>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-lg-6">
                        <img className="couple_img" src={couple_img} alt="couple_img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beyond