
   
// var question1content = "Which SuperHero do you most identify with?"
// var question1response1 = "Batman"
// var question1response2 = "Superman"

// var question2content = "Which do you prefer as a pet?"
// var question2response1 = "Dog"
// var question2response2 = "Cat"

// var question3content = "Mashed Potatoes or Baked Potato?"
// var question3response1 = "Mashed"
// var question3response2 = "Baked"

// var question4content = "Game of Thrones or Harry Potter"
// var question4response1 = "Game of Thrones"
// var question4response2 = "Harry Potter"

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

 var currentQuestion = 0
  var score = 0       


$("#startbtn").on('click', function(){
  $(".content").empty()

  startQuiz()
      })



function startQuiz(){
            
firstQuestion();       
      }
            
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

                  
                  
            })
           
      }
                       
            
            
            
  
console.log(currentQuestion)

    
    

      
// forloop for Q's
// using displayQuestion, displayOptions, etc









// TYLERS CODE
var clickBaitDescription = {
      'mercury': "",
      'venus': " Something witty and funny that will be written later",
      'earth': "",
      'mars': "",
      'jupiter': "",
      'saturn': "something witty",
      'uranus': "",
      'neptune':"",
      'pluto': "",
    
    }
    
    var planetName = 'saturn'






function displayPlanetInfo(){
    // var planetName = 'saturn'
    var queryURL = 'https://images-api.nasa.gov/search?q=' + planetName
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        $('.content').empty()
        var planetImage = $('<img>')
        var planetDescription =$('<p>')
        var funnyDescription = $('<p>')
        planetImage.attr('src', response.collection.items[0].links[0].href)
        planetDescription.text(response.collection.items[0].data[0].description)
        funnyDescription.text(clickBaitDescription[planetName])
        $('.content').append(planetImage)
        $('.content').append(planetDescription)
        $('.content').append(funnyDescription)
    
})
}

// displayPlanetInfo()

