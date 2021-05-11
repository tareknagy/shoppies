import React from 'react';

export default function Movie({ movie, index, user, handleNomination, nominations, setNominations }){

    function checkNomination(imdbID) {
        const nom = nominations.filter(m => m.indexOf(imdbID) > -1);
        return nom.length > 0 ? true : false
    }

    return (
        <div 
            className="movie-container movie-container-search-results shadow"
            onClick={() => handleNomination(movie, index)}
        >
            <div>
                <span>{ movie.Title }</span>  &nbsp;
                <span className="movie-date">{ movie.Year }</span>
            </div>
            { checkNomination(movie.imdbID) ? <button className="btn-sm" style={{color: 'var(--grey-1)'}}>Nominated</button> : <button className="btn-sm">Nominate it!</button>}
        </div>
    );
}
