/* sidebar */

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

/* QUANTITY CONTROLLER*/

/* Code was created with the help of ChatGPT */

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.quantity-controller button').forEach(button => {
      button.addEventListener('click', function() {
        const direction = this.dataset.action;
        const quantitySpan = this.closest('.quantity-controller').querySelector('.product-quantity');
        let quantity = parseInt(quantitySpan.innerText, 10);
  
        if (direction === 'increase') {
          quantity += 1;
        } else if (direction === 'decrease' && quantity > 1) {
          quantity -= 1;
        }
  
        quantitySpan.innerText = quantity;
      });
    });
  });
  