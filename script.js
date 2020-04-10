
// Global Variables
var planetName 
var answerArray = []
 
// Global Objects that contains all the nasa API info
var clickBaitDescription = {
      'Mercury shows its true colors': "If you are looking for a good tan then Mercury is the place for you! Mercury is the closest to the sun so make sure you bring some sunscreen. Mercury temperature can reach a 840° Fahrenheit, but don't worry nights are nice and cool with a temperature of -275° Fahrenheit.",
      'Global view of Venus': "If you hate water you are in luck! Venus has no water on its surface due to how hot it gets. If you have a fear of werewolves, have no fear. Venus has no moons!",
      'Photograph of Earth taken from Apollo 13': "If you feel like you are exactly where you're supposed to be, you are right! Earth contains everything a human needs to survive. Fun fact: Earth is 70% water",
      'Global color views of Mars': "Get used to the color of red and orange because Mars is where you belong. The appearance of Mars is cause by iron oxide, more commonly known as rust. If the mountains in Colorado are not enough, Mars has the tallest known mountain in the solar system.",
      'High Resolution Globe of Jupiter': "If you think 24 hours in a day is too long, get ready for some shorter work weeks. Jupiter rotates every 9 hours and 55 minutes. Jupiter has no shortage of moons with at least 67 confirmed moons around the planet. Jupiter is the perfect place to let your inner werewolf out.",
      'Saturn in full view': "If you are into renewable energy, good news! Saturn has highest winds in our solar system. These winds have been measured at about 1100 mph. Saturn also has 150 moons, all of which are frozen.",
      'This is an image of the planet Uranus taken by the Voyager 2': "To belong on Uranus, you must like the cold. Uranus has the coldest planetary atmosphere in the solar system. It's temperature is around -371° Fahrenheit. Uranus also has complex cloud structure, so don't forget your camera.",
      'Contrast enhanced color picture of Neptune':"If the color blue is your favorite color, you will love Neptune. Neptune has very strong storms that have lasted up to 5 years. The wind is so strong on this planet they measure in m/s rather than mph.",
      'Color image of Pluto': "If you feel like society is not for you, welcome to Pluto. Although it used to be considered a planet, in 2006 Pluto was reclassified as a dwarf planet. The size of Pluto is actually smaller than Earth's moon, so social distancing would be difficult.",
    
    }
var ssarray = [
      "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"
]
// global object that contains all of the questions info
var questionnaire = {
    
      questions: {
            q1: 'Which SuperHero do you most identify with?',
            q2: 'Which do you prefer as a pet?',
            q3: 'Baked Potato or Mashed?',
            q4: 'Flip Flops or Hiking Boots?',
          },
      options: {
            q1: ['Batman Suit', 'Superman'],
            q2: ['Cute Dog', 'Cat'],
            q3: ['mashed potato', 'Baked Spud'],
            q4: ['Beach Flip Flops', 'Hiking Boots'],
          },
      displayNames: {
            q1: ['Batman', 'Superman'],
            q2: ['Dog', 'Cat'],
            q3: ['Mashed Potato', 'Baked Potato'],
            q4: ['Flip Flops', 'Hiking Boots'],
          },

}
// Starts the question function 
$("#startbtn").on('click', function(){
  $(".content").empty()

  startQuiz()
      })


// Starts the first question function and is referenced by the start over button
function startQuiz(){     
      firstQuestion();}       
       
// Renders the first question which is identical to the second and third question
// This wipes the prebuilt html and creates new div html elements nested in the .content container 
// then it appends a question to a page and runs the getGiphs function to find relevant images
// Then it saves the users selection in an array
 function firstQuestion() {

            
            var divQuestion = $("<div>").addClass('questionContent');
            var divAnswer1 = $("<div>").addClass('answerButton1 column').val(questionnaire.options.q1[0]);
            var divAnswer2 = $("<div>").addClass('answerButton2 column').val(questionnaire.options.q1[1]); 
        

            divQuestion.text(questionnaire.questions.q1);
            divAnswer1.text(questionnaire.displayNames.q1[0])
            divAnswer2.text(questionnaire.displayNames.q1[1])

            
            $(".content").append(divQuestion);
            $(".content").append($("<div>").addClass('columns'));
            $(".columns").append(divAnswer1);
            $(".columns").append(divAnswer2);
            getGiphs(divAnswer1.val(), $('.answerButton1'))
            getGiphs(divAnswer2.val(), $('.answerButton2'))
            
            $(".answerButton1").on("click", function() {
                  $(".content").empty()
                  answerArray.push(true)
                  secondQuestion()
            })
            $(".answerButton2").on("click", function() {
                  $(".content").empty()
                  answerArray.push(false)
                  secondQuestion()
                 
            })
 }

