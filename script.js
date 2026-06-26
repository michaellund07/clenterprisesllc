/* =====================================================
   CL ENTERPRISES, LLC — SCRIPT
   Minimal vanilla JS: mobile nav, scroll-reveal, footer year.
   ===================================================== */

(function () {
  "use strict";

  /* ---- Mobile navigation toggle ---- */
  var navToggle = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("main-nav-mobile");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close mobile nav when a link is tapped
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Scroll-reveal fade-ins ---- */
  var fadeEls = document.querySelectorAll(".fade-in");

  if ("IntersectionObserver" in window && fadeEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: reveal everything immediately
    fadeEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---- Defensive image handling ----
     If a placeholder/content image fails to load, hide the broken
     image element so the container's fallback background shows
     cleanly instead of a broken-image icon or blank box. */
  document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener("error", function () {
      img.style.display = "none";
      img.closest("figure, .about-media, .industry-tile")?.classList.add("img-load-failed");
    });
  });
})();
