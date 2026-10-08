/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 700);

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealSections = document.querySelectorAll(".section-reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealSections.forEach((section) => {
    revealObserver.observe(section);
});


/* =====================================================
   HERO PARALLAX
===================================================== */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        const movement = scrollPosition * 0.15;

        heroImage.style.transform =
            `scale(1.05) translateY(${movement}px)`;

    }

});


/* =====================================================
   LEGACY IMAGE MOVEMENT
===================================================== */

const legacyImage = document.querySelector(".legacy-image");

window.addEventListener("scroll", () => {

    if (!legacyImage) return;

    const section = legacyImage.closest(".legacy-section");

    const rect = section.getBoundingClientRect();

    const viewportHeight = window.innerHeight;

    if (
        rect.top < viewportHeight &&
        rect.bottom > 0
    ) {

        const progress =
            (viewportHeight - rect.top) /
            (viewportHeight + rect.height);

        const movement = (progress - 0.5) * 35;

        legacyImage.style.transform =
            `scale(1.04) translateY(${movement}px)`;

    }

});


/* =====================================================
   IMAGE HOVER EFFECT
===================================================== */

const imageContainers = document.querySelectorAll(
    ".story-image, .duality-image, .legend-image"
);

imageContainers.forEach((container) => {

    container.addEventListener("mouseenter", () => {

        const image = container.querySelector("img");

        if (image) {
            image.style.transform = "scale(1.04)";
        }

    });

    container.addEventListener("mouseleave", () => {

        const image = container.querySelector("img");

        if (image) {
            image.style.transform = "scale(1)";
        }

    });

});


/* =====================================================
   MOUSE MOVEMENT — DESKTOP ONLY
===================================================== */

if (window.innerWidth > 900) {

    const hero = document.querySelector(".hero");

    hero.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 8;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 8;

        heroImage.style.transform =
            `scale(1.05) translate(${x}px, ${y}px)`;

    });

}


/* =====================================================
   REDUCE MOTION SUPPORT
===================================================== */

const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)");

if (prefersReducedMotion.matches) {

    document.documentElement.style.scrollBehavior = "auto";

}


/* =====================================================
   CONSOLE
===================================================== */

console.log(
    "حاتم الطائي — حين يتحول الإنسان إلى رمز."
);