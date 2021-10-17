// Navigation JS code
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

// When user clicks on the toggle icon, a class is added to display nav items.
navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

