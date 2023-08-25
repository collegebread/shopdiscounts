//change navbar bg-color on scroll
window.addEventListener("scroll", function() {
    const nav = document.querySelector(".nav.nav--navbar");
    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });