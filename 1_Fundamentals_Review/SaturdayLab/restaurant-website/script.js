document.addEventListener('DOMContentLoaded', function() {
  // Handle adding new dishes
  var addDishForm = document.getElementById('addDishForm');
  if (addDishForm) {
      addDishForm.addEventListener('submit', function(event) {
          event.preventDefault();
          var newDish = document.getElementById('newDish').value;
          if (newDish) {
              var menuList = document.getElementById('menuList');
              var listItem = document.createElement('li');
              listItem.textContent = newDish;
              menuList.appendChild(listItem);
              document.getElementById('newDish').value = '';
          }
      });
  }

  // Handle contact form submission
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault();
          alert('Thank you for contacting us!');
          // Further form handling logic goes here
      });
  }
});
