$(document).ready(() => {
    $("form").on('submit', (e) => {
        var searchedMovie = $("input").val();
        getMovies(searchedMovie)
        e.preventDefault()
    })
})

function getMovies(search) {
    axios.get('http://www.omdbapi.com/?&apikey=f2905585&s=star wars ' + search)
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
}