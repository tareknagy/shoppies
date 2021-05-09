import React from 'react';
import '../SearchResults/SearchResults.css';

export default function Nominations({ user, nominations, handleNomination }){
    return (
    <>
        <h1>Your Nominations</h1>
        <div className="search-results">
            {nominations ? nominations.map((movie, index) => (
                <div>
                    { JSON.parse(movie).Title }
                    <br />
                    { JSON.parse(movie).Year }
                    <br />
                    <button onClick={() => handleNomination(JSON.parse(movie), index)}>
                        Remove
                    </button>
                </div>
            )): null}
        </div>
    </>
    )
}
