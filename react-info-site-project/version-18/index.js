import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
    <h1>Ishaan's Shopping list 06-07-2024</h1>
    <ul>
    <li>Cookies</li>
    <li>Pokemon cards</li>
    <li>Electric water gun</li>
    <li> Scarlett and Violet Pokemon Cards Pack</li>
    <li>Xbox</li>
    </ul>
    </nav>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)
