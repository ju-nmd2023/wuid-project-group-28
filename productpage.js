function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

const filters = document.getElementsByClassName("contentBox");

for (i = 0; i < filters.length; i++) {
  filters[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
