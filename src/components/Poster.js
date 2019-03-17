import React, { Component } from 'react';
import './Poster.css'


class Poster extends Component {
    render() {
        return (
            <div id="Poster">
                <img
                    src={this.props.poster_src}
                    alt="movie_poster" />
                
            </div>
        );
    }
}

export default Poster;