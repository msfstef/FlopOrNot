import React, { Component } from 'react';
import Poster from './Poster'
import Cast from './Cast'

class GameContainer extends Component {
    render() {
        return (
            <div>
                <Poster poster_src={this.props.movie.poster_src} />
                <Cast cast={this.props.movie.cast} />
            </div>
        );
    }
}

export default GameContainer;