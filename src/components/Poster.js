import React, { Component } from 'react';

class Poster extends Component {
    render() {
        return (
            <div>
                <img
                    src={this.props.poster_src}
                    alt="movie_poster" />
                
            </div>
        );
    }
}

export default Poster;