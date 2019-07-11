import React from "react";
import "./Header.css";

const Header = (props) => (
    <div className = "header">
        <div className="title"><img src="https://seeklogo.com/images/S/stranger-things-logo-BEFEEB2046-seeklogo.com.png"/></div>
        <div classnmae="scores">
            Score: {props.score} Highscore: {props.highscore}
        </div>
    </div>
);

export default Header;