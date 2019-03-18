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

            cast: false,
            plot: false,
        }
    }


    handleWin = () => {
        this.setState({
            win: true,
            score: this.state.score + this.state.currentWinPoints,
            currentWinPoints: this.state.winPoints,

            cast: false,
            plot: false,
        })
        this.props.newMovie()
    }

    handleLoss = () => {
        this.setState({
            win: false,
            score: this.state.score - this.state.lossPoints,

            cast: false,
            plot: false,
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
                <div className="button left" 
                    onClick={()=>this.userPick(true)}>
                    Flop
                </div>
                <div className="button right" 
                    onClick={()=>this.userPick(false)}>
                    Not
                </div>
                
                <div id="posterContainer">
                    <Poster poster_src={this.props.movie.poster_src} 
                            loading={this.props.loading}/>
                </div>
                
                <div id="castButton"
                    onClick={()=>{this.setState({cast:true})}}
                    className={"hintButton" + 
                        ((this.state.cast || this.props.loading)?" hide":" show")}>
                SHOW CAST
                </div>

                <div id="castContainer" 
                    className={"hintContainer" + (this.state.cast?" show":" hide")}>
                    <Cast cast={this.props.movie.cast} />
                </div>

                <div id="plotButton"
                    onClick={()=>{this.setState({plot:true})}}
                    className={"hintButton" + 
                        ((!this.state.plot && this.state.cast)?" show":" hide")}>
                SHOW CAST
                </div>

                <div id="plotContainer" 
                    className={"hintContainer" + (this.state.plot?" show":" hide")}>
                    <Plot plot={this.props.movie.plot} />
                </div>

                <GameBar
                    title={this.state.prevMovie.title}
                    imdb={this.state.prevMovie.imdb_id}
                    isFlop={this.state.wasFlop}
                    win={this.state.win}
                    score={this.state.score}
                    revenue={this.state.prevMovie.revenue}
                    budget={this.state.prevMovie.budget} />
            </div>
        );
    }
}

export default GameContainer;