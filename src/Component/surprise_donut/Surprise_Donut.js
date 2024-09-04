import React from "react";
import "../surprise_donut/Surprise_Donut.css"
import donut_box from "../Images/doonuts-box-img.png"
import donut from "../Images/Donuts-img.svg"

const Surprisedonut = () => {
    return (
        <div className="Surprisedonut_section">
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-sm-12 col-lg-6   ">
                        <img className="donut_box" src={donut_box} alt="donuts_box" />
                    </div>

                    <div className="col-12 col-sm-12 col-lg-6 Surprisedonut_section_data">
                        <div class="Surprisedonut_title Surprisedonut_title--left-line"> Here is your special </div>
                        <div className="Surprisedonut_dataset">
                            <h1 className="Surprisedonut_section_title"> GET YOUR <span> SURPRISE </span> DONUT BOX NOW </h1>
                            <p> Ultricies facilisis volutpat non duis elementum dignissim. Semper proin augue vulputate adipiscing. </p>
                            <div className="Surprisedonut_subdata">
                                <img className="donut" src={donut} alt="donuts" />
                                <p> 6 Minimum donuts </p>
                            </div>
                            <div className="Surprisedonut_subdata">
                                <img className="donut" src={donut} alt="donuts" />
                                <p> No Repeat donut </p>
                            </div>
                            <div class="searchbox-wrap">
                                <input type="text" placeholder="Select Pack" className="input_filed" />
                                <button><span> Get started </span> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Surprisedonut