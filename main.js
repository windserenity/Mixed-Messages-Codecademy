// import from words js to keep files orgnized with tons of words as I am not using a database for this project(not sure how to :))
import {oneSylbWord as one, twoSylbWord as two, threeSylbWord as three, fourSylbWord as four, fiveSylbWord as five, sixSylbWord as six, sevenSylbWord as seven } from './words.js';


const randomWordSelector = wordArray => { //function to slecet a random word from any given array
    let indexOfArray = Math.floor(Math.random() * wordArray.length);
    return wordArray[indexOfArray];
};


const arraySelector = (num) => { 
    let selector = [one, two, three, four, five, six, seven];
    return selector[num];  
};


const randomSelectorInRange = (sum, theCount) => {
    let currSum = 0;
    let calculatedArray = [];
        for (let i = 0; i < theCount; i++) {
            calculatedArray.push(Math.random());
            currSum += calculatedArray[i];                
        }  
    let sumAfterFloor = 0;
    let remainingVal = 0;
        for (let j = 0; j < theCount; j++) {
            let valueToMax = (calculatedArray[j] /currSum) * sum; //formaula to get the random numbers to equal sum
                    calculatedArray[j] = Math.floor(valueToMax);
                    sumAfterFloor += calculatedArray[j];
                    remainingVal = sum- sumAfterFloor;                      
        }
    // push remainder into last array index so that it returns sum   
    let newarr = calculatedArray.slice(0, calculatedArray.length-1) ;
    newarr.push(calculatedArray[calculatedArray.length-1] + remainingVal);
    let result = newarr.filter(word => word != 0); //filter 0 to not break array indexing
    return result;
    
};


const assembler = numberOfSyllables => {
    let amountOfwordsForSylbCount = Math.floor(Math.random()* numberOfSyllables + 1);
    let randomRange = randomSelectorInRange(numberOfSyllables, amountOfwordsForSylbCount)
    let selectedWords = [];
        for (const i of randomRange) {       
            selectedWords.push(randomWordSelector(arraySelector(i-1)));  
        }

    let sentence = selectedWords.join(' ').toString() + ".";
    let capitalizeSentance = sentence.charAt(0).toUpperCase() + sentence.slice(1);
;
return capitalizeSentance;

};


export const printToScreen = () => {
    alert('Hey from Script file');
};

console.log(assembler(5));
console.log(assembler(7));
console.log(assembler(5));
        


