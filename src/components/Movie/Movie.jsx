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
            {/* <button onClick={() => handleNomination(movie.imdbID, index)} disabled={nominations.length >= 5}> */}
            <button onClick={() => handleNomination(movie, index)} >
                    {/* { nominations.some(n => n.imdbID === movie.imdbID) ? 'ALREADY NOMINATED' : 'NOMINATE IT' } */}
                    { checkNomination(movie.imdbID) ? 'Nominated' : 'Nominate it!' }
                    {/* HIT */}

            </button>
            <br />
            user: { user }
        </div>
    );
}

// for (let i = 0; i < nominations.length; i++) {
//     nominations[i] = JSON.parse(atob(nominations[i]));
// }