// Personalise these values before publishing. Keep blank until you are ready to share them.
const PROFILE = { email: "", instagram: "", linkedin: "", whatsapp: "" };

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = open ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width;
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.45 }
);

document.querySelectorAll(".skill-fill").forEach((element) => {
  skillObserver.observe(element);
});

const emailButton = document.getElementById("emailBtn");
const contactHint = document.getElementById("contactHint");

if (PROFILE.email) {
  emailButton.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Let's work together")}`;
  contactHint.textContent = PROFILE.email;
} else {
  emailButton.addEventListener("click", (event) => {
    event.preventDefault();
    contactHint.textContent =
      "Open script.js and add your email address in the PROFILE settings to activate this link.";
  });
}
