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
const radio =
  document.getElementsByName(
    "delivery"
  ); /* finds all html elements with the name "delivery" and stores them in the variable "radio"... */

/* a classic loop that goes through each radio button one by one */

/* i=0 means that we start with the first radio button; i<radio.length means that we continue as long as i is less than the total number of radio buttons; i++ after each iteration, we can move to the next btn */
for (i = 0; i < radio.length; i++) {
  if (radio[i].checked) alert(radio[i].value);

  /* if radio(i).checked checks if the current radio btn is selected; alert(radio[i].value) if a btn is selected this function displays some kind of alert with the value of the selected btn (value=content of the btn) */
}
