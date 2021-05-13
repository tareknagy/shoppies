import React from 'react';
import '../SearchResults/SearchResults.css';

export default function Nominations({ user, nominations, handleNomination, setThumbnail }){
    
    function handleThumbnail(poster) {
        // if null, clear thumbnail, otherwise, assign source of change and Poster url
        let currentTn;
        poster ? currentTn = {from: 'nomination', url: poster} : currentTn = {from: null, url:null};
        setThumbnail(currentTn);
    }

    return (
    <div className="fade-in">
        <h1>Your Nominations</h1>
        <div className="search">
            {nominations ? nominations.map((movie, index) => (
                <div 
                    className="movie-container movie-container-your-nominations shadow"
                    onClick={() => 
                        {handleNomination(JSON.parse(movie), index)
                        handleThumbnail(null)
                    }}
                    onMouseEnter={() => handleThumbnail(JSON.parse(movie).Poster)}
                    onMouseLeave={() => handleThumbnail(null)}
                >
                    <div className="movie-container-desc">
                        <div className="movie-title">{ JSON.parse(movie).Title } &nbsp;</div>
                        <span className="movie-date">{ JSON.parse(movie).Year }</span>
                    </div>
                    <button className="btn-sm" style={{color: 'var(--grey-1)'}} onClick={() => handleNomination(JSON.parse(movie), index)}>Remove</button>
                </div>
            )): null}
        <div style={{fontSize: '2vmin', textAlign: 'center', justifySelf: 'center'}}>Nominate up to 5 movies</div>
        </div>
    </div>
    )
}
