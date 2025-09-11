// Find the first element with class "tile"
const firstTile = document.querySelector('.tile');

// Find the first element with class "row"  
const firstRow = document.querySelector('.row');

// Find ALL elements with class "tile"
const allTiles = document.querySelectorAll('.tile');

console.log("there are ", allTiles.length, "tiles"); // 5 tiles in this row

// ===========================

// // Get the first tile
// const tile = document.querySelector('.tile');

// // Change what letter it shows
// tile.textContent = 'H';  // Changes from 'W' to 'H'

// // Clear a tile
// tile.textContent = '';   // Makes it empty

// // User types a letter
// function addLetter(letter) {
//     const emptyTile = document.querySelector('.tile:empty');
//     if (emptyTile) {
//         emptyTile.textContent = letter;
//     }
// }
// addLetter('H');

// ===============================
// Real world scenario: 

// // When user types "HELLO"
// const letters = ['H', 'E', 'L', 'L', 'O'];
// const tiles = document.querySelectorAll('.row .tile');

// for (let i = 0; i < letters.length; i++) {
//     tiles[i].textContent = letters[i];
// }
// // Result: First 5 tiles now show "HELLO"

// =========================

// Your CSS already defines these:
// .tile.correct { background-color: #6aaa64; }
// .tile.present { background-color: #c9b458; }
// .tile.absent { background-color: #787c7e; }

// const tile = document.querySelector('.tile');

// // Add the "correct" class
// tile.className = 'tile correct';  // Green background

// // Change to "present" 
// tile.className = 'tile present';  // Yellow background

// // Change to "absent"
// tile.className = 'tile absent';   // Gray background

// =================

// function updateTileColors(letters) {
//     const tiles = document.querySelectorAll('.row .tile');
    
//     for (let i = 0; i < letters.length; i++) {
//         tiles[i].className = 'tile ' + letters[i];  // ← Add "tile " before the result
//     }   
// }

// // Usage after evaluating a guess:
// const results = ['correct', 'present', 'absent', 'absent', 'present'];
// updateTileColors(results);