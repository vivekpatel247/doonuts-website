import React from "react";
import "../discount_card/discount.css"

const Discount = () => {
    return (
        <div className="container">
            <div className="discount_card_sec">
                <div className="col-12 col-sm-12 col-lg-6 discount_section_data">
                    <div class="discount_sec_title discount_sec_title--left-line"> Lets Create Happiness </div>
                    <div className="discount_sec_dataset">
                        <h1 className="discount_section_title"> Get 20%OFF </h1>
                        <p> Get offer instantly by just subscribing to our daily newsletter and enjoy donuts. </p>
                        <div class="discount_searchbox-wrap">
                            <input type="text" placeholder="Email" className="input_filed" />
                            <button><span> Get started </span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount