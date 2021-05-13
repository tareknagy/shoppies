import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import './SearchMovies.css'


export default function SearchMovies(props){

    return (
        <div className="fade-in">
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
                    setThumbnail={props.setThumbnail}
                />
                {props.nominations.length >= 5 ? <div style={{fontSize: '2vmin', textAlign: 'center',  justifySelf: 'center'}}>That's 5! To switch a nomination, remove one first.</div> : ''}

            </div>
        </div>
    );
}
