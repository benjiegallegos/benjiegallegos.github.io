/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Navbar Animations ----
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    
    function changeActiveLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", changeActiveLink);
});

// Scroll Buttons----
document.querySelector(".scroll-down a").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("skills").scrollIntoView({ behavior: "smooth", block: "center" });
  });
  
  document.querySelector(".scroll-to-projects").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "center" });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.createElement("div");
    backToTop.classList.add("back-to-top");
    backToTop.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Section Project
function toggleCard(card) {
    card.classList.toggle("active");
}
