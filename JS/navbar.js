const menuBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".mobile-nav a");

function activateMenu() {
  mobileNav.classList.toggle("is-hidden");
  menuBtn.classList.add("is-active");
}

function deactivateMenu() {
  menuBtn.classList.remove("is-active");
  mobileNav.classList.add("is-hidden");
}

menuBtn.addEventListener("click", () => {
  activateMenu();
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".mobile-nav") === null && event.target !== menuBtn) {
    deactivateMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    deactivateMenu();
  });
});