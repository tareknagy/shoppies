import React from 'react';

export default function Movie({ movie, index, user, handleNomination, nominations, setNominations }){

    return (
        <div>
            { movie.Title }
            <br />
            { movie.Year }
            <br />
            {/* <button onClick={() => handleNomination(movie.imdbID, index)} disabled={nominations.length >= 5}> */}
            <button onClick={() => handleNomination(movie, index)} >
                    { movie.nominated ? 'ALREADY NOMINATED' : 'NOMINATE IT' }
            </button>
            <br />
            user: { user }
        </div>
    );
}