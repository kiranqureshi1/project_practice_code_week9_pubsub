const PubSub = require('../helpers/pub_sub.js');
const QuestionView = require('./question_view.js');



const QuizView = function (container) {
  this.container = container;
};


QuizView.prototype.bindEvent = function () {
  PubSub.subscribe('quizModel:data-loaded', (event) => {
    this.quizes = event.detail;
    // console.log(this.quizes);
     const a = this.display();
     console.log(a);
  });

//   SightingFormView.prototype.bindEvents = function () {
//   this.form.addEventListener('submit', (evt) => {
//     const submit = evt.target.value
//     PubSub.publish('quiz submitted', submit)
//   });
// };
};


// QuizView.prototype.display = function () {
//   this.quizes.forEach((quiz) => {
//     const questionView = new QuestionView(this.container, quiz);
//     questionView.render();
//     // const selectedAnswer = questionView.render();
//     // PubSub.publish('one quiz submitted', selectedAnswer)
//   });
// };


QuizView.prototype.display = function () {
  var quiz = this.quizes[Math.floor(Math.random() * this.quizes.length)];
console.log(quiz.question);
const questionView = new QuestionView(this.container, quiz);
    const selectedAnswer = questionView.render();

    PubSub.publish('one quiz submitted', selectedAnswer)

};

module.exports = QuizView;
