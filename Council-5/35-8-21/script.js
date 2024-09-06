// JS


const counterElement = document.querySelector(".counter");
const buttonElement = document.querySelector(".btn");
let countdown = 99;

function updateCountdown() {
  if (countdown > 0) {
    countdown--;
    counterElement.textContent = countdown;
  }

  if (countdown === 0) {
    counterElement.textContent = 0;
    buttonElement.disabled = false;
  } else {
    window.requestAnimationFrame(updateCountdown);
  }
}

buttonElement.disabled = true;
updateCountdown();
function redirectToWebsite() {
  if (!buttonElement.disabled) {
    window.location.href = "https://fullstack.edu.vn";
  }
}
buttonElement.addEventListener("click", redirectToWebsite);