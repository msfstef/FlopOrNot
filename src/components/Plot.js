import React, { Component } from 'react';

class Plot extends Component {
    render() {
        return (
            <div>
               <p>{this.props.plot}</p> 
            </div>
        );
    }
}

export default Plot;