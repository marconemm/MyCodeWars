/*Kata "Categorize New Member" on:
 https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript */

// first solution, usin ".reduce":
function openOrSenior(data) {
    return data.reduce((acc, member) => (member[0] > 54 && member[1] > 7) ? acc.push("Senior") : acc.push("Open"), []);
}

// second solution, usin ".map":
function openOrSenior(data) {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

/* Kata "A square of squares" on:
https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript */

const isSquare = n => Number.isInteger(Math.sqrt(n))


/* Kata "Difference of Volumes of Cuboids" on:
https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript */

const findDifference = (a, b) => Math.abs(a.reduce((acc, side) => acc * side) - b.reduce((acc, side) => acc * side))

/* Kata "Find the first non-consecutive number" on:
https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript */

const firstNonConsecutive = arr => {

    let result = null;
    for (let i = 0; i < arr.length; i++) {
        const el1 = arr[i];
        const el2 = arr[i + 1];

        if (el2 > (arr[i] + 1)) {
            result = el2
            break;
        }
    }

    return result;
};

/** Kata "FIXME: Replace all dots" on:
 https://www.codewars.com/kata/596c6eb85b0f515834000049/train/javascript  */

// added the "\" to escape special characters and "g" to replace all occurences in the string
const replaceDots = str =>
    str.replace(/[.]/g, '-');

/** Kata "Sum of positive" on:
 https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript  */

const positiveSum = arr => arr.reduce((acc, number) => {
    if (number > 0)
        acc += number;

    return acc;
}, 0);

/** Kata "You only need one - Beginner" on:
 https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript  */

const check = (a, x) => a.includes(x);

/** Kata "Is it a rainbow?" on:
 https://www.codewars.com/kata/59e7202ffc3c4952940000a9/train/javascript  */

const sortRainbow = colour => {
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    if (colour.toString() == rainbowColors.toString())
        return true;

    return false;

    //Solução Alternativa:
    // return rainbowColors.every((color, i) => colour[i] === color);
}

/** Kata "How good are you really?" on:
 https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript  */

const betterThanAverage = (classPoints, yourPoints) => {
    const totalClassPoints = classPoints.reduce((acc, grade) => acc += grade);
    const classAverage = totalClassPoints / classPoints.length;
    const amIbetter = yourPoints > classAverage;

    if (amIbetter)
        return true;

    return false;
}


/** Kata "Beginner Series #2 Clock" on:
 https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript  */

const past = (h, m, s) => {

    let total = 0;

    if (h !== 0)
        total += (h * 3600000);

    if (m !== 0)
        total += (m * 60000);

    if (s !== 0)
        total += (s * 1000);

    return total;
}

/** Kata "Is it a palindrome?" on:
 https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript  */

const isPalindrome = str => {
    str = str.toLowerCase();
    const strReverse = str.split("").reverse().join("");

    return (str === strReverse) ? true : false;
}

/** Kata "SpeedCode #2 - Array Madness" on:
 https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript  */

const arrayMadness = (arr1, arr2) => {

    const squareSumArr1 = arr1.reduce((acc, number) => acc += number ** 2, 0);
    const cubesSumArr2 = arr2.reduce((acc, number) => acc += number ** 3, 0);

    return (squareSumArr1 > cubesSumArr2) ? true : false;
}

/** Kata "Total amount of points" on:
 https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript  */

const points = games => games.reduce((points, game) => {

    if (game[0] === game[2])
        points += 1;
    else if (game[0] > game[2])
        points += 3;

    return points;
}, 0);

/** Kata "Array plus array" on:
 https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript  */

const arrayPlusArray = (arr1, arr2) => {
    const sumArr1 = arr1.reduce((sum, value) => sum += value);
    const sumArr2 = arr2.reduce((sum, value) => sum += value);

    return sumArr1 + sumArr2;
}

/** Kata "Grasshopper - Grade book" on:
https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript  */

const getGrade = (s1, s2, s3) => {
    const score = (s1 + s2 + s3) / 3;

    if (score >= 90)
        return 'A';
    else if (score >= 80)
        return 'B';
    else if (score >= 70)
        return 'C';
    else if (score >= 60)
        return 'D';

    return 'F';

}

/** Kata "Crash Override" on:
https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript  */

const aliasGen = (name, surName) => {
    const REGEX = /[0-9]/; // to find only numbers 0 to 9.
    const nameFirstLetter = name.charAt(0).toUpperCase();
    const surNameFirstLetter = surName.charAt(0).toUpperCase();
    const isNumeric = nameFirstLetter.match(REGEX) || surNameFirstLetter.match(REGEX); // returns "null" case doesn't match with "REGEX".

    if (isNumeric !== null)
        return "Your name must start with a letter from A - Z.";

    return `${firstName[nameFirstLetter]} ${surname[surNameFirstLetter]}`;

}

/** Kata "Welcome!" on:
https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript  */

const languages = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
}

const greet = greetLanguage => {
    if (languages[greetLanguage] === undefined)
        return "Welcome";

    return languages[greetLanguage];
}

/** Kata "Triple Trouble" on:
https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript  */

const tripleTrouble = (one, two, three) => {

    let resultStr = "";
    for (let i = 0; i < one.length; i++)
        resultStr += `${one[i]}${two[i]}${three[i]}`;

    return resultStr
}


