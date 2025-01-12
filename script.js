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
    const rankCell = rows[i].cells[1]; // Rank cell
    rankCell.innerText = i + 1; // Update rank
  }
}

// Automatically sort tables on page load
window.onload = function () {
  sortTable("runsTable", 3);    // Sort Runs table by column 3
  sortTable("wicketsTable", 3); // Sort Wickets table by column 3
  sortTable("sixesTable", 3);   // Sort 6's table by column 3
  sortTable("foursTable", 3);   // Sort 4's table by column 3
};

