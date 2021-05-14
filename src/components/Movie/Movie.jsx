import React from 'react';
import noThumbnail from '../../images/no-poster.png';

export default function Movie({ movie, index, user, handleNomination, nominations, setNominations, setThumbnail }){

    function checkNomination(imdbID) {
        const nom = nominations.filter(m => m.indexOf(imdbID) > -1);
        return nom.length > 0 ? true : false
    }

    function handleThumbnail(poster) {
        let currentTn;
        // if null, clear thumbnail, otherwise, assign source of change and Poster url
        poster ? currentTn = {from: 'search', url: poster} : currentTn = {from: null, url:null};
        // if poster is N/A, add placeholder.
        currentTn.url === 'N/A' && (currentTn.url = noThumbnail);
        setThumbnail(currentTn);
    }

    return (
        <>
                <div 
                    className="movie-container movie-container-search-results"
                    onClick={() => handleNomination(movie, index)}
                    onMouseEnter={() => handleThumbnail(movie.Poster)}
                    onMouseLeave={() => handleThumbnail(null)}
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
