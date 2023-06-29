// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    var navbarPlaceholder = document.getElementById("navbar-placeholder");
    
    //mandamos a llamar el html  que tiene el navBar
    fetch("../plantillas/navbar.html")
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        navbarPlaceholder.innerHTML = html;
      });
  });
  