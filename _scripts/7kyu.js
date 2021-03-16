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
const removeVowels = str => str.replace(/[aeiou]/g, "");

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


/**Kata "The Office II - Boredom Score" on:
https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript */

const boredom = team => {

    let score = 0;

    for (let staff in team) {

        if (team[staff] === 'accounts')
            score++;
        else if (team[staff] === 'finance')
            score += 2;
        else if (team[staff] === 'canteen')
            score += 10;
        else if (team[staff] === 'regulation')
            score += 3;
        else if (team[staff] === 'trading' || team[staff] === 'change')
            score += 6;
        else if (team[staff] === 'IS')
            score += 8;
        else if (team[staff] === 'retail')
            score += 5;
        else if (team[staff] === 'cleaning')
            score += 4;
        else if (team[staff] === 'pissing about')
            score += 25;
    }

    return (score <= 80) ? 'kill me now' : (score < 100) ? 'i can handle this' : 'party time!!';
}


/**Kata "Get the Middle Character" on:
https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript */

const getMiddle = str => {

    if (str.length === 1)
        return str;

    const isEven = (str.length % 2 === 0);
    str = str.split("");

    if (isEven)
        do {
            str.pop();
            str.shift();
        } while (str.length > 2)
    else
        do {
            str.pop();
            str.shift();
        } while (str.length > 1)

    return str.join("");
}; //getMiddle(str)


/**Kata "Monkey Tennis - The Aftermath" on:
https://www.codewars.com/kata/5a0c5b3206d5b696940000b8/train/javascript */

const ballCollector = detritus => {

    const ballsWeigth = detritus.reduce((acc, detrit) => {
        if (detrit === 58)
            acc += detrit;

        return acc;
    }, 0);

    return { weight: ballsWeigth };
}

/**Kata "Add property to every object in array" on:
https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/train/javascript */

// questions = questions.map(question => question.usersAnswer = null);
questions = questions.map(({ question, options, rightAns, numAttempts }) => {
    const newQuestion = {question:question, options:options, rightAns:rightAns, numAttempts:numAttempts, usersAnswer: null};

    return newQuestion;
});
