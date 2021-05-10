import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import SearchMovies from '../../components/SearchMovies/SearchMovies';
import Nominations from '../../components/Nominations/Nominations';
import AuthPage from '../AuthPage/AuthPage';
import * as userAPI from '../../utilities/user-api';
import './NewNominations.css';

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

    async function handleNomination(movie) {
        const nominations = await userAPI.manageUserNomination(movie);
        for (let i = 0; i < nominations.length; i++) {
            nominations[i] = atob(nominations[i]);
        }
        setNominations(nominations);
    }

    async function handleInputChanges(e) {
        setInputSearch(e.target.value)
        e.preventDefault();
        const formatedMovie = e.target.value.replace(/\s+/g, '+');
        fetch(process.env.REACT_APP_OMDB_TOKEN + formatedMovie)
            .then(res => res.json())
            .then(res => {
                if (res.Search) {
                    let searchResults = res.Search.slice(0, 4);
                    setMovies(searchResults)
                }
            })
    }

    return (
        <>
        { props.user ?
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
            :
            <AuthPage setUser={props.setUser} />
        }
        </>
    );
}