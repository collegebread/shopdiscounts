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
  var listItems = document.querySelectorAll('.list-item');
  var showAllLink = document.querySelector('.show-all');
  
  for (var i = 5; i < listItems.length; i++) {
    listItems[i].style.display = "none";
  }
  
  showAllLink.addEventListener('click', function() {
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].style.display = "block";
    }
    showAllLink.style.display = "none";
  });
  
  
  //--expands show-all -->
  var showAll = document.querySelector('.show-all');
  var listItems = document.querySelectorAll('.list-item');
  
  showAll.addEventListener('click', function(e) {
  e.preventDefault();
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.display = 'block';
  }
  showAll.style.display = 'none';
  }); 
  
  //totals list items 
  var listItems = document.querySelectorAll('.list-item');
  var showAllLink = document.querySelector('.show-all');
  var count = 0;
  
  for (var i = 0; i < listItems.length; i++) {
    count++;
  }
  showAllLink.innerHTML = "Show All (" + count + ")";
  window.addEventListener("scroll", revealCouponStack);
  
  // function revealCouponStack() {
  //   const couponStacks = document.querySelectorAll(".coupon-stack");
    
  //   couponStacks.forEach((stack) => {
  //     const stackTop = stack.offsetTop;
  //     const stackHeight = stack.clientHeight;
  //     const windowHeight = window.innerHeight;
  //     const scrollY = window.scrollY;
      
  //     if (scrollY > stackTop - windowHeight + stackHeight / 3) {
  //       stack.classList.add("show");
  //     }
  //   });
  // }
  
  // Initial check in case some stacks are already visible on page load
  // revealCouponStack();
  
  window.addEventListener("scroll", function() {
    const nav = document.querySelector(".nav.nav--navbar");
    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });