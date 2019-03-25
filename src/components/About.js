import React, { Component } from 'react';
import moviedblogo from '../assets/themoviedbdlogosquare.svg';
import Stamp from './Stamp';
import './About.css'

class About extends Component {
    render() {
        return (
            <div id="About" 
                className={"aboutContainer "+(this.props.show?"show":"hide")}
                onClick={()=>{this.props.toggleShow()}}>
                <div id="AboutContent" 
                    onClick={(e)=>e.stopPropagation()}>
                    <div className="cancelBtn" onClick={()=>this.props.toggleShow()}>X</div>
                    <h1>About Flop or Not</h1>
                    <h2>How to play</h2>
                    <p>
                        The game is simple: you're shown a movie poster, and you have to guess whether the movie was a box office failure (flop).
                    </p>
                    <p>
                        Commands:
                    </p>
                    <ul>
                        <li>Flop: use the button, F or left arrow key on the keyboard, or swipe left.</li>
                        <li>Not Flop: use the button, H or right arrow key on the keyboard, or swipe right. </li>
                        <li>Reveal Hints: use the buttons, or press spacebar on the keyboard.</li>
                    </ul>
                    <p>
                        Although it is hard to exactly define what makes a movie a flop, for the sake of this game, if the budget exceeds the US gross revenue, it is a flop. 
                        You can use additional help by revealing the cast and plot of the movie, at the cost of points earned if you win the round.
                    </p>
                    <ul>
                        <li>Round Won: +10 points</li>
                        <li>Round Lost: -20 points</li>
                        <li>Reveal Cast: -3 points if round is won</li>
                        <li>Reveal Plot: -2 points if round is won</li>
                    </ul>
                    <p>
                        Keep in mind that most movies are not flops, so play conservatively.
                        <br/><br/>
                        The game is also available on Android from the Google Play store!
                        <br/>
                        <a href='https://play.google.com/store/apps/details?id=com.flopornot&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                            <img alt='Get it on Google Play' id="aboutPlayBadge"
                            src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
                        </a>
                        <br/>
                        Enjoy!
                    </p>
                    

                    <h2>About me</h2>
                    <p>
                    I made this app after discussing some unexpected movie flops with a friend, such as Treasure Island, and thought this would be a fun game to play, especially with company.
                    If you're interested in seeing my other projects, please visit <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://msfstef.dev/">
                    my website 
                    </a> and feel free to contact me on there for any issues with the site or any other queries.

                    <br/><br/>
                    The web app was made in March of 2019 using React and The Movie DB's API which they kindly provide at no cost with excellent documentation.
                    </p>
                    <div className="logoContainer">
                        <a className="logo themoviedb"
                            target="_blank" rel="noopener noreferrer"
                            href="https://www.themoviedb.org/">
                        <img id="theMovieDbLogo"
                            alt="the movie db logo"
                            src={moviedblogo} />
                        </a>
                        <div className="logo msfstef">
                        <Stamp />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;