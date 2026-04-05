const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

function flipCard(switchElement) {
  const card = switchElement.closest(".flip-card");
  card.classList.toggle("flipped");

  // Toggle the switch state (active/inactive)
  switchElement.classList.toggle("active");
}






// Generic sorting function for any table
function sortTable(tableId, columnIndex) {
  const table = document.getElementById(tableId);
  const rows = Array.from(table.rows);

  // Sort rows based on the specified column index
  rows.sort((rowA, rowB) => {
    const valueA = parseInt(rowA.cells[columnIndex]?.innerText || 0);
    const valueB = parseInt(rowB.cells[columnIndex]?.innerText || 0);
    return valueB - valueA; // Sort in descending order
  });

  // Append sorted rows back to the table
  rows.forEach((row) => table.appendChild(row));

  // Update ranks
  updateRanks(table);
}

// Function to update ranks
function updateRanks(table) {
  const rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    const rankCell = rows[i].cells[0]; // Rank cell
    rankCell.innerText = i + 1; // Update rank
  }
}

// Automatically sort tables on page load
window.onload = function () {
  sortTable("runsTable", 2);    // Sort Runs table by column 3
  sortTable("wicketsTable", 3); // Sort Wickets table by column 3
  sortTable("sixesTable", 2);   // Sort 6's table by column 3
  sortTable("foursTable", 2);   // Sort 4's table by column 3
};


const players = {
  Hassan:    { matches: 22, runs: 197, six: 11, four: 13 },

  Tahir:     { matches: 22, runs: 358, six: 26, four: 31 },

  Faizan:    { matches: 18, runs: 189, six: 18, four: 8 },

  Haider:    { matches: 21, runs: 162, six: 7, four: 9 },

  Umer:      { matches: 24, runs: 116, six: 4, four: 6 },
  
  Ahmed:     { matches: 16, runs: 108, six: 3, four: 11 },

  Faiz:      { matches: 8,  runs: 92,  six: 5, four: 7 },

  Mohiyudin: { matches: 7,  runs: 51,  six: 2, four: 4 },

  Arooj:     { matches: 3,  runs: 45,  six: 4, four: 3 },

  Arham:     { matches: 11, runs: 33,  six: 2, four: 1 },
};

function showStats(name) {
  const p = players[name];
  
  document.getElementById("cardName").innerText = name;
  document.getElementById("cardMatches").innerText = + p.matches;
  document.getElementById("cardRuns").innerText    =  + p.runs;
  document.getElementById("cardSix").innerText     =  + p.six;
  document.getElementById("cardFour").innerText      = + p.four;

  document.getElementById("statsCard").style.display = "block";
}

function closeCard() {
  document.getElementById("statsCard").style.display = "none";
}


