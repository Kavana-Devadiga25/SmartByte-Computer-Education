/* ================= SMARTBYTE WEBSITE JS ================= */

// Run after page loads
document.addEventListener("DOMContentLoaded", () => {

    /* ===== Sticky Header Shadow on Scroll ===== */
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    /* ===== Smooth Scroll for Navigation Links ===== */
    const navLinks = document.querySelectorAll("a[href^='#']");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    /* ===== Button Hover Micro Interaction ===== */
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "translateY(-2px)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translateY(0)";
        });
    });

    /* ===== Scroll Reveal Animation ===== */
    const revealElements = document.querySelectorAll(
        ".course-card, .hero-highlight, .about-content, .contact-box"
    );

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 80) {
                el.classList.add("reveal");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // initial call

    /* ===== CTA Button Action (Call Now) ===== */
    const callBtn = document.querySelector("a[href^='tel:']");
    if (callBtn) {
        callBtn.addEventListener("click", () => {
            console.log("User clicked Call Now button");
        });
    }

});
