// import from words js to keep files orgnized with tons of words as I am not using a database for this project(not sure how to :))
import {oneSylbWord as one, twoSylbWord as two, threeSylbWord as three, fourSylbWord as four, fiveSylbWord as five, sixSylbWord as six, sevenSylbWord as seven } from './words.js';


const randomWordSelector = wordArray => { //function to slecet a random word from any given array
    let indexOfArray = Math.floor(Math.random() * wordArray.length +1);
    return wordArray[indexOfArray];
};


const randommArraySelector = () => { //randomly selected array with the index retunred as object for hiku syllables
    let selector = [one, two, three, four, five, six, seven];
        let index =  Math.floor(Math.random() * selector.length); 
             let obj = {
                words: selector[index], //reurns the random array
                syllables: index // returns number of sylbs in the arrays words
            };   
    return obj;  
};


    const wordsWithSylbalCount = sylbNum => {
        
        let sylbCounter = 0;    
                while (sylbCounter < sylbNum) {
                    
                    
                    let wordArr  = randommArraySelector(); // assign randomly selected object to a var
                    let ranWord = randomWordSelector(wordArr.words); // assign randomly selected word using callback fn
                    let ranWordSylb = wordArr.syllables+1; // assign selected words sylbal number.
                       
                    if (ranWordSylb == sylbNum) {
                        console.log(`word selected: ${ranWord}`); 
                        console.log(`syllables: ${ranWordSylb}`); 
                        sylbCounter = sylbNum;
                    } 
                    
                    
                    // console.log(`word selected: ${ranWord}`); 
                    // console.log(`syllables: ${ranWordSylb}`); 
                    
                    // sylbCounter ++
                }
        
        
        
    
    console.log(`sylb enterd ${sylbNum}`);
        
    };
   


 console.log(wordsWithSylbalCount(7));