let timerInterval;
let timeLeft;
let isTimerRunning = false;

function startTimer(duration) {
  if (isTimerRunning) return;

  const timerDisplay = document.getElementById("timer");
  const durationInput = document.getElementById("duration-input");

  let timer = duration*60;
  let minutes;
  let seconds;

  timerInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Time's up!";
      isTimerRunning = false;
    }
  }, 1000);

  isTimerRunning = true;
  durationInput.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById("timer").textContent = "25:00";
  document.getElementById("duration-input").value = "";
  isTimerRunning = false;
  durationInput.disabled = false;
}

document.getElementById("start-btn").addEventListener("click", function () {
  const durationInput = document.getElementById("duration-input");
  const duration = parseInt(durationInput.value);

  if (duration) {
    startTimer(duration);
  } else {
    alert("Please enter a valid duration in minutes.");
  }
});

document.getElementById("reset-btn").addEventListener("click", function () {
  resetTimer();
});
