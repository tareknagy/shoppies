import React from 'react';
import '../SearchResults/SearchResults.css';

export default function Nominations({ user, nominations, handleNomination }){
    return (
    <>
        <h1>Your Nominations</h1>
        <div className="search-results">
            {nominations ? nominations.map((movie, index) => (
                <div className="movie-container movie-container-your-nominations shadow">
                    <div>
                        <span>
                            { JSON.parse(movie).Title } &nbsp;
                        </span>
                        <span className="movie-date">
                            { JSON.parse(movie).Year }
                        </span>
                    </div>
                    <button className="btn-sm" onClick={() => handleNomination(JSON.parse(movie), index)}>
                        Remove
                    </button>
                </div>
            )): null}
        </div>
        <div style={{fontSize: '2vmin'}}>Nominate up to 5 movies</div>
    </>
    )
}
