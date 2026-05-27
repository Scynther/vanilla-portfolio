// Minimal JS: smooth scrolling, mobile nav toggle, and footer year
document.addEventListener("DOMContentLoaded", () => {
  const visitCount = document.getElementById("visit-count");
  const visitKey = "vanilla-portfolio-visit-count";
  if (visitCount) {
    const currentCount = Number(localStorage.getItem(visitKey) || "0") + 1;
    localStorage.setItem(visitKey, String(currentCount));
    visitCount.textContent = currentCount.toLocaleString();
  }

  // Smooth internal link scrolling
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav ul");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const visible = nav.style.display === "flex";
      nav.style.display = visible ? "none" : "flex";
    });
  }

  // Insert current year in footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
