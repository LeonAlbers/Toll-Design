// Redirection to the Gallery
function galleryRedirect() {
  window.location.href = "gallery.html";
}

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
