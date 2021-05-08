import React from 'react';
import SearchResults from '../SearchResults/SearchResults';


export default function SearchMovies(props){

    return (
        <div>
            <h1>Search:</h1>

            <form onSubmit={props.searchForMovie}>
                <input 
                    type="text"
                    onChange={props.handleInputChanges}
                    value={props.inputSearch}
                />
                <button type="submit">Search</button>
            </form>

            <SearchResults 
                movies={props.movies} 
                setMovies={props.setMovies}
                user={props.user}
                handleNomination={props.handleNomination}
                setNominations={props.setNominations}
                nominations={props.nominations}
            />
        </div>
    );
}
