import React, { Component } from 'react';
import './Cast.css'

class Cast extends Component {
    componentDidMount() {
        const slider = document.getElementById('castItemsContainer');
        var isDown = false;
        var startX;
        var scrollLeft;        

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollLeft = slider.scrollLeft;
            if (isDown) {
                startX = e.pageX - slider.offsetLeft;
                slider.classList.add('active');
                
            }
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    }


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
                {cast.map((actor, index) => {
                    return (
                        <div className={"castItem"
                            + (index===0?" first ":" ")
                            + (index===cast.length-1?"last":"")}
                            key={actor.name}>
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