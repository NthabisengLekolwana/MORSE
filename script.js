// Morse Code Map
const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', 
    '8': '---..', '9': '----.', ' ': '/' // Space
};

// Reverse map for decoding Morse to text
const reverseMorseMap = Object.fromEntries(Object.entries(morseCodeMap).map(([k, v]) => [v, k]));

// Convert Text to Morse
function convertToMorse() {
    const textInput = document.getElementById("text-input").value.toUpperCase();
    document.getElementById("morse-output").innerText = textInput.split("").map(char => morseCodeMap[char] || '').join(" ");
}

// Convert Morse to Text
function convertToText() {
    const morseInput = document.getElementById("morse-input").value.trim();
    document.getElementById("text-output").innerText = morseInput.split(" ").map(code => reverseMorseMap[code] || '?').join("");
}
