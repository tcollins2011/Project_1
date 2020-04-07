   
   // Questions in Object Array


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

$(document).ready(function() {
// $("#start").on('click', function to go here

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
      answers: {
            q1: 'Batman',
            q2: 'Dog',
            q3: 'Mashed',
          },

      startQuiz: function(){
            questionnaire.currentQuestion = 0
            questionnaire.score = 0

            questionnaire.nextQuestion()

      },

// forloop for Q's

}
function nextQuestion () {
      var questionContent = Object.values(questionnaire.questions)[questionnaire.currentQuestion]
      
      $("#test").text(questionContent);
      
}
nextQuestion()