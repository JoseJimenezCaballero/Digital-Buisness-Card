import React from "react"
import headshot from "../images/headshot.jpg"
import email from "../images/icons/Mail.png"
import linkedIn from "../images/icons/linkedin.png"

export default function Info(){
    return(
        <div className="info">
            <img src={headshot} className="head-shot"/>
            <h1>Jose Jimenez</h1>
            <h4>Full-stack Developer</h4>
            <a href="https://josejimenezcaballero.github.io/"><h5>https://josejimenezcaballero.github.io/</h5></a>
            <div className="btn-container">
                <a href="mailto:josejimenez39@gmail.com">
                    <button className="email-btn">
                        <img src={email}/> Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/jose-jimenez-caballero-391329195">
                    <button className="linkedIn-btn">
                        <img src={linkedIn}/> LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}