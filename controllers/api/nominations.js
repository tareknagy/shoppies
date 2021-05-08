const fetch = require('node-fetch');
const omdbRootUrl = `http://www.omdbapi.com/?apikey=${process.env.OMBD_TOKEN}&`;


module.exports = {
    searchMovies,
    addNomination
}

function searchMovies(searchCriteria) {
    fetch(omdbRootUrl + searchCriteria)
        .then(res => res.json())
        .then(movies => {
            console.log(movies);
        })
}

function addNomination() {

}