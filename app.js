// Import function from other file 
import { compareNumbers } from './function.js'; 

// reference DOM elements 
const endPhrase = document.getElementById('end-phrase');
const guessInput = document.getElementById('guess-number');
const submitButton = document.getElementById('button');
const countRemaining = document.getElementById('remaining');

// reference compareNumbers function from imported file function.js
let rightAnswer = Math.ceil(Math.random() * 20); 
let numberOfGuessesRemaining = 4; 

function compareNumbers (guess, rightAnswer) {
    if (guessInput.value > rightAnswer) {
        endPhrase.textContent = 'Your number is too high!';
    }
    else if (guessInput.value < rightAnswer) { 
        endPhrase.textContent = 'Your number is too low!';
    }
    else { 
        endPhrase.textContent = 'Hooray! You got the right answer!';
    }
};

// Event Listeners 
submitButton.addEventListener('click', () => {
    compareNumbers();
    countRemaining--;   // Means the decrement of the counts remaining 
    numberOfGuessesRemaining.textContent = countRemaining; 

    if (countRemaining === 0) { 
        endPhrase.textContent = "I'm sorry, but you lost. Game over."; 
        document.getElementById('button').disabled = true; //This is what prevents the guesses from continueing
    }

});