// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { compareNumbers } from '../function.js';


const test = QUnit.test;

test('test compareNumbers function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const rightAnswer = 12; 
    const guessOne = 4; 
    const guessTwo = 17; 
    const guessThree = 12;

    //Act 
    // Call the function you're testing and set the result to a const
    const testguessOne = compareNumbers(guessOne, rightAnswer);
    const testguessTwo = compareNumbers(guessTwo, rightAnswer); 
    const testguessThree = compareNumbers(guessThree, rightAnswer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(testguessOne, -1);
    assert.equal(testguessTwo, 1);
    assert.equal(testguessThree, 0);
});

