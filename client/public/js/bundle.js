/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ./helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst Model = __webpack_require__(/*! ./models/model.js */ \"./client/src/models/model.js\");\nconst LandingView = __webpack_require__(/*! ./views/landing_view.js */ \"./client/src/views/landing_view.js\");\nconst QuestionView = __webpack_require__(/*! ./views/question_view.js */ \"./client/src/views/question_view.js\");\nconst QuizView = __webpack_require__(/*! ./views/quiz_view.js */ \"./client/src/views/quiz_view.js\");\nconst ResultView = __webpack_require__(/*! ./views/result_view.js */ \"./client/src/views/result_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\nconsole.log('dom loaded successfully');\n\n\n\n// const infoDivA = document.querySelector('')\n// const landingView = new LandingView;\n// landingView.bindEvent();\n\nconst infoDivB = document.querySelector('#main_content_container');\nconst quizView = new QuizView(infoDivB);\nquizView.bindEvent();\n\nconst url = 'http://localhost:3000/api/questions';\nconst model = new Model(url);\nmodel.bindEvent();\nmodel.getData();\n\n\n// const infoDivC = document.querySelector('')\n// const questionView = new QuestionView;\n// questionView.bindEvent();\n\nconst infoDivC = document.querySelector('#submit');\nconst resultView = new ResultView(infoDivC);\nresultView.bindEvent();\n\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request_helper.js":
/*!**********************************************!*\
  !*** ./client/src/helpers/request_helper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url;\n};\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n    .then((response) => response.json());\n};\n\nRequestHelper.prototype.post = function (payload) {\n  return fetch(this.url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: { 'Content-Type' : 'application/json'}\n  })\n    .then((response) => response.json());\n};\n\nRequestHelper.prototype.put = function (payload) {\n  return fetch(this.url, {\n    method: 'PUT',\n    body: JSON.stringify(payload),\n    headers: { 'Content-Type' : 'application/json'}\n  })\n    .then((response) => response.json());\n};\n\n\n\n\nRequestHelper.prototype.delete = function (id) {\n  return fetch(`${this.url}/${id}`, {\n    method: 'DELETE'\n  })\n    .then((response) => response.json());\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

/***/ }),

/***/ "./client/src/models/model.js":
/*!************************************!*\
  !*** ./client/src/models/model.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\n\n\n\nconst Model = function(urlA){\n  this.urlA = urlA;\n  // this.urlB = urlB;\nthis.requestA = new RequestHelper(this.urlA);\n// this.requestB = new RequestHelper(this.urlB);\n};\n\nModel.prototype.bindEvent = function () {\n  PubSub.subscribe('one quiz submitted', (evt) => {\n    const submittedAnswer = evt.detail;\n    this.calculateTotalScores(submittedAnswer)\n  })\n};\n\n\n\nModel.prototype.getData = function () {\n  this.requestA.get()\n    .then((data) => {\n      PubSub.publish('quizModel:data-loaded', data);\n      console.log(data);\n    })\n    .catch(console.error);\n};\n\nModel.prototype.calculateTotalScores = function (answer) {\n  this.requestA.get()\n  .then((data) => {\n    const num = 0\n    const total = []\n    // const total = 0\n    for (var item of data){\n      if (item.correct_anser === answer){\n        // total += 1;\n        const totalScore = total.push(answer)\n      };\n      // num += 1\n\n    };\n    const score = totalScore.length;\n    return score;\n    console.log(score);\n    PubSub.publish('total score ready', score)\n  });\n};\n\n\n\n\nmodule.exports = Model;\n\n\n//# sourceURL=webpack:///./client/src/models/model.js?");

/***/ }),

/***/ "./client/src/views/landing_view.js":
/*!******************************************!*\
  !*** ./client/src/views/landing_view.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const LandingView = function(){\n//\n// };\n//\n// LandingView.prototype.bindEvent = function () {\n//   console.log('LandingView Integrated');\n// };\n// module.exports = LandingView;\n\n\n//# sourceURL=webpack:///./client/src/views/landing_view.js?");

/***/ }),

