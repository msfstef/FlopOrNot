import React, { Component } from 'react';
import './GameBar.css'

class GameBar extends Component {

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
        if (Math.floor(value/1000000) > 1) {
            let valRound = Math.floor(value/1000000)
            return "$" + valRound + "M"
        } else {
            let valRound = Math.floor(value/1000)
            return "$" + valRound + "K"
        }
    }

    render() {
        return (
            <div id="GameBar" className={this.props.win?"win":"loss"}>
                <div id="Score" className="barItem">
                    <div>Score</div>
                    <div>{this.props.score}</div>
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