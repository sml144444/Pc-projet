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

// carousel
document.addEventListener('DOMContentLoaded', () => {
    const imageSlider = document.querySelector('.image-slider');
    const sliderImages = imageSlider.querySelectorAll('.slider-image');
    const prevBtn = imageSlider.querySelector('.slider-button-prev');
    const nextBtn = imageSlider.querySelector('.slider-button-next');
    const sliderNavigation = document.querySelector('.slider-navigation');
    
    let currentIndex = 0;
  
    // Create dots
    sliderImages.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      sliderNavigation.appendChild(dot);
    });
  
    const dots = sliderNavigation.querySelectorAll('.dot');
  
    function updateSlide() {
      sliderImages.forEach(img => img.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      sliderImages[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
    }
  
    function goToSlide(index) {
      currentIndex = index;
      updateSlide();
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % sliderImages.length;
      updateSlide();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
      updateSlide();
    }
  
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
  
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    });
  
    // Auto-advance slides
    let intervalId = setInterval(nextSlide, 5000);
  
    // Pause auto-advance on hover
    imageSlider.addEventListener('mouseenter', () => clearInterval(intervalId));
    imageSlider.addEventListener('mouseleave', () => {
      clearInterval(intervalId);
      intervalId = setInterval(nextSlide, 5000);
    });
  });


// loadinding
window.addEventListener('load', function() {
  console.log('Page fully loaded');
  document.getElementById('loader').style.display = 'none';
  document.getElementById('contentt').style.display = 'block';
});
