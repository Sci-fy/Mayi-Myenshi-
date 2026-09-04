// ----------------------------------------------------
// EDIT THIS: paste your Google Form link between the quotes
// ----------------------------------------------------
const HIRE_FORM_URL = "https://forms.gle/PASTE-YOUR-FORM-ID-HERE";

document.getElementById("hireBtn").setAttribute("href", HIRE_FORM_URL);

// mobile nav toggle
const navToggle = document.getElementById("navToggle");
const siteNav = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  siteNav.classList.toggle("open");
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => siteNav.classList.remove("open"));
});

// footer year
document.getElementById("year").textContent = new Date().getFullYear();
