
// Global Variables that we need
var planetName 
var answerArray = []
 
// Global Objects that we are using
var clickBaitDescription = {
      'mercury': "something something",
      'venus': " Something witty and funny that will be written later",
      'earth': "",
      'mars': "",
      'jupiter': "",
      'saturn': "something witty",
      'uranus': "",
      'neptune':"",
      'pluto': "",
    
    }
var questionnaire = {
    
      questions: {
            q1: 'Which SuperHero do you most identify with?',
            q2: 'Which do you prefer as a pet?',
            q3: 'Baked Potato or Mashed?',
            q4: 'Flip Flops or Hiking Boots?',
          },
      options: {
            q1: ['Batman', 'Superman'],
            q2: ['Dog', 'Cat'],
            q3: ['Mashed', 'Baked'],
            q4: ['Flip Flops', 'Hiking Boots'],
          },

}

// Function that starts the questions when the star button is clicked
$("#startbtn").on('click', function(){
            $(".content").empty()
           firstQuestion()
})
    
// Renders the first question
 function firstQuestion() {
            
            var divQuestion = $("<div>");
            var divAnswer1 = $("<div>") ;
            var divAnswer2 = $("<div>") ; 
            var nextbtn = $("<btn>").text("Next Question").addClass("button");

            divQuestion.text(questionnaire.questions.q1);
            divAnswer1.text(questionnaire.options.q1[0])
            divAnswer2.text(questionnaire.options.q1[1])

            $(".content").append(divQuestion);
            $(".content").append(divAnswer1);
            $(".content").append(divAnswer2);
            $(".content").append(nextbtn);
            
            
      
            $(".button").on("click", function() {
                  $(".content").empty()
                  secondQuestion()
                  
            })
           
 }

function secondQuestion() {
            var divQuestion = $("<div>");
            var divAnswer1 = $("<div>") ;
            var divAnswer2 = $("<div>") ; 
            var nextbtn = $("<btn>").text("Next Question").addClass("button");

            divQuestion.text(questionnaire.questions.q2);
            divAnswer1.text(questionnaire.options.q2[0])
            divAnswer2.text(questionnaire.options.q2[1])

            $(".content").append(divQuestion);
            $(".content").append(divAnswer1);
            $(".content").append(divAnswer2);
            $(".content").append(nextbtn);

            
      
            $(".button").on("click", function() {
                  $(".content").empty()
                  thirdQuestion()

                  
                  
            })
           
}

function thirdQuestion() {
            var divQuestion = $("<div>");
            var divAnswer1 = $("<div>") ;
            var divAnswer2 = $("<div>") ; 
            var nextbtn = $("<btn>").text("Next Question").addClass("button");

            divQuestion.text(questionnaire.questions.q3);
            divAnswer1.text(questionnaire.options.q3[0])
            divAnswer2.text(questionnaire.options.q3[1])

            $(".content").append(divQuestion);
            $(".content").append(divAnswer1);
            $(".content").append(divAnswer2);
            $(".content").append(nextbtn);

            
      
            $(".button").on("click", function() {
                  $(".content").empty()
                  fourthQuestion()
                  
            })
           
}

// Renders the final question and calls the display planet info so that we can get the results
function fourthQuestion() {
            var divQuestion = $("<div>");
            var divAnswer1 = $("<div>") ;
            var divAnswer2 = $("<div>") ; 
            var nextbtn = $("<btn>").text("Next Question").addClass("button");

            divQuestion.text(questionnaire.questions.q4);
            divAnswer1.text(questionnaire.options.q4[0])
            divAnswer2.text(questionnaire.options.q4[1])

            $(".content").append(divQuestion);
            $(".content").append(divAnswer1);
            $(".content").append(divAnswer2);
            $(".content").append(nextbtn);

            
      
            $(".button").on("click", function() {
                  $(".content").empty()
                  planetName = Object.keys(clickBaitDescription)[answerArray.length]
                  displayPlanetInfo(planetName)     
            })
           
}

// Wipes the page clear and call the NASA api to put a planet on the page
// also references the clickBaitDescription array
function displayPlanetInfo(planetName){
    // var planetName = 'saturn'
    var queryURL = 'https://images-api.nasa.gov/search?q=' + planetName
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        $('.content').empty()
        var planetImage = $('<img>').attr('src', response.collection.items[0].links[0].href).attr('id', 'resultImage')
        var planetDescription =$('<p>').text(response.collection.items[0].data[0].description).attr('id', 'resultNasaText')
        var funnyDescription = $('<p>').text(clickBaitDescription[planetName]).attr('id', 'resultClickBaitText')
        $('.content').append(planetImage)
        $('.content').append(planetDescription)
        $('.content').append(funnyDescription)
    
})
}



