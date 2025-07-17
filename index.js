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

// Sample product data
const products = [
    // Keyboards

    {
        id: 2,
        name: "VIGOR GK71 SONIC BLUE",
        price: "$129.99",
        image: "../images/key1.png",
        categories: ["keyboard", "mechanical", "wireless"],
        features: ["rgb", "multimedia"],
        isHot: true
    },
    {
        id: 3,
        name: "VIGOR GK30 PRO",
        price: "$69.99",
        image: "../images/key2.png",
        categories: ["keyboard", "mechanical"],
        features: ["rgb"],
        isHot: false
    },
    {
        id: 5,
        name: "VIGOR GK80 MAX",
        price: "$149.99",
        image: "../images/key3.png",
        categories: ["keyboard", "mechanical"],
        features: ["rgb", "multimedia"],
        isHot: true
    },
    // Mice
    {
        id: 6,
        name: "CLUTCH GM41 LIGHTWEIGHT",
        price: "$59.99",
        image: "../images/mouse1.png",
        categories: ["mouse", "gaming"],
        features: ["rgb", "lightweight"],
        isHot: false
    },
    {
        id: 7,
        name: "CLUTCH GM51 WIRELESS",
        price: "$79.99",
        image: "../images/mouse1.png",
        categories: ["mouse", "wireless"],
        features: ["rgb", "wireless"],
        isHot: true
    },
    {
        id: 9,
        name: "CLUTCH GM71 WIRELESS RGB",
        price: "$89.99",
        image: "../images/mouse3.png",
        categories: ["mouse", "wireless"],
        features: ["rgb", "wireless"],
        isHot: true
    },
    {
        id: 10,
        name: "CLUTCH GM91 PRO",
        price: "$99.99",
        image: "../images/mouse4.png",
        categories: ["mouse", "wireless"],
        features: ["rgb", "wireless"],
        isHot: true
    },
    // Graphics Cards
    {
        id: 11,
        name: "GeForce RTX™ 4090 SUPRIM X",
        price: "$1599.99",
        image: "../images/audio1.png",
        categories: ["graphics"],
        features: ["rtx", "gaming"],
        isHot: true
    },
    {
        id: 12,
        name: "GeForce RTX™ 4080 GAMING X TRIO",
        price: "$999.99",
        image: "../images/audio2.png",
        categories: ["graphics"],
        features: ["rtx", "gaming"],
        isHot: true
    },
    {
        id: 14,
        name: "GeForce RTX™ 4060 Ti VENTUS",
        price: "$449.99",
        image: "../images/audio3.png",
        categories: ["graphics"],
        features: ["rtx"],
        isHot: false
    },
    {
        id: 15,
        name: "GeForce RTX™ 4070 Ti SUPRIM",
        price: "$799.99",
        image: "../images/audio4.png",
        categories: ["graphics"],
        features: ["rtx", "gaming"],
        isHot: true
    },
    // Laptops
    {
        id: 16,
        name: "Raider GE78 HX",
        price: "$2499.99",
        image: "../images/chair1.png",
        categories: ["laptop"],
        features: ["rtx", "rgb"],
        isHot: true
    },
    {
        id: 17,
        name: "Stealth 16 Studio",
        price: "$1899.99",
        image: "../images/chair2.png",
        categories: ["laptop"],
        features: ["rtx", "oled"],
        isHot: false
    },
    {
        id: 18,
        name: "Vector GP68",
        price: "$1699.99",
        image: "../images/chair3.png",
        categories: ["laptop"],
        features: ["rtx", "rgb"],
        isHot: false
    },
    {
        id: 20,
        name: "Pulse 15",
        price: "$1299.99",
        image: "../images/chair4.png",
        categories: ["laptop"],
        features: ["rtx"],
        isHot: false
    }
];

// Function to create product cards
function createProductCard(product) {
    return `
        <div class="product-card">
            ${product.isHot ? '<span class="hot-label">HOT</span>' : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <label class="compare-checkbox">
                <a href="by.html" style="text-decoration:none;"><button class="hh">
                    By now
                    <div class="arrow-wrapper">
                        <div class="arrow"></div>

                    </div>
                </button></a>
                </label>
            </div>
        </div>
    `;
}

// Function to filter products
function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(checkbox => checkbox.value);
    const selectedFeatures = Array.from(document.querySelectorAll('input[name="features"]:checked'))
        .map(checkbox => checkbox.value);

    return products.filter(product => {
        const categoryMatch = selectedCategories.length === 0 || 
            product.categories.some(cat => selectedCategories.includes(cat));
        const featureMatch = selectedFeatures.length === 0 || 
            selectedFeatures.every(feature => product.features.includes(feature));
        return categoryMatch && featureMatch;
    });
}

// Function to update product display
function updateProducts() {
    const filteredProducts = filterProducts();
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = filteredProducts.map(createProductCard).join('');
    
    // Update product count
    document.querySelector('.product-count').textContent = `${filteredProducts.length} Products`;
}

// Add event listeners
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateProducts);
});

document.getElementById('sort').addEventListener('change', (e) => {
    const sortValue = e.target.value;
    products.sort((a, b) => {
        if (sortValue === 'price-low') {
            return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
        } else if (sortValue === 'price-high') {
            return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
        }
        return 0;
    });
    updateProducts();
});

// Initial load
updateProducts();

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve stored values from local storage
    const emailInput = document.querySelector(".inputForm input[type='text']");
    const passwordInput = document.querySelector(".inputForm input[type='password']");
    const rememberMeCheckbox = document.querySelector("input[type='checkbox']");
    const signUpButton = document.querySelector(".span-signup"); // Assuming this is the Sign Up button
    const loginForm = document.querySelector(".form");
    const signUpForm = document.querySelector(".modern-form");

    if (localStorage.getItem("rememberMe") === "true") {
        emailInput.value = localStorage.getItem("email") || "";
        passwordInput.value = localStorage.getItem("password") || "";
        rememberMeCheckbox.checked = true;
    }

    // Store values in local storage on form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        if (rememberMeCheckbox.checked) {
            localStorage.setItem("email", emailInput.value);
            localStorage.setItem("password", passwordInput.value);
            localStorage.setItem("rememberMe", "true");
        } else {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            localStorage.setItem("rememberMe", "false");
        }

        alert("Form submitted!"); // Placeholder for further actions
    });

    // Handle sign-up form submission
    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default submission
        const signUpEmail = document.querySelector(".modern-form input[type='email']").value;
        const signUpPassword = document.querySelector(".modern-form input[type='password']").value;

        // Store new user details (for demo purposes only, not secure!)
        localStorage.setItem("newUserEmail", signUpEmail);
        localStorage.setItem("newUserPassword", signUpPassword);

        alert("Account created successfully!");
    });

    // Toggle password visibility
    const passwordToggle = document.querySelector(".password-toggle");
    passwordToggle.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });

    // Show sign-up form and hide login form on sign-up button click
    signUpButton.addEventListener("click", function () {
        loginForm.style.display = "none";
        signUpForm.style.display = "block";
    });
});
