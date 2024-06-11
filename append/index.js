import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

const page = (
   <div>
        <body>
        <h1>Scribble</h1>
        <h2>List of things</h2>
                <ol>
                    <li>Thing 1</li>
                    <li>Thing 2</li>
                    <li>Thing 3</li>
                    <li>Thing 4</li>
                </ol>
        </body>
   </div>
)
ReactDOM.render(page, document.getElementById("root"))
// document.getElementById("root").append(JSON.stringify(page))