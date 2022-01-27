const navToggle = document.querySelector(".nav-toggle");
const navContainer = document.querySelector(".nav-container");
const navLinks = document.querySelectorAll(".nav-link");
const btnGrop = document.querySelectorAll(".btn");
navToggle.addEventListener("click", function () {
  navContainer.classList.toggle("show");
  console.log("hello world");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navContainer.classList.toggle("show");
  });

});

// PRELOADER EFFECT
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
});

// on scroll btn
const mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", topFunction);
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
