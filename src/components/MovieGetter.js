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
            loading: true,
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
    }

    getRandId = () => {
        let page = Math.floor(Math.random() * this.state.noOfPages) + 1
        let result = Math.floor(Math.random() * 20)
        return fetch(getEndpoint('/discover/movie') + params.join('') + '&page=' + page)
            .then( (response) => {
                return response.json()
            })
            .then ( (json) => {
                return json.results[result].id
            })
    }

    getMovie = (id) => {
        return fetch(getEndpoint('/movie/'+ id) + "&append_to_response=credits")
            .then( (response) => {
                return response.json()
            })
            .then ( (json) => {
                if (json.revenue > 0 && json.budget > 0) {
                    return json
                } else {
                    return false
                }
            })
    }

    getValidMovie = async () => {
        let id = await this.getRandId()
        let movie = await this.getMovie(id)
        if (movie) {
            console.log(movie)
            return movie
        } else {
            return this.getValidMovie()
        }
    }

    getData = async () => {
        this.setState({loading:true})
        let movie = await this.getValidMovie()
        var data = {
            title: movie.title,
            plot: movie.overview,
            poster_src: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            cast: movie.credits.cast.slice(0,5),
            budget: movie.budget,
            revenue: movie.revenue,
            imdb_id: movie.imdb_id,
        }
        this.setState({
            movie:data,
            loading: false
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