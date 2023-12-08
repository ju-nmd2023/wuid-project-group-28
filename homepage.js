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
  slides[n].style.display =
    "block"; /* this way each slide is visually distinct and takes up the full width of it's container in a presentation */
}

function hideSlide(n) {
  slides[n].style.display = "none"; /* hiding it from the view */
}

function nextSlide() {
  hideSlide(currentSlide);
  currentSlide =
    (currentSlide + 1) %
    slides.length; /* this makes a smooth loop;the code line adds 1 to the current slide number and wraps back to the first slide if it is a the end of the slider (last pic of the slider in this case) */
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
