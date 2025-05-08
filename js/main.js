const calendarDates = document.querySelector('.calendar-dates');
const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function renderCalendar(month, year) {
  calendarDates.innerHTML = '';
  monthYear.textContent = `${months[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Lägg till tomma rutor före månadens första dag
  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement('div');
    calendarDates.appendChild(blank);
  }

  const today = new Date();

  // Skapa dagarna i månaden
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.textContent = i;

    if (
      i === today.getDate() &&
      year === today.getFullYear() &&
      month === today.getMonth()
    ) {
      day.classList.add('current-date');
    }

    calendarDates.appendChild(day);
  }
}


renderCalendar(currentMonth, currentYear);

prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  });
  
  nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

calendarDates.addEventListener('click', (e) => {
  window.location.href = "bokning.html";
});
  

var modal = document.getElementById('id01');
var btn = document.querySelector('.bok_knapp.main');
var span = document.getElementsByClassName('close')[0];

// Funktion för att öppna modalen
function openModal() {
  var modal = document.getElementById('id01');
  modal.style.display = "block";
}

// När användaren klickar på "x" (stängknappen), stäng modalen
function closeModal() {
  var modal = document.getElementById('id01');
  modal.style.display = "none";
}


// När användaren klickar utanför modalen, stäng den
window.onclick = function(event) {
  var modal = document.getElementById('id01');
  if (event.target == modal) {
      closeModal();
  }
}

// Formulärhantering
document.getElementById('bokningsForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Förhindra att formuläret skickas på vanligt sätt och sidan laddas om

  // Visa bekräftelsemeddelandet
  const confirmationMessage = document.getElementById('confirmationMessage');
  confirmationMessage.style.display = 'block'; // Gör bekräftelsemeddelandet synligt

  // Rensa formuläret efter inlämning
  document.getElementById('bokningsForm').reset();

  // Stäng modalen
  function closeModal() {
    document.getElementById('id01').style.display = 'none';
  }

  // Dölja bekräftelsen efter 5 sekunder
  setTimeout(function() {
    confirmationMessage.style.display = 'none'; // Dölj bekräftelsemeddelandet efter 5 sekunder
  }, 5000); // 5000 ms = 5 sekunder
});

console.log("Formuläret skickades");
confirmationMessage.style.display = 'block';
console.log("Bekräftelsemeddelande borde synas");

function productClicked(productName) {
  alert("Du har valt: " + productName);
}