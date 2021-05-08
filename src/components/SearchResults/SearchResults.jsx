import React from 'react';
import Movie from '../Movie/Movie';
import './SearchResults.css';

export default function SearchResults(props){
    return (
        <div className="search-results">
            {props.movies ? props.movies.map((movie, index) => (
                <Movie 
                    movie={movie} 
                    setMovies={props.setMovies}
                    index={index} 
                    key={index} 
                    user={props.user} 
                    handleNomination={props.handleNomination}
                    setNominations={props.setNominations}
                    nominations={props.nominations}
                />
            )): null}
        </div>
    );
}