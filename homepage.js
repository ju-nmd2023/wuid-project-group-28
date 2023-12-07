function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

/* main slider */
const slides = document.querySelectorAll(".main-slider .slide");
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
  setInterval(nextSlide, 9000);
}

showSlide(currentSlide);
startSlider();

/* Mini Slider */

let scrollContainer = document.querySelector(".minislide-container");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 305;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 305;
});
