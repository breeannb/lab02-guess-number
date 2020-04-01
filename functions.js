
const compareNumbers = (guess, rightAnswer) => {
    
    Number(guess);

    if (guess < rightAnswer) {
        return -1;
    }
    else if (guess > rightAnswer) { 
        return 1;
    }
    else { 
        return 0;
    }
};

export default compareNumbers;