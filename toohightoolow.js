export default function tooHightoolow(_userGuess, _rightAnswer) {
    if (_userGuess > _rightAnswer) {
        return 'Your number is too high!';
    }
    else if (_userGuess < _rightAnswer) { 
        return 'Your number is too low!';
    }
    else { 
        return 'Hooray! You got the right answer!';
    }
}
