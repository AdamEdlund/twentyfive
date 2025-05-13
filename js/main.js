document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu code
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.navbuttons');
  
  // Kontrollera att båda elementen finns innan vi fortsätter
  if (!hamburger) {
    console.error("Hamburger element not found! Check if ID 'hamburger' exists in HTML.");
  } else if (!navMenu) {
    console.error("Navigation menu not found! Check if class 'navbuttons' exists in HTML.");
  } else {
    hamburger.addEventListener('click', () => {
      console.log("Hamburger clicked");
      navMenu.classList.toggle('show');
    });
  }

  // Calendar code
  const calendarDates = document.querySelector('.calendar-dates');
  const monthYear = document.getElementById('month-year');
  const prevMonthBtn = document.getElementById('prev-month');
  const nextMonthBtn = document.getElementById('next-month');

  // Only proceed with calendar if the elements exist
  if (calendarDates && monthYear && prevMonthBtn && nextMonthBtn) {
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

    // Initial render of calendar
    renderCalendar(currentMonth, currentYear);

    // Add event listeners for the calendar
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

    if (calendarDates) {
      calendarDates.addEventListener('click', (e) => {
        window.location.href = "bokning.html";
      });
    }
  } else {
    console.error("Calendar elements not found. Check if needed elements exist in HTML.");
  }
});




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

function openModal() {
  var modal = document.getElementById('id01');
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById('id01');
  modal.style.display = "none";
}


window.onclick = function(event) {
  var modal = document.getElementById('id01');
  if (event.target == modal) {
      closeModal();
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('bokningsForm');
  const confirmationMessage = document.getElementById('confMess'); 

  if (form && confirmationMessage) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      form.reset();

      document.getElementById('id01').style.display = 'none';

      setTimeout(function () {
        confirmationMessage.style.display = 'none';
      }, 5000);
    });
  } else {
    console.error("Formuläret eller bekräftelsemeddelandet hittades inte.");
  }
});

console.log("Formuläret skickades");
confirmationMessage.style.display = 'block';
console.log("Bekräftelsemeddelande borde synas");

function productClicked(productName) {
  alert("Du har valt: " + productName);
}