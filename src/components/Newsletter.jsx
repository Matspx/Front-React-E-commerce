import React from "react";
import './Newsletter.css'

const NewsLetter = () => {

    return(
        <div className="newsletter-container">
            <div className="newsletter">
                <h1>Assine nossa Newsletter</h1>
                <div className="input-container">
                    <input type="text" placeholder="aaaa@asfsfa.com"/>
                    <button>vai</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter