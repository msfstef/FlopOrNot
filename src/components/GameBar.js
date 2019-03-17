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

    render() {
        return (
            <div id="GameBar" className={this.props.win?"win":"loss"}>
                <div id="Score">
                    <div>Score</div>
                    <div>{this.props.score}</div>
                </div>

                <div id="PlayerResult">
                {this.props.win?"CORRECT":"WRONG"}
                </div>

                <div id="RoundInfo">
                    {this.formatInfo()}
                    <div>Budget: {this.props.budget}</div>
                    <div>Revenue: {this.props.revenue}</div>
                </div>
            </div>
        );
    }
}

export default GameBar;