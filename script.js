console.log("Portfolio website loaded successfully!");

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigation clicked:", link.textContent);

    });

});