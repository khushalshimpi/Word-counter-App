console.log("hey pipoy");

// Get all classes and id from Html

let stats = document.querySelector(".status");
// console.log(stats);
let text = document.getElementById("text");

// console.log(text)
let char = document.getElementById("char");
let words = document.getElementById("words");
let lines = document.getElementById("lines");
let symbols = document.getElementById("symbols");

// Make count function

function count() {
  if (text.value.length === 0) {
    stats.style.display = "none";
  } else {
    stats.style.display = "block";

    // counting character
    char.innerHTML = text.value.length + " Characters";

    // counting words
    words.innerHTML = text.value.trim().split(/\s+/).length + " Words";
    // split => split a text into string containing array
    // trim = > remove extra spaces

    // counting lines
    lines.innerHTML = text.value.split("\n").length + " Lines";

    // counting symbols
    symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " Symbols"
  }
}

text.addEventListener("input", count);

