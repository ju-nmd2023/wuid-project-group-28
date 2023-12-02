function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

/* main slider */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides[n].style.display = "block";
}

function hideSlide(n) {
  slides[n].style.display = "none";
}

function nextSlide() {
  hideSlide(currentSlide);
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function startSlider() {
  setInterval(nextSlide, 10000); // 3000 milliseconds = 3 seconds
}

showSlide(currentSlide);
startSlider();
