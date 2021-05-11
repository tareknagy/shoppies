import React from 'react';
import '../SearchResults/SearchResults.css';

export default function Nominations({ user, nominations, handleNomination }){
    return (
    <>
        <h1>Your Nominations</h1>
        <div className="search">
            {nominations ? nominations.map((movie, index) => (
                <div 
                    className="movie-container movie-container-your-nominations shadow"
                    onClick={() => handleNomination(JSON.parse(movie), index)}
                >
                    <div>
                        <span>
                            { JSON.parse(movie).Title } &nbsp;
                        </span>
                        <span className="movie-date">
                            { JSON.parse(movie).Year }
                        </span>
                    </div>
                    <button className="btn-sm" style={{color: 'var(--grey-1)'}} onClick={() => handleNomination(JSON.parse(movie), index)}>
                        Remove
                    </button>
                </div>
            )): null}
        <div style={{fontSize: '2vmin', textAlign: 'center', justifySelf: 'center'}}>Nominate up to 5 movies</div>
        </div>
    </>
    )
}
