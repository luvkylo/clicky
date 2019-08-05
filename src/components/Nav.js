import React from "react";

function Navbar(props) {
    return(
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/">Clicky Game</a>
                </li>
                <li className={props.demonstrate}>{props.message}</li>
                <li>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    );
}

export default Navbar;