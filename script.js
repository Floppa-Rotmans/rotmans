// ===========================
// ROTMANS v4
// Script
// ===========================

// ---------- MENU ----------

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {

        burger.innerHTML = "✕";

    } else {

        burger.innerHTML = "☰";

    }

});

// Закрытие меню при выборе пункта

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        burger.innerHTML = "☰";

    });

});

// ---------- HEADER ----------

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,5,5,.92)";

    } else {

        header.style.background = "rgba(5,5,5,.55)";

    }

});

// ---------- HERO ----------

const hero = document.querySelector(".hero-content");

window.addEventListener("load", () => {

    hero.style.opacity = "1";

    hero.style.transform = "translateY(0)";

});

// ---------- SCROLL ----------

const scrollText = document.querySelector(".scroll");

let direction = 1;

setInterval(() => {

    scrollText.style.transform =
        `translateY(${direction * 8}px)`;

    direction *= -1;

}, 900);

// ---------- BUTTON ----------

const button = document.querySelector(".hero-button");

button.addEventListener("mouseenter", () => {

    button.style.boxShadow =
        "0 0 30px rgba(141,16,24,.45)";

});

button.addEventListener("mouseleave", () => {

    button.style.boxShadow = "none";

});

// ---------- LANGUAGE ----------

const lang = document.getElementById("langBtn");

lang.addEventListener("click", () => {

    alert("Language system will be added in ROTMANS v5.");

});// ---------- SPLASH ----------

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("loader-hide");

    },1800);

});