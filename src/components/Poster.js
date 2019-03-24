import React, { Component } from 'react';
import Loading from './Loading'
import './Poster.css'


class Poster extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageLoaded: false,
            oldPoster: "none",
            newPoster: "none",
            showPrevPoster: false,
        }
    }

    componentDidUpdate (prevProps) {
        if (this.props.loading && !prevProps.loading) {
            this.setState({
                oldPoster: prevProps.poster_src,
                newPoster: "none",
                showPrevPoster: true,
            })

            setTimeout( ()=> {
                this.setState({
                    showPrevPoster: false,
                })
            }, 300)
        }

        if (this.props.poster_src !== prevProps.poster_src) {
            this.setState({
                imageLoaded:false,
                newPoster: this.props.poster_src,
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
                {this.state.showPrevPoster?
                    <img id="posterImage"
                    src={this.state.oldPoster}
                    alt="movie_poster" />
                    :
                    ((this.props.loading || !this.state.imageLoaded)?
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
                        alt="movie_poster" />)
                    }
            </div>
        );
    }
}

export default Poster;