import React from "react";
import "../Happiness/happiness.css"

const Happiness = () => {
    return (
        <div className="happiness_section">
            <div className="container happiness_data">
                <h1 className="happiness_title"> YOUR DAILY DOSE OF <span className="happiness_title_span"> LOVE </span> </h1>
                <p className="happiness_info"> Massa, ut scelerisque proin molestie pharetra nunc, aliquam dignissim vitae. Adipiscing suspendisse. </p>
                <button className="happiness_btn"> <h5 className="happiness_btn_text">Get Started</h5> </button>
            </div>
        </div>
    )
}

export default Happiness