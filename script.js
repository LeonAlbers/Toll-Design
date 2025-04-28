const navMenu = document.getElementById("nav-menu");
const burgerIcon = document.getElementById("burger-icon");

// Toggle between burger and times icon
burgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (burgerIcon.src.includes("burger-icon.svg")) {
    burgerIcon.src = "res/times-icon.svg"; // Switch to times icon
  } else {
    burgerIcon.src = "res/burger-icon.svg"; // Switch back to burger icon
  }
});
