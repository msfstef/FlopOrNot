import React, { Component } from 'react';

class Cast extends Component {
    genCast = () => {
        let cast_raw = this.props.cast || [];
        var cast = [];
        for (let i=0; i<cast_raw.length; i++) {
            let actor = cast_raw[i]
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
            <div>
                {cast.map((actor) => {
                    return (
                        <div key={actor.name}>
                            <img 
                                src={actor.pic_src}
                                alt="actor pic" />
                            <span>{actor.name}</span>
                            <span>{actor.character}</span>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Cast;