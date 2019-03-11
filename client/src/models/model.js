const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');




const Model = function(urlA){
  this.urlA = urlA;
  // this.urlB = urlB;
this.requestA = new RequestHelper(this.urlA);
// this.requestB = new RequestHelper(this.urlB);
};

Model.prototype.bindEvent = function () {
  PubSub.subscribe('one quiz submitted', (evt) => {
    const submittedAnswer = evt.detail;
    this.calculateTotalScores(submittedAnswer)
  })
};



Model.prototype.getData = function () {
  this.requestA.get()
    .then((data) => {
      PubSub.publish('quizModel:data-loaded', data);
      console.log(data);
    })
    .catch(console.error);
};

Model.prototype.calculateTotalScores = function (answer) {
  this.requestA.get()
  .then((data) => {
    const num = 0
    const total = []
    // const total = 0
    for (var item of data){
      if (item.correct_anser === answer){
        // total += 1;
        const totalScore = total.push(answer)
      };
      // num += 1

    };
    const score = totalScore.length;
    return score;
    console.log(score);
    PubSub.publish('total score ready', score)
  });
};




module.exports = Model;
