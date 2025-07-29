// when respesive add menu vertical
document.addEventListener("DOMContentLoaded", function () {
    var incon = document.getElementById("fa-bars");
    var vertical = document.getElementById("vertical");
    if (incon && vertical) {
        incon.addEventListener("click", function () {
            if (vertical.style.display === "flex") {
                vertical.style.display = "none";
            } else {
                vertical.style.display = "flex";
            }
        });
    }
});

const images = document.querySelectorAll(".h");
const menu1 = document.querySelectorAll(".menu1");

images.forEach(indx => {
    indx.addEventListener("mouseover", () => {
        indx.style.transform = "scale(1.05)"; // Zoom in
    });

    indx.addEventListener("mouseout", () => {
        indx.style.transform = "scale(1)"; // Zoom out
    });
});


const images2 = document.querySelectorAll(".img_drag");

images2.forEach(indx => {
    indx.addEventListener("mouseover", () => {
        indx.style.transform = "scale(1.05)"; // Zoom in
    });

    indx.addEventListener("mouseout", () => {
        indx.style.transform = "scale(1)"; // Zoom out
    });
});


// loaded
window.addEventListener('load', function() {
  console.log('Page fully loaded');
  document.getElementById('loader').style.display = 'none';
  document.getElementById('contentt').style.display = 'block';
});


    console.log("hello word")