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
  
    for (let i = 0; i < firstDay; i++) {
      const blank = document.createElement('div');
      calendarDates.appendChild(blank);
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
      const day = document.createElement('div');
      day.textContent = i;
      calendarDates.appendChild(day);
    }

    const today = new Date();

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

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}