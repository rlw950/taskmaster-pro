var body = document.body;
num_buttons = 4;

// The array of questions for the game.
var questions = [
  { q: 'Commonly used data types Do not include:', a: 'Btn3' },
  { q: 'The condition in an if / else is enclosed with ____.', a: 'Btn3' },
  { q: 'Arrays in JavaScript can be used to store ______.', a: 'Btn4' },
  { q: 'String values must be enclosed with ______ when being assigned to variables.', a: 'Btn3' },
  { q: 'A very useful tool used during the development and debuugin for print content to the debugger is:', a: 'Btn4' }
];

var answerList = [
  'strings', 'booleans', 'alerts', 'numbers', 'quotes', 'curly brackets', 'parenthesis', 'square brackets',
  'numbers and strings', 'other arrays', 'booleans', 'all of the above', 'commas', 'curly brackets', 'quotes',
  'parenthesis', 'JavaScript', 'terminal/bash', 'for loops', 'console.log'
];

//var buttons = ['Btn1', 'Btn2', 'Btn3', 'Btn4'];
var j = 0;

var h2E1 = document.createElement('h2');
h2E1.textContent = 'Coding Quiz Challenge';
h2E1.setAttribute('style', 'margin:auto; width:100%, text-align:screenLeft;');
body.appendChild(h2E1);

var infoEl = document.createElement('div');
infoEl.textContent = 'Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds.';
infoEl.setAttribute('style', 'margin:auto, width:50%, text-align:left;');
body.appendChild(infoEl);

// var startQuiz = document.createElement('button');
// startQuiz.textContent('Start Quiz');


for (var i = 0; i < questions.length; i++) {

  var theQuestion = questions[i].q;

  console.log(theQuestion);
  // <input type="text" onfocus="this.value=''" value="Blabla"></input>
  // document.body.innerHTML = '';
  // document.open();
  //console.log(timeLeft);
  // var timerEl = document.createElement('div');
  // timerEl.textContent = timeLeft;
  // timerEl.setAttribute('style', 'margin:auto; width:50%; text-align:right;');
  // body.appendChild(timerEl);

  // Display current question and answers to user and ask to choose
  // var answer = confirm(questions[i].q);
  //console.log(questions[i].q);

  // rightAnswer = questions[i].a;
  // console.log(rightAnswer);

  var realQuestionEl = document.createElement('div');
  var answerEl = document.createElement('ol');

  var btn1 = document.createElement('button');
  var btn2 = document.createElement('button');
  var btn3 = document.createElement('button');
  var btn4 = document.createElement('button');

  realQuestionEl.textContent = 'questions[].q';
  btn1.textContent = '1. ' + (answerList[j]);
  btn2.textContent = '2. ' + (answerList[j + 1]);
  btn3.textContent = '3. ' + (answerList[j + 2]);
  btn4.textContent = '4. ' + (answerList[j + 3]);

  realQuestionEl.setAttribute('style', 'background: #888888; padding:20px;');
  answerEl.setAttribute('style', 'background: #888888; padding:20px; ');

  body.appendChild(realQuestionEl);
  realQuestionEl.appendChild(answerEl);
  answerEl.appendChild(btn1);
  answerEl.appendChild(btn2);
  answerEl.appendChild(btn3);
  answerEl.appendChild(btn4);

  
  // var buttons = document.querySelectorAll(".MyClassName");
  // var i = 0, length = buttons.length;
  // for (i; i < length; i++) {
  //     if (document.addEventListener) {
  //         buttons[i].addEventListener("click", function() {
  //             console.log(buttons[i]);
  //         });
  //     } else {
  //         buttons[i].attachEvent("onclick", function() {
  //             // use buttons[i] to target clicked button
  //         });
  //     };
  // };


  // var checker = function () {

  //   var buttons = body.getElementsByClassName("answerEl");
  //     var answerClick = '';

  //     for (var k = 0; k < answerEl.length; k++) {

  //       buttons[k].addEventListener("click", function () {

  //         if (buttons[k].checked) {
  //           answerClick = answerList[k].id;
  //           console.log(answerClick);
  //           // break;
  //         }
  //       });
  //     }
  //   }
  // j += 4;

}


            // rightAnswer = questions[k - 1].a;
            // console.log('This is ' + rightAnswer);
            // var answerClick = this.innerHTML;
            // console.log('AnswerClick ' + answerClick);

//             if (answerClick === rightAnswer) {
//                 // Increase score
//                 score++;
//                 var CorrectEl = document.createElement('div');
//                 CorrectEl.textContent('Correct!');
//                 return;
//             } else {
//                 var CorrectEl = document.createElement('div');
//                 CorrectEl.textContent('Wrong!');
//                 // timeLeft - 10;
//             }
//         });

//         // if (timeLeft === 0 || ) {

//         // }
//     }
//   }
// }

