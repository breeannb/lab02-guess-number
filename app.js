// Import function from other js file
const finalMessage = document.getElementById('final-message');
const numberGuessInput = document.getElementById('number-guess');
const submitButton = document.getElementById('guess-button');
const guessesRemaining = document.getElementById('guesses-remaining');


// Reference the Dom elements that I established, the button and quiz results from HTML

let correctAnswer = Math.ceil(Math.random() * 20); 

// console.log(correctAnswer); 

let triesRemaining = 4; 

// The function of submissions and prompts 

function compareNumbers() {
    if (numberGuessInput.value > correctAnswer){ 
        finalMessage.textContent = 'Too high';
    }
    else if (numberGuessInput.value < correctAnswer) {
        finalMessage.textContent = 'Too low';
    }
    else {
        finalMessage.textContent = 'Nice Guess! You got it!';
    }
}
// Has two parameters guess and correctNumber

// Button Event Listeners 
submitButton.addEventListener('click', () => {
    compareNumbers(); 
    triesRemaining--;
    guessesRemaining.textContent = triesRemaining; 

    if(triesRemaining === 0) { 
        finalMessage.textContent = 'Sorry, you lost this time :('; 
        document.getElementById('guess-button').disabled = true;
    }

});