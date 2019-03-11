const PubSub = require('./helpers/pub_sub.js');
const Model = require('./models/model.js');
const LandingView = require('./views/landing_view.js');
const QuestionView = require('./views/question_view.js');
const QuizView = require('./views/quiz_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
console.log('dom loaded successfully');



// const infoDivA = document.querySelector('')
// const landingView = new LandingView;
// landingView.bindEvent();

const infoDivB = document.querySelector('#main_content_container');
const quizView = new QuizView(infoDivB);
quizView.bindEvent();

const url = 'http://localhost:3000/api/questions';
const model = new Model(url);
model.bindEvent();
model.getData();


// const infoDivC = document.querySelector('')
// const questionView = new QuestionView;
// questionView.bindEvent();

const infoDivC = document.querySelector('#submit');
const resultView = new ResultView(infoDivC);
resultView.bindEvent();

});
