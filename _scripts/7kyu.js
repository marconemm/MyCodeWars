/*Kata "Figure Out the Notes" on:
 https://www.codewars.com/kata/5602e85d255e3240c2000024/train/javascript */

const whatNote = (string, fret) => {
    const guitarFretList = [
        ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
        ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
        ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"],
        ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"],
        ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"]
    ];

    // Find the "i" value:
    let i;
    if (string === "B")
        i = 1;
    else if (string === "G")
        i = 2;
    else if (string === "D")
        i = 3;
    else if (string === "A")
        i = 4;
    else
        i = 0;

    // Find the "fret" value:
    if (fret >= guitarFretList[0].length)
        fret -= guitarFretList[0].length - 1;

    // Return the selected note:
    return guitarFretList[i][fret];
};

/**Kata "Holiday III - Fire on the boat" on:
https://www.codewars.com/kata/57e8fba2f11c647abc000944/train/javascript*/

// REGEX: /Fire/ => matches character combinations in strings when "Fire" occurs; and
// REGEX: g => Global search (search into all string content).
const fireFight = s => s.replace(/Fire/g, "~~");

/**Kata "Everything Is Even" on:
https://www.codewars.com/kata/59c0cdbd5fb133c82b00007d/train/javascript*/

const ensureEven = n => {
    n = Math.round(n);

    if (n > 0 && n % 2 !== 0)
        n += 1;

    if (n < 0)
        n -= 1;

    return n;
}

/**Kata "All Star Code Challenge #3" on:
https://www.codewars.com/kata/58640340b3a675d9a70000b9/train/javascript*/

// REGEX to find only the vowels: /[aeiou]/g
const removeVowels = str => str.replace(/[aeiou]/g,"");

//Solução alternativa:
// const removeVowels = string => {
  
//     for (let i = 0; i < string.length; i++){
//       const char = string[i];
//       let firstPart;
//       let secondPart;
      
//       if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//         firstPart = string.slice(0,i);
//         secondPart = string.slice(i+1);
//         string = firstPart + secondPart;
//         i--;
//       } 
//     }
    
//     return string;
//   }

//   console.log(removeVowels("drake"));