const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(element){
  this.element = element;
};

ResultView.prototype.bindEvent = function () {
  PubSub.subscribe('quizModel:data-loaded', (evt) => {
    const total = evt.detail;
    // console.log(total);
    this.display(total)

  });
};

ResultView.prototype.display = function (score) {
  const resultPara = document.createElement("p");
  resultPara.textContent = `your total score is ${score}`
  this.element.appendChild(resultPara);

};

module.exports = ResultView;
