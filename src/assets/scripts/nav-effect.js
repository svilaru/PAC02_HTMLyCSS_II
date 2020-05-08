var navbar = document.getElementById('menu');
if (navbar) {
  window.onscroll = function () {
    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
      navbar.classList.remove('e-header-index__navbar');
    } else {
      navbar.classList.add('e-header-index__navbar');
    }
  };
}
