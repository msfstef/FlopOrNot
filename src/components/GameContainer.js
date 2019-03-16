import React, { Component } from 'react';
import Poster from './Poster'
import Cast from './Cast'
import Plot from './Plot'

class GameContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            score: 0,
            winPoints: 10,
            currentWinPoints: 10,
            lossPoints: 10,
            castPoints: 3,
            plotPoints: 2,
        }
    }


    handleWin = () => {
        this.setState({
            score: this.state.score + this.state.currentWinPoints,
            currentWinPoints: this.state.winPoints
        })
        alert('You won!')
        this.props.newMovie()
    }

    handleLoss = () => {
        this.setState({
            score: this.state.score - this.state.lossPoints,
        })
        alert('You lost...')
        this.props.newMovie()
    }

    userPick = (flop) => {
        var isFlop = (this.props.movie.budget > this.props.movie.revenue)
        if (flop === isFlop) {
            this.handleWin()
        } else {
            this.handleLoss()
        }
    }


    render() {
        return (
            <div>
                <p>{this.state.score}</p>
                <button onClick={()=>this.userPick(true)}>Flop</button>
                <button onClick={()=>this.userPick(false)}>Not</button>
                <Poster poster_src={this.props.movie.poster_src} />
                <Cast cast={this.props.movie.cast} />
                <Plot plot={this.props.movie.plot} />
            </div>
        );
    }
}

export default GameContainer;