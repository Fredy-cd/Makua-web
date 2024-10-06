const texts = document.querySelectorAll('.test-container');
let currentIndex = 0;

function showNextText() {
  texts[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % texts.length;
  texts[currentIndex].classList.add('active');
}

setInterval(showNextText, 3000); // Change text every 3 seconds
window.onload = function () {
  texts[currentIndex].classList.add('active');
};
