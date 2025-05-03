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

// Automatically show which section is active
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

const observer = new IntersectionObserver(
  (entries) => {
    // Sichtbare Einträge filtern
    const visibleEntries = entries.filter((entry) => entry.isIntersecting);

    if (visibleEntries.length > 0) {
      // Die sichtbarste Sektion finden
      const mostVisible = visibleEntries.reduce((prev, current) =>
        prev.intersectionRatio > current.intersectionRatio ? prev : current
      );

      const id = mostVisible.target.getAttribute("id");
      const activeLink = document.querySelector(`.nav-item[href="#${id}"]`);

      // Aktive Klasse aktualisieren
      navItems.forEach((item) => item.classList.remove("active"));
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  },
  {
    threshold: 0.6, // 50% der Sektion sichtbar
  }
);

sections.forEach((section) => observer.observe(section));
