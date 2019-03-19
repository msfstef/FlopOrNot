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

    componentDidMount () {

    }

    toggleShow = ()=>{
        this.setState({show:!this.state.show})
    }

    render() {
        return (
            <div id="Header">
                <div className="inHeader">
                    <img className="logo" 
                        src={require('../assets/flopornotlogo.png')}
                        alt="logo" />
                    <div>FLOP OR NOT</div>
                </div>
                
                <div className="itemContainer">
                <About show={this.state.show} toggleShow={this.toggleShow} />
                <div className="about item" onClick={()=>this.toggleShow()}>
                    About
                    <div id="controlsReminderTriangle"></div>
                    <div id="controlsReminder">Check out the controls!</div>
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