/**Kata "Regular Ball Super Ball" on:
https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript */

const Ball = (ballType) => this.ballType = ballType || "regular";

/**Kata "You only need one - Beginner" on:
https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript */

// const check = (array, value) => array.includes(value);

/**Kata "Filling an array (part 1)" on:
https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript */

const arr = maxLength => {
    const result = [];
    let length = result.length;

    while (length < (maxLength))
        length = result.push(length)

    return result;
}

/**Kata "Grasshopper - Terminal Game #1" on:
https://www.codewars.com/kata/55e8aba23d399a59500000ce/train/javascript */

class Hero {
    constructor(name = 'Hero') {
        this.name = name;
        this.position = '00';
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
    };
};

/**Kata "Grasshoppe" he rooms" on:
https://www.codewars.com/kata/56a29b237e9e997ff2000048/train/javascript */

class Room {
    constructor(name = "", description = "", completed = false) {
        this.name = name;
        this.description = description;
        this.completed = completed;
    }
}

const rooms = {
    bedroom: new Room(),
    kitchen: new Room(),
    bathroom: new Room(),
}

/**Kata "Squash the bugs" on:
https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript */

const findLongest = sentence => {

    const wordsList = sentence.split(" ");
    let longest = 0;

    for (let i = 0; i < wordsList.length; i++) {
        const word = wordsList[i];

        if (word.length > longest)
            longest = word.length;
    }

    return longest;
}

/**Kata "Grasshoppe" shing" on:
https://www.codewars.com/kata/56214b6864fe8813f1000019/train/javascript */


let health = 100;
let position = 0;
let coins = 0;

const attack = () => "";

const main = () => {
    rollDice();
    move();
    combat();
    getCoins();
    buyHealth();
    printStatus();
}

/**Kata "Subtract the Sum" on:
https://www.codewars.com/kata/56c5847f27be2c3db20009c3/train/javascript */

const fruitsLists = ["kiwi", "pear", "kiwi", "banana", "melon", "banana", "melon", "pineapple", "apple", "pineapple", "cucumber", "pineapple", "cucumber", "orange", "grape", "orange", "grape", "apple", "grape", "cherry", "pear", "cherry", "pear", "kiwi", "banana", "kiwi", "apple", "melon", "banana", "melon", "pineapple", "melon", "pineapple", "cucumber", "orange", "apple", "orange", "grape", "orange", "grape", "cherry", "pear", "cherry", "pear", "apple", "pear", "kiwi", "banana", "kiwi", "banana", "melon", "pineapple", "melon", "apple", "cucumber", "pineapple", "cucumber", "orange", "cucumber", "orange", "grape", "cherry", "apple", "cherry", "pear", "cherry", "pear", "kiwi", "pear", "kiwi", "banana", "apple", "banana", "melon", "pineapple", "melon", "pineapple", "cucumber", "pineapple", "cucumber", "apple", "grape", "orange", "grape", "cherry", "grape", "cherry", "pear", "cherry", "apple", "kiwi", "banana", "kiwi", "banana", "melon", "banana", "melon", "pineapple", "apple", "pineapple"];

const SubtractSum = number => {

    let algarismsList = [];
    let sum = 0;
    let isFruit = fruitsLists.includes(number - sum);
    debugger
    while (!isFruit) {

        algarismsList = number.toString().split("");
        sum = algarismsList.reduce((acc, algarism) => {

            acc += Number(algarism);

            return acc;

        }, 0);

        isFruit = (number < fruitsLists.length);
        number -= sum;

        if (isFruit)
            return fruitsLists[number - 1];

    }
}

/**Kata "Sum Mixed Array" on:
https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript */

const sumMix = array => {
    array = array.map(number => parseInt(number));

    return array.reduce((acc, number) => acc += number);
}

/**Kata "Smallest unused ID" on:
https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript */

const nextId = idsList => {

    idsList = idsList.sort((a, b) => a - b);

    for (let i = 0; i <= idsList.length; i++) {
        if (idsList.includes(i))
            continue;

        if (i === (idsList.length))
            return i;

        return i;

    }
}

/**Kata "Remove String Spaces" on:
https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript */

const noSpace = str => str.replace(/\s/g, "");

// or...

// const noSpace = str => str.split(" ").join("");

/**Kata "Check the exam" on:
https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript */

const checkExam = (correctAnswersList, studantAnswersList) => {
    const result = studantAnswersList.reduce((acc, studantAnswer, i) => {
        if (studantAnswer) {
            if (studantAnswer === correctAnswersList[i])
                acc += 4;
            else
                acc -= 1;
        }

        return acc;
    }, 0);

    if (result < 0)
        return 0;

    return result;
}

/**Kata "Can we divide it?" on:
https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript */

const isDivideBy = (number, a, b) => {
    const isDivisibleByA = (number % a === 0);
    const isDivisibleByB = (number % b === 0);

    return (isDivisibleByA && isDivisibleByB);
}

/**Kata "All Star Code Challenge #18" on:
https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript */

const strCount = (str, letter) => {
    const REGEX = RegExp(`[^${letter}]`, 'g');
    return str.replace(REGEX, "").length;
}


