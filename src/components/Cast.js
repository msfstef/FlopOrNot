import React, { Component } from 'react';
import './Cast.css'

class Cast extends Component {
    genCast = () => {
        let cast_raw = this.props.cast || [];
        var cast = [];
        for (let i=0; i<cast_raw.length; i++) {
            let actor = cast_raw[i]
            if (!actor.profile_path) {continue}
            cast.push({
                character: actor.character,
                name: actor.name,
                pic_src: "https://image.tmdb.org/t/p/w200" + actor.profile_path
            })

        }
        return cast
    }


    render() {
        var cast = this.genCast();
        return (
            <div id="castItemsContainer">
                {cast.map((actor) => {
                    return (
                        <div className="castItem" key={actor.name}>
                            <img 
                                src={actor.pic_src}
                                alt="actor pic" />
                            <div className="castText">
                                <div>{actor.name}</div>
                                <div>{actor.character}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Cast;