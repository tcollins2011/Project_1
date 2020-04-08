
   


var questions = [
      {
        question: 'Which SuperHero do you most identify with?',
        answers: [
          { text: 'Batman'},
          { text: 'Superman'},
        ]
      },
      {
            question: 'Which do you prefer as a pet?',
            answers: [
              { text: 'Dog'},
              { text: 'Cat'},
            ]
          },
          {
            question: 'Mashed Potatoes or Baked Potato?',
            answers: [
              { text: 'Mashed'},
              { text: 'Baked'},
            ]
          },
    ]

// $(document).ready(function() {
      $("#startBtn").on('click', function(){
            $(".content").empty()
            startQuiz()
      })
      
      
      
     


var questionnaire = {
      currentQuestion: 0,
      score: 0,

      questions: {
            q1: 'Which SuperHero do you most identify with?',
            q2: 'Which do you prefer as a pet?',
            q3: 'Bootcamp Classes are easy and slow-paced',
          },
      options: {
            q1: ['Batman', 'Superman'],
            q2: ['Dog', 'Cat'],
            q3: ['Mashed', 'Baked'],
          },
    

      startQuiz: function(){
            
           
            questionnaire.currentQuestion = 0
            questionnaire.score = 0
            

            questionnaire.nextQuestion()
            
      },
      nextQuestion: function () {
           
            var questionContent = Object.values(questionnaire.questions)[questionnaire.currentQuestion]
            var questionOptions = Object.values(questionnaire.answers)[questionnaire.currentQuestion]
            
            $(".qustionBody").text(questionContent);
            $("#test").text(questionOptions);
            
      }

      
// forloop for Q's
// using displayQuestion, displayOptions, etc
}











// // THIS IS TYLER'S CODE BELOW

// // need to add question variable
// // Need to add more specific picture choices in queryURL
// function displayPlanetInfo(){
//     var planetName = 'whatever the questions feeds in'
//     var queryURL = 'https://images-api.nasa.gov/search?q=saturn'
//     console.log(queryURL)
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//         console.log(response)
//         var planetImage = $('<img>')
//         planetImage.attr('src', response.collection.items[0].links[0].href)
//         $('body').append(planetImage)
//         var planetDescription =$('<p>')
//         planetDescription.text(response.collection.items[0].data[0].description)
//         $('body').append(planetDescription)
   

// displayPlanetInfo()

