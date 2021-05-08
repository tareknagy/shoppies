import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import SearchMovies from '../../components/SearchMovies/SearchMovies';
import Nominations from '../../components/Nominations/Nominations';
import * as userAPI from '../../utilities/user-api';

const omdbRootUrl = `http://www.omdbapi.com/?apikey=d6b95458&type=movie&s=`;

export default function NewNominations(props){
    const [nominations, setNominations] = useState([]);
    const [movies, setMovies] = useState([]);
    const [inputSearch, setInputSearch] = useState('');
    
    useEffect(function() {
        async function fetchNominations() {
            const nominations = await userAPI.getNominations();
            setNominations(nominations);
        }
        fetchNominations();
    }, []);

    async function handleNomination(omdbID, index) {
        // update search button
        const moviesNew = movies;
        moviesNew[index].nominated = !moviesNew[index].nominated
        setMovies(moviesNew);
        // update nominations 
        const nominations = await userAPI.manageUserNomination(omdbID);
        setNominations(nominations);
    }

    function searchForMovie(e) {
        e.preventDefault();
        const formatedMovie = inputSearch.replace(/\s+/g, '+');
        fetch(omdbRootUrl + formatedMovie)
            .then(res => res.json())
            .then(res => {
                res.Search.map(m => nominations.includes(m.imdbID) ? m.nominated = true : m.nominated = false)
                return res.Search
            })
            .then(res => setMovies(res))
    }

    function handleInputChanges(e) {
        setInputSearch(e.target.value);
    }

    return (
        <div className="search-movies">
            <Route exact path="/nominations/new">
                <Nominations 
                    user={props.user._id} 
                    nominations={nominations} 
                    handleNomination={handleNomination}
                    setNominations={setNominations}
                />
            </Route>
            <Route exact path="/nominations/new">
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
    );
}