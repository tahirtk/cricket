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