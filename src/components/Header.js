import React, { Component } from 'react';
import About from './About';
import './Header.css'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }

    toggleShow = ()=>{
        this.setState({show:!this.state.show})
    }

    render() {
        return (
            <div id="Header">
                <div>Flop or Not</div>
                {/*<img className="logo" 
                    src={require("../assets/logo.png")}
                    alt="logo" /> */}
                
                <div className="itemContainer">
                <About show={this.state.show} toggleShow={this.toggleShow} />
                <div className="about item" onClick={()=>this.toggleShow()}>
                    About
                </div>
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