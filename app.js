let mainNav = document.querySelector('#js-menu');
let navBarToggle = document.querySelector('#js-navbar-toggle');
let fName = document.querySelector('#f-name');
let lName = document.querySelector('#l-name');
let number = document.querySelector('#number');
let email = document.querySelector('#email');
let message = document.querySelector('#message');

// Navigation JS code
// When user clicks on the toggle icon, a class is added to display nav items.
navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

// Change the placeholder text on input fields when clicked
fName.addEventListener('click', function () {
  fName.placeholder = 'Entering name...';
});

lName.addEventListener('click', function () {
  lName.placeholder = 'Entering surname...';
});

number.addEventListener('click', function () {
  number.placeholder = 'Entering phone number...';
});

email.addEventListener('click', function () {
  email.placeholder = 'Entering email...'
});

message.addEventListener('click', function () {
  message.placeholder = 'Entering message...'
});