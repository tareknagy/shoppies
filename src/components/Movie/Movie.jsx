import React from 'react';

export default function Movie({ movie, index, user, handleNomination, nominations, setNominations }){

    function checkNomination(imdbID) {
        const nom = nominations.filter(m => m.indexOf(imdbID) > -1);
        return nom.length > 0 ? true : false
    }

    return (
        <div className="movie-container movie-container-search-results shadow">
            <div>
                <span>{ movie.Title }</span>  &nbsp;
                <span className="movie-date">{ movie.Year }</span>
            </div>
            <button className="btn-sm" onClick={() => handleNomination(movie, index)} disabled={nominations.length >= 5 || checkNomination(movie.imdbID)}>
                    { checkNomination(movie.imdbID) ? 'Nominated' : 'Nominate it!' }
            </button>
        </div>
    );
}
