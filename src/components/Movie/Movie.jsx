import React from 'react';

export default function Movie({ movie, index, user, handleNomination, nominations, setNominations }){

    function checkNomination(imdbID) {
        const nom = nominations.filter(m => m.indexOf(imdbID) > -1);
        return nom.length > 0 ? true : false
    }

    return (
        <div>
            { movie.Title }
            <br />
            { movie.Year }
            <br />
            <button onClick={() => handleNomination(movie, index)} disabled={nominations.length >= 5 || checkNomination(movie.imdbID)}>
                    { checkNomination(movie.imdbID) ? 'Nominated' : 'Nominate it!' }
            </button>
        </div>
    );
}
