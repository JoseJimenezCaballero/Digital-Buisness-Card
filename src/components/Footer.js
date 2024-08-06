import React from "react"
import github from "../images/icons/GitHub Icon.png"

export default function Footer(){
    return(
        <footer className="footer-container">
            <a href="https://github.com/JoseJimenezCaballero"><img src={github}/></a>
        </footer>
    )
}