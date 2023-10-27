import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
  
      if (selectedDate <= new Date()) {
        Notiflix.Notify.failure("Please choose a date in the future");
      } else {
        Notiflix.Notify.success("You can start the timer now!");
        document.querySelector('[data-start]').removeAttribute("disabled");
      }
    },
  };
  
  flatpickr('#datetime-picker', options);
  
  document.querySelector('[data-start]').addEventListener('click', startTimer);
  
  function startTimer() {
    const selectedDate = flatpickr('#datetime-picker').selectedDates[0];
    const currentDate = new Date();
    
    if (selectedDate <= currentDate) {
      Notiflix.Notify.failure("Please choose a date in the future");
      return;
    }
  
    document.querySelector('[data-start]').setAttribute("disabled", "disabled");
  
    const timerInterval = setInterval(() => {
      const timeDifference = selectedDate - new Date();
      
      if (timeDifference <= 0) {
        clearInterval(timerInterval);
        updateTimer(0);
        Notiflix.Notify.success("Countdown finished!");
      } else {
        updateTimer(timeDifference);
      }
    }, 1000);
  }
  
  function updateTimer(ms) {
    const { days, hours, minutes, seconds } = convertMs(ms);
    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
  }
  
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor((ms % hour) / minute);
    const seconds = Math.floor((ms % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
  