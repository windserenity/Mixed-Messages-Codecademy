// import from words js to keep files orgnized with tons of words as I am not using a database for this project(not sure how to :))
import {oneSylbWord as one, twoSylbWord as two, threeSylbWord as three, fourSylbWord as four, fiveSylbWord as five, sixSylbWord as six, sevenSylbWord as seven } from './words.js';


const randomWordSelector = (wordArray) => { //function to slecet a random word from any given array
    let indexOfArray = Math.floor(Math.random() * wordArray.length +1);
    return wordArray[indexOfArray];
};


function randommArraySelector() { //randomly selected array with the index retunred as object for hiku syllables
    let selector = [one, two, three, four, five, six, seven];
        let index =  Math.floor(Math.random() * selector.length); 
             let obj = {
                words: selector[index],
                syllables: index
            };   
    return obj;  
};

/* let word = randommArraySelector();
console.log(randomWordSelector(word.words));
console.log(word.syllables+1);
 */

let syllables = 0; 
    while (syllables<7 ) {
        
        let word = randommArraySelector();
        console.log(randomWordSelector(word.words));
        console.log(word.syllables+1); 
        
        syllables ++
    };


