const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  console.log(hamburger.innerHTML);

  if (hamburger.innerHTML === "☰") {
    hamburger.innerHTML = "&times;";
  } else {
    hamburger.innerHTML = "☰";
  }
});
