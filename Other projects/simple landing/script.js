const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
var slides = document.querySelector(".slider-items").children;
var nextslide = document.querySelector(".right-slide");
var preslide = document.querySelector(".left-slide");
var totalslides = slides.length;
var index = 0;

// Validate input values

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

nextslide.onclick = function () {
  next("next");
};
preslide.onclick = function () {
  next("pre");
};
function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalslides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalslides - 1;
    } else {
      index--;
    }
  }
  for (var i = 0; i < totalslides; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
// Get the registration form and form inputs
const fullNameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const ageInput = document.getElementById("age");

const form = document.getElementById("register-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Full Name: can only contain letters
  const fullNameRegex = /^[\u0600-\u06FF\s]+$/;
  const isFullNameValid = fullNameRegex.test(fullNameInput.value);
  if (!isFullNameValid) {
    fullNameInput.classList.add("invalid");
    document.getElementById("name-error-message").textContent =
      "نام و نام خانوادگی فقط باید شامل حروف فارسی باشد.";
  } else {
    fullNameInput.classList.remove("invalid");
    document.getElementById("name-error-message").textContent = "";
  }
  // Email: valid email address
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const isEmailValid = emailRegex.test(emailInput.value);
  if (!isEmailValid) {
    emailInput.classList.add("invalid");
    document.getElementById("email-error-message").textContent =
      "لطفا یک نشانی ایمیل صحیح وارد کنید.";
  } else {
    emailInput.classList.remove("invalid");
    document.getElementById("email-error-message").textContent = "";
  }

  // Password: must contain at least 8 characters including 1 uppercase letter, 1 lowercase letter, and 1 digit
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const isPasswordValid = passwordRegex.test(passwordInput.value);
  if (!isPasswordValid) {
    passwordInput.classList.add("invalid");
    document.getElementById("password-error-message").textContent =
      "رمزعبور باید شامل حداقل ۸ کاراکتر به طول اعم از یک حرف بزرگ، یک حرف کوچک و یک عدد باشد.";
  } else {
    passwordInput.classList.remove("invalid");
    document.getElementById("password-error-message").textContent = "";
  }

  // Age: must be at least 18 years old
  const isAgeValid = ageInput.value >= 18;
  if (!isAgeValid) {
    ageInput.classList.add("invalid");
    document.getElementById("age-error-message").textContent =
      "شما به سن قانونی نرسیده اید.";
  } else {
    ageInput.classList.remove("invalid");
    document.getElementById("age-error-message").textContent = "";
  }

  // If all inputs are valid, store information as a cookie and clear the form
  if (isFullNameValid && isEmailValid && isPasswordValid && isAgeValid) {
    // Create an array of values to store as cookie
    const valuesToStore = [
      { name: "email", value: emailInput.value },
      { name: "fullname", value: fullNameInput.value },
      { name: "age", value: ageInput.value },
    ];

    valuesToStore.forEach(({ name, value }) => {
      document.cookie = `${name}=${value}`;
    });

    form.reset();

    // Autocomplete form inputs based on stored email
    const cookies = document.cookie.split(";");
    const cookieMap = cookies.reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split("=");
      acc[name] = value;
      return acc;
    }, {});

    if (cookieMap.email) {
      Object.keys(cookieMap).forEach((name) => {
        if (name !== "email") {
          document.getElementsByName(name)[0].value = cookieMap[name];
        }
      });
      emailInput.value = cookieMap.email;
    }
  }
});

// galry

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
