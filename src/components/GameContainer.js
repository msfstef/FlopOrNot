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
            lossPoints: 20,
            castPoints: 3,
            plotPoints: 2,

            cast: false,
            plot: false,
        }
    }

    componentDidMount () {
        this.anchorLinkHandler()
    }

    anchorLinkHandler = (id) => {
        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    
        const targetAnchor = document.getElementById(id);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor);
    
        window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
    
        const checkIfDone = setInterval(function() {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = "-1";
                targetAnchor.focus();
                clearInterval(checkIfDone);
            }
        }, 100);
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
        var isFlop = (this.props.movie.budget > 0.95*this.props.movie.revenue)
        this.setState({
            wasFlop:isFlop,
            prevMovie: this.props.movie
        })

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        if (flop === isFlop) {
            this.handleWin()
        } else {
            this.handleLoss()
        }
    }

    showCast = () => {
        this.setState({
            cast:true,
            currentWinPoints: 
                this.state.currentWinPoints - 
                this.state.castPoints
        })
        
        setTimeout(()=> {
            window.scrollTo({ top: 10000, left: 0, behavior: "smooth" })
        }, 200)
    }

    showPlot = () => {
        this.setState({
            plot:true,
            currentWinPoints: 
                this.state.currentWinPoints - 
                this.state.plotPoints
        })

        setTimeout(()=> {
            window.scrollTo({ top: 10000, left: 0, behavior: "smooth" })
        }, 200)
    }


    render() {
        return (
            <div id="GameContainer">
                <div
                    style={{pointerEvents: this.props.loading?"none":"auto"}} 
                    className="button left" 
                    onClick={()=>this.userPick(true)}>
                    <span>Flop</span>
                </div>
                <div
                    style={{pointerEvents: this.props.loading?"none":"auto"}} 
                    className="button right"
                    onClick={()=>this.userPick(false)}>
                    <span>Success</span>
                </div>
                
                <div id="posterContainer">
                    <Poster poster_src={this.props.movie.poster_src} 
                            loading={this.props.loading}/>
                </div>
                
                <div id="castButton"
                    onClick={()=> this.showCast()}
                    className={"hintButton" + 
                        ((this.state.cast || this.props.loading)?" hide ":" show ")
                        +(this.props.loading?" hideLoad":"")}>
                    <span>SHOW CAST (-{this.state.castPoints} points)</span>
                </div>

                <div id="castContainer" 
                    className={"hintContainer" + (this.state.cast?" show":" hide")}>
                    <Cast cast={this.props.movie.cast} />
                </div>

                <div id="plotButton"
                    onClick={()=> this.showPlot()}
                    className={"hintButton" + 
                        ((!this.state.plot && this.state.cast)?" show":" hide")
                        +(this.props.loading?" hideLoad":"")}>
                    <span>SHOW PLOT (-{this.state.plotPoints} points)</span>
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