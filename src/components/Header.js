import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div id="Header">
                <div>Flop or Not</div>
                {/*<img className="logo" 
                    src={require("../assets/logo.png")}
                    alt="logo" /> */}
                
                <div className="itemContainer">
                <a className="about item"
                    target="_blank" rel="noopener noreferrer"
                    href="https://msfstef.github.io/#/about">
                    About
                </a>
                <a className="contact item"
                    target="_blank" rel="noopener noreferrer"
                    href="https://msfstef.github.io/#/contact">
                    Contact
                </a>
                </div>
            </div>
        );
    }
}

export default Header;