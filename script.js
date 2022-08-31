const circle = '⭕️';
const x = '❌';
const grid = document.querySelector('[data-grid]');
var currentChoice = undefined;
const gridSquareTextElement = document.querySelectorAll('[data-square]');
var iscircle = true;
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


gridSquareTextElement.forEach(square => {
    square.addEventListener('click', () => {
      Exchange();
      function Exchange() {
        if(square.innerText === '') {
          if(iscircle) {
            currentChoice = circle;
            iscircle = false;
          } else if(!iscircle) {
            currentChoice = x;
            iscircle = true;
          }
        } else {
          return;
        }
      }
      appendChoice();
      function appendChoice() {
        if(square.innerText === '') {
          square.innerText = currentChoice;
        } else if(square.innerText === !'') {
          return;
        }
        
      }
    })
})