/***/ "./client/src/views/question_view.js":
/*!*******************************************!*\
  !*** ./client/src/views/question_view.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const QuestionView = function(quizContainer, quiz){\n  this.quizContainer = quizContainer;\n  this.quiz = quiz;\n};\n\nQuestionView.prototype.bindEvent = function () {\n  console.log('QuestionView Integrated');\n};\n\n\nQuestionView.prototype.render = function () {\n  const infoQuestion = document.createElement(\"p\");\n  infoQuestion.textContent = this.quiz.question;\n  this.quizContainer.appendChild(infoQuestion);\n\n  // const radioInputA = document.createElement('input');\n  // radioInputA.setAttribute('type', 'radio');\n  // // radioInputA.setAttribute('name', name);\n  // radioInputA.textContent = this.quiz.correct_answer;\n  // this.quizContainer.appendChild(radioInputA);\n  //\n  // const radioInputB = document.createElement('input');\n  // radioInputB.setAttribute('type', 'radio');\n  // // radioInputB.setAttribute('name', name);\n  // radioInputB.textContent = this.quiz.incorrect_answers[0];\n  // this.quizContainer.appendChild(radioInputB);\n\n  // const radioInputC = document.createElement(\"input\");\n  // radioInputC.setAttribute('type', 'radio');\n  // radioInputC.setAttribute('name', name);\n  // // radioInputC.textContent = this.quiz.incorrect_answers[1];\n  // this.quizContainer.appendChild(radioInputC);\n\n  // const radioInputC = document.createElement(\"input\");\n  // radioInputC.setAttribute('type', 'click');\n  // radioInputC.setAttribute('name', name);\n  const infoAnswer = document.createElement(\"li\");\n  infoAnswer.textContent = this.quiz.correct_answer;\n  // radioInputC.textContent = this.quiz.incorrect_answers[1];\n  this.quizContainer.appendChild(infoAnswer);\n// var x = document.getElementById(\"infoAnswer\").value;\n\n  // const radioInputD = document.createElement(\"input\");\n  // radioInputD.setAttribute('type', 'radio');\n  // radioInputD.setAttribute('name', name);\n  // radioInputD.textContent = this.quiz.incorrect_answers[2];\n  // this.quizContainer.appendChild(radioInputD);\n\n\n  };\n\nQuestionView.prototype.populate = function(){\n  const answertsList = []\n  answertsList.push(this.quiz.correct_answer);\n  answertsList.push(this.quiz.incorrect_answers);\n   return answertsList;\n   console.log(answertsList);\n\n  // this.forEach((beer, index) => {\n  //   const option = document.createElement('option');\n  //   option.textContent = beer.name;\n  //   option.value = index;\n  //   this.element.appendChild(option);\n  // });\n};\n\n\n\nmodule.exports = QuestionView;\n\n\n//# sourceURL=webpack:///./client/src/views/question_view.js?");

/***/ }),

/***/ "./client/src/views/quiz_view.js":
/*!***************************************!*\
  !*** ./client/src/views/quiz_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst QuestionView = __webpack_require__(/*! ./question_view.js */ \"./client/src/views/question_view.js\");\n\n\n\nconst QuizView = function (container) {\n  this.container = container;\n};\n\n\nQuizView.prototype.bindEvent = function () {\n  PubSub.subscribe('quizModel:data-loaded', (event) => {\n    this.quizes = event.detail;\n    // console.log(this.quizes);\n     const a = this.display();\n     console.log(a);\n  });\n\n//   SightingFormView.prototype.bindEvents = function () {\n//   this.form.addEventListener('submit', (evt) => {\n//     const submit = evt.target.value\n//     PubSub.publish('quiz submitted', submit)\n//   });\n// };\n};\n\n\n// QuizView.prototype.display = function () {\n//   this.quizes.forEach((quiz) => {\n//     const questionView = new QuestionView(this.container, quiz);\n//     questionView.render();\n//     // const selectedAnswer = questionView.render();\n//     // PubSub.publish('one quiz submitted', selectedAnswer)\n//   });\n// };\n\n\nQuizView.prototype.display = function () {\n  var quiz = this.quizes[Math.floor(Math.random() * this.quizes.length)];\nconsole.log(quiz.question);\nconst questionView = new QuestionView(this.container, quiz);\n    const selectedAnswer = questionView.render();\n\n    PubSub.publish('one quiz submitted', selectedAnswer)\n\n};\n\nmodule.exports = QuizView;\n\n\n//# sourceURL=webpack:///./client/src/views/quiz_view.js?");

/***/ }),

/***/ "./client/src/views/result_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/result_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst ResultView = function(element){\n  this.element = element;\n};\n\nResultView.prototype.bindEvent = function () {\n  PubSub.subscribe('quizModel:data-loaded', (evt) => {\n    const total = evt.detail;\n    // console.log(total);\n    this.display(total)\n\n  });\n};\n\nResultView.prototype.display = function (score) {\n  const resultPara = document.createElement(\"p\");\n  resultPara.textContent = `your total score is ${score}`\n  this.element.appendChild(resultPara);\n\n};\n\nmodule.exports = ResultView;\n\n\n//# sourceURL=webpack:///./client/src/views/result_view.js?");

/***/ })

/******/ });