import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import SearchMovies from '../../components/SearchMovies/SearchMovies';
import Nominations from '../../components/Nominations/Nominations';
import AuthPage from '../AuthPage/AuthPage';
import Thumbnail from '../../components/Thumbnail/Thumbnail'
import * as userAPI from '../../utilities/user-api';
import './NewNominations.css';

export default function NewNominations(props){
    const [nominations, setNominations] = useState([]);
    const [movies, setMovies] = useState([]);
    const [inputSearch, setInputSearch] = useState('');
    const [thumbnail, setThumbnail] = useState({from: null, url: null});
    
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
                <Route exact path="/nominations">
                    <div className="search-movies fade-in">
                        {thumbnail.from === 'nomination' ?
                            <Thumbnail thumbnail={thumbnail} />
                        :
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
                                setThumbnail={setThumbnail}
                                />
                        }
                    </div>
                    <div className="my-nominations fade-in">
                        {thumbnail.from === 'search' ?
                            <Thumbnail thumbnail={thumbnail} />
                        :
                            <Nominations 
                                user={props.user._id} 
                                nominations={nominations} 
                                handleNomination={handleNomination}
                                setNominations={setNominations}
                                setThumbnail={setThumbnail}
                            />
                        }
                    </div>
                </Route>
            </>
            :
            <AuthPage setUser={props.setUser} />
        }
        </>
    );
}