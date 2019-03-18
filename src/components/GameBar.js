import React, { Component } from 'react';
import './GameBar.css'

class GameBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            pointDiff: 0,
            active: false,
            bubbles: []
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.score !== this.props.score) {
            let pointDiff = (prevProps.score - this.props.score)
            this.setState({
                bubbles: [...this.state.bubbles, pointDiff]
            })
        }
    }

    formatInfo = () => {
        if (this.props.isFlop) {
            return (
                <div>
                <a target="_blank" rel="noopener noreferrer" 
                    href={"https://www.imdb.com/title/" + this.props.imdb}>
                {this.props.title}
                </a> was a flop!
                </div>
            )
        } else {
            return (
                <div>
                <a target="_blank" rel="noopener noreferrer" 
                    href={"https://www.imdb.com/title/" + this.props.imdb}>
                {this.props.title}
                </a> was a success!
                </div>
            )
        }
    }


    formatDollars = (value) => {
        if (value/1000000 > 1) {
            let valRound = Math.round(value/1000000)
            return "$" + valRound + "M"
        } else {
            let valRound = Math.round(value/1000)
            return "$" + valRound + "K"
        }
    }

    render() {
        return (
            <div id="GameBar" className={this.props.win?"win":"loss"}>
                <div id="Score" className="barItem">
                    <div class={"pointBubble" + (this.state.activeBubble?" active":"")}>
                        {this.state.pointDiff}
                    </div>
                    <div className="title">Score</div>
                    <div className="text">{this.props.score}</div>
                </div>

                <div id="PlayerResult" className="barItem">
                    <div>{this.props.win?"CORRECT":"WRONG"}</div>
                    {this.formatInfo()}
                </div>

                <div id="RoundInfo" className="barItem">
                    
                    <div>Bgt.: {this.formatDollars(this.props.budget)}</div>
                    <div>Rev.: {this.formatDollars(this.props.revenue)}</div>
                </div>
            </div>
        );
    }
}

export default GameBar;