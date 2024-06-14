import React from "react"
import ReactDOM from "react-dom"

function FirstCustomPage() {
    return(
        <div>
        <h1>Reasons why I am excited to learn React</h1>
        <ol>
        <li>It is fun to generate composable websites</li>
        <li>I want to master MERN stack</li>
        <li>I want to use the same language for frontend and backend</li>
        </ol>
        </div>
    )
}
ReactDOM.render(<FirstCustomPage/>, document.getElementById("root"))