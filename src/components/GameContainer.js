import React, { Component } from 'react';
import Poster from './Poster'
import Cast from './Cast'
import Plot from './Plot'
import './GameContainer.css'
import GameBar from './GameBar';

class GameContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            win: false,
            wasFlop: false,
            prevMovie: {},
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
            win: true,
            score: this.state.score + this.state.currentWinPoints,
            currentWinPoints: this.state.winPoints
        })
        this.props.newMovie()
    }

    handleLoss = () => {
        this.setState({
            win: false,
            score: this.state.score - this.state.lossPoints,
        })
        this.props.newMovie()
    }

    userPick = (flop) => {
        var isFlop = (this.props.movie.budget > this.props.movie.revenue)
        this.setState({
            wasFlop:isFlop,
            prevMovie: this.props.movie
        })
        if (flop === isFlop) {
            this.handleWin()
        } else {
            this.handleLoss()
        }
    }


    render() {
        return (
            <div id="GameContainer">
                <p>{this.state.score}</p>
                <div className="button left" 
                    onClick={()=>this.userPick(true)}>
                    Flop
                </div>
                <div className="button right" 
                    onClick={()=>this.userPick(false)}>
                    Not
                </div>
                
                <div id="posterContainer">
                    <Poster poster_src={this.props.movie.poster_src} />
                </div>

                <div id="castContainer" className="hintContainer">
                    <Cast cast={this.props.movie.cast} />
                </div>

                <div id="hintContainer" className="hintContainer">
                    <Plot plot={this.props.movie.plot} />
                </div>

                <GameBar
                    title={this.state.prevMovie.title}
                    imdb={this.state.prevMovie.imdb_id}
                    isFlop={this.state.isFlop}
                    win={this.state.win}
                    score={this.state.score}
                    revenue={this.state.prevMovie.revenue}
                    budget={this.state.prevMovie.budget} />
            </div>
        );
    }
}

export default GameContainer;