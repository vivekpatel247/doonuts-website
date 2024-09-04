import React from "react";
import "../Banner/Banner.css"

const Banner = () => {
    return (
        <div className="Banner_section">
            <div className="container banner_data">
                <h1 className="banner_title"> YOUR DAILY DOSE OF <span className="banner_title_span"> LOVE </span> </h1> 
                <p className="banner_info"> Massa, ut scelerisque proin molestie pharetra nunc, aliquam dignissim vitae. Adipiscing suspendisse. </p>
                <button className="banner_btn"> <h5 className="btn_text">Get Started</h5> </button>
            </div>
        </div>
    )
}

export default Banner