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

var buttons = ['Btn1', 'Btn2', 'Btn3', 'Btn4'];
var j = 0;

for (var i = 0; i < questions.length; i++) {
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
  rightAnswer = questions[i].a;
  // console.log(rightAnswer);

  var realQuestionEl = document.createElement('div');
  var answerEl = document.createElement('ol');
  var Btn1 = document.createElement('button');
  var Btn2 = document.createElement('button');
  var Btn3 = document.createElement('button');
  var Btn4 = document.createElement('button');

  realQuestionEl.textContent = questions[i].q;
  Btn1.textContent = '1. ' + (answerList[j]);
  Btn2.textContent = '2. ' + (answerList[j + 1]);
  Btn3.textContent = '3. ' + (answerList[j + 2]);
  Btn4.textContent = '4. ' + (answerList[j + 3]);

  realQuestionEl.setAttribute('style', 'background: #888888; padding:20px;');
  answerEl.setAttribute('style', 'background: #888888; padding:20px;');

  body.appendChild(realQuestionEl);
  realQuestionEl.appendChild(answerEl);
  answerEl.appendChild(Btn1);
  answerEl.appendChild(Btn2);
  answerEl.appendChild(Btn3);
  answerEl.appendChild(Btn4);
  
//   handleClick;
}
(document.attachEvent) {
  document.attachEvent("onclick", handleClick);
}

function handleClick(event) {
  event = event || window.event;
  event.target = event.target || event.srcElement;

  var element = event.target;

  // Climb up the document tree from the target of the event
  while (element) {
      if (element.nodeName === "BUTTON" && /foo/.test(element.className)) {
          // The user clicked on a <button> or clicked on an element inside a <button>
          // with a class name called "foo"
          doSomething(element);
          break;
      }

      element = element.parentNode;
  }
}

function doSomething(button) {
  // do something with button
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

// var checker = function () {

//     var buttons = document.getElementsByClassName('button');
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
//   j += 4;
