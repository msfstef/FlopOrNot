import React, { Component } from 'react';
import Loading from './Loading'
import './Poster.css'


class Poster extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageLoaded: false,
        }
    }

    componentDidUpdate (prevProps) {
        if (this.props.poster_src !== prevProps.poster_src) {
            this.setState({
                imageLoaded:false,
            })

            let img = new Image();
            img.src = this.props.poster_src
            img.onload = ()=>{
                this.setState({imageLoaded:true})
            }
        }
    }

    render() {
        return (
            <div id="Poster">
                {(this.props.loading || !this.state.imageLoaded)?
                <div id="noPosterContainer">
                    <img
                        id="noPoster"
                        src={require('../assets/noposter.png')}
                        alt="loading_poster" />
                    <div id="spinner">
                        <Loading />
                    </div>
                </div>
                :
                <img id="posterImage"
                    src={this.props.poster_src}
                    alt="movie_poster" />
                }


                
            </div>
        );
    }
}

export default Poster;