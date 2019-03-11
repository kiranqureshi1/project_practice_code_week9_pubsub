const QuestionView = function(quizContainer, quiz){
  this.quizContainer = quizContainer;
  this.quiz = quiz;
};

QuestionView.prototype.bindEvent = function () {
  console.log('QuestionView Integrated');
};


QuestionView.prototype.render = function () {
  const infoQuestion = document.createElement("p");
  infoQuestion.textContent = this.quiz.question;
  this.quizContainer.appendChild(infoQuestion);

  // const radioInputA = document.createElement('input');
  // radioInputA.setAttribute('type', 'radio');
  // // radioInputA.setAttribute('name', name);
  // radioInputA.textContent = this.quiz.correct_answer;
  // this.quizContainer.appendChild(radioInputA);
  //
  // const radioInputB = document.createElement('input');
  // radioInputB.setAttribute('type', 'radio');
  // // radioInputB.setAttribute('name', name);
  // radioInputB.textContent = this.quiz.incorrect_answers[0];
  // this.quizContainer.appendChild(radioInputB);

  // const radioInputC = document.createElement("input");
  // radioInputC.setAttribute('type', 'radio');
  // radioInputC.setAttribute('name', name);
  // // radioInputC.textContent = this.quiz.incorrect_answers[1];
  // this.quizContainer.appendChild(radioInputC);

  // const radioInputC = document.createElement("input");
  // radioInputC.setAttribute('type', 'click');
  // radioInputC.setAttribute('name', name);
  const infoAnswer = document.createElement("li");
  infoAnswer.textContent = this.quiz.correct_answer;
  // radioInputC.textContent = this.quiz.incorrect_answers[1];
  this.quizContainer.appendChild(infoAnswer);
// var x = document.getElementById("infoAnswer").value;

  // const radioInputD = document.createElement("input");
  // radioInputD.setAttribute('type', 'radio');
  // radioInputD.setAttribute('name', name);
  // radioInputD.textContent = this.quiz.incorrect_answers[2];
  // this.quizContainer.appendChild(radioInputD);


  };

QuestionView.prototype.populate = function(){
  const answertsList = []
  answertsList.push(this.quiz.correct_answer);
  answertsList.push(this.quiz.incorrect_answers);
   return answertsList;
   console.log(answertsList);

  // this.forEach((beer, index) => {
  //   const option = document.createElement('option');
  //   option.textContent = beer.name;
  //   option.value = index;
  //   this.element.appendChild(option);
  // });
};



module.exports = QuestionView;
