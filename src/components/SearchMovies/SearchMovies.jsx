import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import './SearchMovies.css'


export default function SearchMovies(props){

    return (
        <>
            <h1>Find Movies</h1>
            <div className="search">
                <div className="movie-container shadow">
                        <input 
                            className="search-input"
                            type="text"
                            onChange={props.handleInputChanges}
                            value={props.inputSearch}
                            placeholder="Search Movies..."
                            />
                </div>

                <SearchResults 
                    movies={props.movies} 
                    setMovies={props.setMovies}
                    user={props.user}
                    handleNomination={props.handleNomination}
                    setNominations={props.setNominations}
                    nominations={props.nominations}
                />
                            {props.nominations.length >= 5 ? <div style={{fontSize: '2vmin', textAlign: 'center',  justifySelf: 'center'}}>You've already made 5 nominations!</div> : ''}

            </div>
        </>
    );
}
