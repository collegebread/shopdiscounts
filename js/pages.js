// JavaScript code for scroll event
window.addEventListener("scroll", function() {
  const nav = document.querySelector(".nav.nav--navbar");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// jQuery code for sidebar toggle
$(document).ready(function () {
  $('.dropdown-arrow.sidebar--toggler').click(function () {
    $(this).closest('.sidebar_col-md').toggleClass('active');
  });
});