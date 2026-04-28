// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
  document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
});

// Close on link click
document.querySelectorAll(".nav-item").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    document.body.style.overflow = "";
  });
});
