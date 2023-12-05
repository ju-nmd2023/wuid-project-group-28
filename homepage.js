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
  scrollContainer.scrollLeft += 950;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 950;
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1200) {
    nextBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 600;
    });

    backBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= 600;
    });
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 800) {
    nextBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 400;
    });

    backBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= 400;
    });
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 600) {
    nextBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 300;
    });

    backBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= 300;
    });
  }
});
