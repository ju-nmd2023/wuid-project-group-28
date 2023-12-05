/* Menu Bar */

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

/* Delivery Buttons */
const radio = document.getElementsByName("delivery");
for (i = 0; i < radio.length; i++) {
  if (radio[i].checked) alert(radio[i].value);
}
