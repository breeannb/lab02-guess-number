let rightAnswer = Math.ceil(Math.random() * 20);

console.log(rightAnswer);

if (guess > 20) + ( guess <= 0) {
    alert('Please enter a number between 1 and 20'); 
    return
}

function compareNumbers(guess, rightAnswer); {
    if (guessInput.value > rightAnswer) {
        finalMessage.textContent = 'Your number is too high!';
    }
    else if (guessInput.value < rightAnswer) { 
        finalMessage.textContent = 'Your number is too low!';
    }
    else { 
        finalMessage.textContent = 'Hooray! You got the right answer!';
    }
};