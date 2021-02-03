/*Solving the kata "Figure Out the Notes" on:
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

/**Solving the kata "Holiday III - Fire on the boat" on:
https://www.codewars.com/kata/57e8fba2f11c647abc000944/train/javascript*/

// REGEX: /Fire/ => matches character combinations in strings when "Fire" occurs; and
// REGEX: g => Global search (search into all string content).
const fireFight = s => s.replace(/Fire/g, "~~");