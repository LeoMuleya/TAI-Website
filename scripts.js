document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
      nav.classList.toggle('active');
  });
});

function showDonationModal() {
  document.getElementById('donation-modal').style.display = 'block';
}

function closeDonationModal() {
  document.getElementById('donation-modal').style.display = 'none';
}

/*---------javascript for toggle menu-----------*/

  var navLinks = document.getElementById("navLinks");
  function showMenu() {
    navLinks.style.right = "0";
  }
  function hideMenu() {
    navLinks.style.right = "-200px";
  }
/*---------------------------Our Slidshow -------------------*/

$(document).ready(function() {
  $('.slider').slick({
      dots: true,  // Enable dots for navigation
      arrows: false, // Hide arrows
      infinite: true,
      speed: 800,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false
  });
});

//--------------------------- Magazine 
document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');

  stars.forEach(star => {
      star.addEventListener('click', () => {
          const value = star.getAttribute('data-value');
          stars.forEach(s => {
              s.classList.remove('selected');
              if (s.getAttribute('data-value') <= value) {
                  s.classList.add('selected');
              }
          });
      });
  });
});
