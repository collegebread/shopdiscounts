function toggleNav() {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("responsive");
  const navToggle = document.querySelector('.nav-toggle');

  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

navToggle.addEventListener('click', function() {
  navLinks.classList.toggle('show-links');
});

function toggleNav() {
  // Toggle the .show-menu class on the body element
  document.body
}

//Scroll the first row of cards right or left 
const cardRow = document.querySelector('.card-row');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

// Attach click event listeners to the scroll buttons
scrollLeftBtn.addEventListener('click', () => {
  cardRow.scrollLeft -= 300;
});

scrollRightBtn.addEventListener('click', () => {
  cardRow.scrollLeft += 300;
});