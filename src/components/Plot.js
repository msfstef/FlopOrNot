import React, { Component } from 'react';
import './Plot.css'

class Plot extends Component {
    render() {
        return (
            <div id="plotTextContainer">
               <div>{this.props.plot}</div> 
            </div>
        );
    }
}

export default Plot;