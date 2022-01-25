# Mixed-Messages Project - Random Hiku Generator


A cool little  program written in JavaScript that randomly returns a correclty formated hiku. 

>It uses Math logic to select a random word from a data base of workds in  `words.js`.  
The program thenn checks to see how many syllables are in that word and complates the sentecne with other randomly chosen words that fit the reminder of the syllables needed. Each sentence can arrive at required syllables count randomly.

```
Example: 

Required syllables 5

Randomly selected word retuns; 3 syllable word.

Expected output will have [3,1,1] or [3,2] etc.

Example 2: 

Required syllables 7

Randomly selected word retuns; 1 syllable word.

Expected output will have [1,5,1] or [7] or [1,3,3] etc. 

```

This program was designed based on an assignment in Codecademy's Full-Stack Engineering Path.






# Technologies
Project is created with :
```
Node.js
JavaScript
```
## To run this program, you must download Node.js.
```
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"



$ node script.js
```

## You can run this program in borwser by visiting its github pages link:
[Mixed Messages - hiku](https://windserenity.github.io/Mixed-Messages-Codecademy/
) 