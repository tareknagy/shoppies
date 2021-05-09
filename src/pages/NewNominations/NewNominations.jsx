import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import SearchMovies from '../../components/SearchMovies/SearchMovies';
import Nominations from '../../components/Nominations/Nominations';
import * as userAPI from '../../utilities/user-api';
import './NewNominations.css';

const omdbRootUrl = `http://www.omdbapi.com/?apikey=d6b95458&type=movie&s=`;

export default function NewNominations(props){
    const [nominations, setNominations] = useState([]);
    const [movies, setMovies] = useState([]);
    const [inputSearch, setInputSearch] = useState('');
    
    useEffect(function() {
        async function fetchNominations() {
            const nominations = await userAPI.getNominations();
            for (let i = 0; i < nominations.length; i++) {
                nominations[i] = atob(nominations[i]);
            }
            setNominations(nominations);
        }
        fetchNominations();
    }, []);

    async function handleNomination(movie, index) {
        const nominations = await userAPI.manageUserNomination(movie);
        for (let i = 0; i < nominations.length; i++) {
            nominations[i] = atob(nominations[i]);
        }
        setNominations(nominations);
    }

    async function searchForMovie(e) {
        e.preventDefault();
        const formatedMovie = inputSearch.replace(/\s+/g, '+');
        fetch(omdbRootUrl + formatedMovie)
            .then(res => res.json())
            .then(res => setMovies(res.Search))
    }

    function handleInputChanges(e) {
        setInputSearch(e.target.value);
    }

    return (
        <>
            <div className="search-movies">
                <Route exact path="/nominations">
                    <SearchMovies 
                        user={props.user._id} 
                        nominations={nominations} 
                        handleNomination={handleNomination}
                        setNominations={setNominations}
                        movies={movies}
                        setMovies={setMovies}
                        inputSearch={inputSearch}
                        setInputSearch={setInputSearch}
                        handleInputChanges={handleInputChanges}
                        searchForMovie={searchForMovie}
                    />
                </Route>
            </div>
            <div className="my-nominations">
                <Route exact path="/nominations">
                    <Nominations 
                        user={props.user._id} 
                        nominations={nominations} 
                        handleNomination={handleNomination}
                        setNominations={setNominations}
                    />
                </Route>
            </div>
        </>
    );
}