function secondQuestion() {
            var divQuestion = $("<div>").addClass('questionContent');
            var divAnswer1 = $("<div>").addClass('answerButton1 column').val(questionnaire.options.q2[0]);
            var divAnswer2 = $("<div>").addClass('answerButton2 column').val(questionnaire.options.q2[1]); 
         

            divQuestion.text(questionnaire.questions.q2);
            divAnswer1.text(questionnaire.displayNames.q2[0])
            divAnswer2.text(questionnaire.displayNames.q2[1])

            $(".content").append(divQuestion);
            $(".content").append($("<div>").addClass('columns'));
            $(".columns").append(divAnswer1);
            $(".columns").append(divAnswer2);
            getGiphs(divAnswer1.val(), $('.answerButton1'))
            getGiphs(divAnswer2.val(), $('.answerButton2'))

            
            $(".answerButton1").on("click", function() {
                  $(".content").empty()
                  answerArray.push(true, true);
                  thirdQuestion()
            })
            $(".answerButton2").on("click", function() {
                  $(".content").empty()
                  answerArray.push(false);
                  thirdQuestion()
                 
            })
            
           
}

function thirdQuestion() {
            var divQuestion = $("<div>").addClass('questionContent');
            var divAnswer1 = $("<div>").addClass('answerButton1 column').val(questionnaire.options.q3[0]);
            var divAnswer2 = $("<div>").addClass('answerButton2 column').val(questionnaire.options.q3[1]);
            

            divQuestion.text(questionnaire.questions.q3);
            divAnswer1.text(questionnaire.displayNames.q3[0])
            divAnswer2.text(questionnaire.displayNames.q3[1])

            $(".content").append(divQuestion);
            $(".content").append($("<div>").addClass('columns'));
            $(".columns").append(divAnswer1);
            $(".columns").append(divAnswer2);
            getGiphs(divAnswer1.val(), $('.answerButton1'))
            getGiphs(divAnswer2.val(), $('.answerButton2'))
         

            $(".answerButton1").on("click", function() {
                  $(".content").empty()
                  answerArray.push(true, true, true);
                  fourthQuestion()
                  
            })

            $(".answerButton2").on("click", function() {
                  $(".content").empty()
                  answerArray.push(false);
                  fourthQuestion()
                 
            })
           
}

// Renders the final question and calls the display planet info function so that we can get the results
function fourthQuestion() {
            var divQuestion = $("<div>").addClass('questionContent');
            var divAnswer1 = $("<div>").addClass('answerButton1 column').val(questionnaire.options.q4[0]);
            var divAnswer2 = $("<div>").addClass('answerButton2 column').val(questionnaire.options.q4[1]);
            
            divQuestion.text(questionnaire.questions.q4);
            divAnswer1.text(questionnaire.displayNames.q4[0])
            divAnswer2.text(questionnaire.displayNames.q4[1])

            $(".content").append(divQuestion);
            $(".content").append($("<div>").addClass('columns'));
            $(".columns").append(divAnswer1);
            $(".columns").append(divAnswer2);
            getGiphs(divAnswer1.val(), $('.answerButton1'))
            getGiphs(divAnswer2.val(), $('.answerButton2'))
           

            $(".answerButton1").on("click", function() {
                  $(".content").empty()
                  answerArray.push(true, true)
                  answerArray = _.compact(answerArray)
                  $(".content").empty()
                  planetName = Object.keys(clickBaitDescription)[answerArray.length]
                  displayPlanetInfo(planetName)  
            })

            $(".answerButton2").on("click", function() {
                  $(".content").empty()
                  answerArray.push(false);
                  answerArray = _.compact(answerArray)
                  $(".content").empty()
                  planetName = Object.keys(clickBaitDescription)[answerArray.length]
                  displayPlanetInfo(planetName)     
            })

           
}

// Wipes the page clear and call the NASA api to put a planet on the page
// also references the clickBaitDescription array and adds a start over button
function displayPlanetInfo(planetName){
    var queryURL = 'https://images-api.nasa.gov/search?q=' + planetName
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        $('.content').empty()
        var planetImage = $('<img>').attr('src', response.collection.items[0].links[0].href).attr('id', 'resultImage').attr('alt',ssarray[answerArray.length])
        var planetDescription =$('<p>').text(response.collection.items[0].data[0].description)
        var funnyDescription = $('<p>').text(clickBaitDescription[planetName]).attr('id', 'resultClickBaitText')
        var startOverButton = $("<btn>").addClass("answerButton1").text("START QUIZ OVER");
        var resultPlanetBanner = $("<h1>").addClass("#quizDescription");
        resultPlanetBanner.text("You're from The Planet " + ssarray[answerArray.length] + "!!")

      
        $('.content').append(resultPlanetBanner);        
        $('.content').append(planetImage);
        $('.content').append(funnyDescription);
        $('.content').append(startOverButton);

        $(".answerButton1").on("click", function() {
            location.reload()
        })
    
})
}
// This function searches Pixabay and grabs an image and appends it to a question button
function getGiphs(searchTarget,appendTarget){
      var queryURL =  'https://pixabay.com/api/?key=15969414-03d75fb92524ff4ee014795c8&q=' + searchTarget
      $.ajax({
            url: queryURL,
            method: "GET"
      }).then(function(response){
            var questionImage =$('<img>').attr('src',response.hits[0].webformatURL).attr('alt', searchTarget).addClass('qimage')
            appendTarget.append(questionImage)
      })


}


