const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// let passwordOneEl = document.getElementById("passwordOne-el")
let p1El = document.getElementById("p1");
let p2El = document.getElementById("p2");
let boo = false;



function generate() {
    if (boo===false){
        for (let i = 0; i < 16; i++) {
          let randomPaswword1 = Math.floor(Math.random() * characters.length);
          console.log(characters[randomPaswword1]);
          p1El.textContent += characters[randomPaswword1];
          let randomPaswword2 = Math.floor(Math.random() * characters.length);
          p2El.textContent += characters[randomPaswword2];
        }
    }
    boo=true;
}
