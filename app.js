$(document).ready(() => {
    $("form").on('submit', (e) => {
        var searchedMovie = $("input").val();
        getMovies(searchedMovie)
    })
})

function getMovies(search) {
    $.ajax({
        url: 'https://www.omdbapi.com/?&apikey=f2905585&s=star wars ' + search,
        dataType: 'jsonp',
        success: function(results){
            alert(results);
        }
    });
}