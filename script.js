
// need to add question variable
// Need to add more specific picture choices in queryURL
function displayPlanetInfo(){
    var planetName = 'whatever the questions feeds in'
    var queryURL = 'https://images-api.nasa.gov/search?q=saturn'
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        var planetImage = $('<img>')
        planetImage.attr('src', response.collection.items[0].links[0].href)
        $('body').append(planetImage)
        var planetDescription =$('<p>')
        planetDescription.text(response.collection.items[0].data[0].description)
        $('body').append(planetDescription)
   
})
}
displayPlanetInfo()