// ===========================
// ROTMANS v2.0
// ===========================

// ---------- MENU ----------

const menuButton = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

    menuButton.textContent =
        navigation.classList.contains("active")
            ? "✕"
            : "☰";

});

// ---------- CLOSE MENU ----------

document.querySelectorAll(".navigation a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

        menuButton.textContent = "☰";

    });

});

// ---------- SMOOTH SCROLL ----------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ---------- SCROLL ANIMATION ----------

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ---------- ACTIVE MENU ----------

const navLinks = document.querySelectorAll(".navigation a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop-150;

        if(scrollY >= top){

            current = section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active-link");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active-link");

        }

    });

});