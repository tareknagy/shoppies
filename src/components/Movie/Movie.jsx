import React from 'react';

export default function Movie({ movie, index, user, handleNomination, nominations, setNominations, setThumbnail }){

    function checkNomination(imdbID) {
        const nom = nominations.filter(m => m.indexOf(imdbID) > -1);
        return nom.length > 0 ? true : false
    }

    function handleThumbnail(poster) {
        // if null, clear thumbnail, otherwise, assign source of change and Poster url
        let currentTn;
        poster ? currentTn = {from: 'search', url: poster} : currentTn = {from: null, url:null};
        setThumbnail(currentTn);
    }

    return (
        <>
                <div 
                    className="movie-container movie-container-search-results fade-in"
                    onClick={() => handleNomination(movie, index)}
                    onMouseEnter={() => handleThumbnail(movie.Poster)}
                    onMouseLeave={() => handleThumbnail(null)}
                    onTouchStart={() => handleThumbnail(movie.Poster)}
                    onTouchEnd={() => handleThumbnail(null)}
                >
                    <div className="movie-container-desc">
                        <div className="movie-title">{ movie.Title }</div>  &nbsp;
                        <div className="movie-date">{ movie.Year }</div>
                    </div>
                    { checkNomination(movie.imdbID) ? <button className="btn-sm" style={{color: 'var(--grey-1)'}}>Remove</button> : <button className="btn-sm">Add</button>}
                </div>
        </>
    );
}
