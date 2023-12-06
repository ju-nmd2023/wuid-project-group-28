function myFunction(productThumbnail) {
    var fullImg = document.getElementById("imageBox");
    fullImg.src = productThumbnail.src;
  }

  

/* sidebar */

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

/* PAGINATION */    

let link = document.getElementsByClassName("link");

let currentValue = 1;

function activeLink(){
    for(l of link){
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currentValue = event.target.value;
}

function backBtn(){
    if(currentValue > 1){
        for(l of link){
            l.classList.remove("active");
        }
        currentValue--;
        link[currentValue-1].classList.add("active");
    }
}


function nextBtn(){
    if(currentValue < 5){
        for(l of link){
            l.classList.remove("active");
        }
        currentValue++;
        link[currentValue-1].classList.add("active");
    }
}


/* MINISLIDER */

