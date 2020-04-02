// Import function from other file 
import compareNumbers from './functions.js'; 
import tooHightoolow from './toohightoolow.js';
// reference DOM elements 
const endPhrase = document.getElementById('end-phrase');
const userInput = document.getElementById('users-guess-number');
const submitButton = document.getElementById('button');
const countRemainingSpan = document.getElementById('remaining');
const userResultSpan = document.getElementById('user-result');

// reference compareNumbers function from imported file function.js
//let numberOfGuessesRemaining = 4; //number of guess

let countRemaining = 4;

let rightAnswer = Math.ceil(Math.random() * 20); //computer number

// Event Listeners 
submitButton.addEventListener('click', () => {
    compareNumbers();  //importing function
    countRemaining--;   // Means the decrement of the counts remaining 
    countRemainingSpan.textContent = countRemaining; 
    let userGuess = userInput.value;
    const userResult = tooHightoolow(userGuess, rightAnswer);
    userResultSpan.textContent = userResult;
    if (countRemaining === 0) { 
        endPhrase.textContent = "I'm sorry, but you lost. Game over."; 
        document.getElementById('button').disabled = true; //This is what prevents the guesses from continueing
    }

});