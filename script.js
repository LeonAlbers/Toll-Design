const navMenu = document.getElementById("nav-menu");
const navBar = document.getElementById("navbar");
const burgerIcon = document.getElementById("burger-icon");
const account = document.getElementById("accountBild");

// Toggle between burger and times icon
burgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navBar.classList.toggle("openMenu");

  if (burgerIcon.src.includes("burger-icon.svg")) {
    burgerIcon.src = "res/times-icon.svg"; // Switch to times icon
  } else {
    burgerIcon.src = "res/burger-icon.svg"; // Switch back to burger icon
  }
});

// Add keyboard accessibility for the hamburger menu
burgerIcon.setAttribute("tabindex", "0"); // Make it focusable with Tab

burgerIcon.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    navMenu.classList.toggle("active");

    if (burgerIcon.src.includes("burger-icon.svg")) {
      burgerIcon.src = "res/times-icon.svg"; // Switch to times icon
    } else {
      burgerIcon.src = "res/burger-icon.svg"; // Switch back to burger icon
    }
  }
});

// Close the menu when a link is clicked
const navLinks = document.querySelectorAll("#nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    burgerIcon.src = "res/burger-icon.svg"; // Switch back to burger icon
  });
});

// Play sound when the account image is clicked
const prankbrosAudio = new Audio("res/prankbros.mp3");
account.addEventListener("click", () => {
  prankbrosAudio.play();
});
