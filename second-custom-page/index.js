import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
    <>
        <header>
            <nav>
                <img src="./react-logo.png" width="40px"/>
            </nav>
        </header>
        <h1>Reason's ReactJS is cool</h1>
        <ol>
            <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
            if I know React</li>
        </ol>
        <footer>
	<small>
		© 2024 Pawar development. All rights reserved.
	</small>
	</footer>
    </>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))