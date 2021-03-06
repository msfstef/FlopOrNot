import React, { Component } from 'react';
import {getEndpoint} from '../config/keys';
import {params} from '../config/params';

import GameContainer from './GameContainer';



class MovieGetter extends Component {

    constructor (props) {
        super(props)
        this.state = {
            noOfPages: 1,
            movie: {},
            movieBuffer: [],
            bufferSize: 3,
            loading: true,
            internet: true,
        }
    }

    async componentDidMount () {
        let noOfPages = await this.getNoOfPages()
        await this.setState({noOfPages})
        this.getData()
    }

    getNoOfPages = () => {
        return fetch(getEndpoint('/discover/movie') + params.join(''))
            .then( (response) => {
                return response.json()
            })
            .then ( (json) => {
                return json.total_pages
            })
            .catch( (e) => {
                console.log("No response - possibly no internet.")
                console.log(e)
                setTimeout(()=>{
                    this.setState({internet: false})
                }, 2000)
            })
    }

    getRandId = () => {
        let page = Math.floor(Math.random() * this.state.noOfPages) + 1
        return fetch(getEndpoint('/discover/movie') + params.join('') + '&page=' + page)
            .then( (response) => {
                return response.json()
            })
            .then ( (json) => {
                let result = Math.floor(Math.random() * json.results.length)
                return json.results[result].id
            })
            .catch( (e) => {
                console.log("No response - possibly no internet.")
                console.log(e)
                setTimeout(()=>{
                    this.setState({internet: false})
                }, 2000)
                
            })
    }

    getMovie = (id) => {
        return fetch(getEndpoint('/movie/'+ id) + "&append_to_response=credits")
            .then( (response) => {
                return response.json()
            })
            .then ( (json) => {
                if (json.revenue > 1000 && json.budget > 1000) {
                    return json
                } else {
                    return false
                }
            })
            .catch( (e) => {
                console.log(e)
            })
    }

    getValidMovie = async () => {
        let id = await this.getRandId()
        let movie = await this.getMovie(id)
        if (movie) {
            return movie
        } else {
            return this.getValidMovie()
        }
    }

    dataFromMovie = (movie) => {
        var data = {
            title: movie.title,
            plot: movie.overview,
            poster_src: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            cast: movie.credits.cast.slice(0,5),
            budget: movie.budget,
            revenue: movie.revenue,
            imdb_id: movie.imdb_id,
        }
        return data
    }

    fillBuffer = async () => {
        var len = this.state.movieBuffer.length;
        for (let i = 0; i < this.state.bufferSize - len; i++) {
            let movieRaw = await this.getValidMovie()
            let movie = this.dataFromMovie(movieRaw);
            (new Image()).src = movie.poster_src;
            this.state.movieBuffer.push(movie)
        }
    }

    getData = async () => {
        this.setState({
            loading:true,
            internet:true
        })
        const BUFFER_TIME = 700 // loading buffer in ms
        let loading = true;
        let loadingBuffer = true;
        setTimeout(()=>{
            loadingBuffer = false
            this.setState({loading: loading || loadingBuffer})
        }, BUFFER_TIME)
        
        let movie = {}
        if (this.state.movieBuffer.length > 0) {
                movie = this.state.movieBuffer.pop()
        } else {
            let movieRaw = await this.getValidMovie()
            movie = this.dataFromMovie(movieRaw)
        }

        loading = false;
        this.setState({
            movie:movie,
            prevMovieTitle: movie.title,
            loading: loading || loadingBuffer,
        }, async () => {
            this.fillBuffer()
        })

    }

    
    render() {
        
        return (
            <div>
                <GameContainer {...this.state} newMovie={this.getData} />
            </div>
        );
    }
}

export default MovieGetter;