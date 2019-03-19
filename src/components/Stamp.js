import React, { Component } from 'react';
import logo from '../assets/msfsteflogo.svg'
import './Stamp.css'

class Stamp extends Component {
    render() {
        return (
            <div id="stamp">
                <div className="text">
                    <p>
                    
                    <a target="_blank" rel="noopener noreferrer"
                        href="https://msfstef.dev/">
                        Visit my portfolio site!
                    </a><br/><br/>
                    <a href="mailto:contact@msfstef.dev">
                    contact@msfstef.dev
                    </a>
                    </p>
                </div>
                <img src={logo} alt="logo" />
            </div>
        );
    }
}

export default Stamp;