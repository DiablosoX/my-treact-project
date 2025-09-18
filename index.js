document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".btn__menu");
  const menuBackdrop = document.querySelector(".menu__backdrop");

  function openMenu() {
    menuBackdrop.classList.add("menu--open");
    document.body.classList.add("no-scroll"); // Optional: prevent scrolling when menu is open
  }

  function closeMenu() {
    menuBackdrop.classList.remove("menu--open");
    document.body.classList.remove("no-scroll");
  }

  menuBtn.addEventListener("click", openMenu);

  const closeBtn = document.querySelector(".btn__menu--close");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  // Close menu when any menu link is clicked
  document.querySelectorAll(".menu__link").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
});
