import React from 'react';
import Movie from '../Movie/Movie';

export default function SearchResults(props){
    return (
        <div>
            <h1>Results:</h1>
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