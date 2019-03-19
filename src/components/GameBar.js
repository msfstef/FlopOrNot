import React, { Component } from 'react';
import './GameBar.css'

class GameBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            scoreDiv: {},
            resultDiv: {},
        }
    }

    componentDidMount () {
        var scoreDiv = document.getElementById("Score")
        var resultDiv = document.getElementById("PlayerResult")
        this.setState({scoreDiv, resultDiv})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.score !== this.props.score) {
            let pointDiff = -(prevProps.score - this.props.score)

            var bubble = document.createElement("div")
            bubble.className = "bubble " + (pointDiff>0?"win":"loss")
            var diffText = document.createTextNode(pointDiff)
            bubble.appendChild(diffText)

            var result = document.createElement("div")
            result.className = "resultBubble " + (pointDiff>0?"win":"loss")
            var resultText = document.createTextNode((pointDiff>0?"CORRECT":"WRONG"))
            result.appendChild(resultText)

            this.state.scoreDiv.appendChild(bubble)
            this.state.resultDiv.appendChild(result)

            setTimeout(()=>{
                this.state.scoreDiv.removeChild(bubble)
                this.state.resultDiv.removeChild(result)
            }, 1000)
        }
    }

    formatInfo = () => {
        if (this.props.firstGame) {
            return <div>Is this a flop, or not?</div>
        }

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
        if(this.props.firstGame) {
            return <span>N/A</span>
        }

        if (value/1000000 >= 1) {
            let valRound = Math.round(value/1000000)
            return <span>{"$" + valRound + "M"}</span>
        } else {
            let valRound = Math.round(value/1000)
            return <span>{"$" + valRound + "K"}</span>
        }
    }

    render() {
        return (
            <div id="GameBar" 
                className={
                    (this.props.firstGame?"firstGame ":"") +
                    (this.props.win?"win":"loss")}>
                <div id="Score" className="barItem">
                    <div className="title">Score</div>
                    <div className="text">{this.props.score}</div>
                </div>

                <div id="ScoreFloating">
                    <div className="title">Score</div>
                    <div className="text">{this.props.score}</div>
                </div>

                <div id="PlayerResult" className="barItem">
                    {this.formatInfo()}
                </div>

                <div id="RoundInfo" className="barItem">
                    <div>Bgt: {this.formatDollars(this.props.budget)}</div>
                    <div>Rev: {this.formatDollars(this.props.revenue)}</div>
                </div>

                <div id="RoundInfoFloating">
                    
                    <a target="_blank" rel="noopener noreferrer" 
                        href={"https://www.imdb.com/title/" + this.props.imdb}>
                        <div>
                            {this.props.title}
                        </div>
                    </a>
                    
                    <div>Budget: {this.formatDollars(this.props.budget)}</div>
                    <div>Revenue: {this.formatDollars(this.props.revenue)}</div>
                </div>
            </div>
        );
    }
}

export default GameBar;