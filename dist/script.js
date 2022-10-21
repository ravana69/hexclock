const hexClock = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours <= 9) {
    hours = `0${hours}`;
  }

  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }

  if (seconds <= 9) {
    seconds = `0${seconds}`;
  }

  const color = `#${hours}${minutes}${seconds}`;

  document.body.style.backgroundColor = color;
  document.getElementById("hex").innerHTML = color;

  setTimeout(() => {
    hexClock();
  }, 1000);
};

window.addEventListener("DOMContentLoaded", () => {
  hexClock();
});