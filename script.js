// Personalise these public contact details before launch. Leave a value blank until ready to share it.
const PROFILE = {
  email: "",
  instagram: "",
  linkedin: "",
  whatsapp: ""
};

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
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
}

if ("IntersectionObserver" in window) {
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

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

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

  document.querySelectorAll(".skill-fill").forEach((element) => skillObserver.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
  document.querySelectorAll(".skill-fill").forEach((element) => {
    element.style.width = element.dataset.width || "0";
  });
}

const emailDisplay = document.getElementById("contactEmailDisplay");
if (emailDisplay && PROFILE.email) {
  emailDisplay.textContent = PROFILE.email;
}

const emailButton = document.getElementById("emailBtn");
const contactHint = document.getElementById("contactHint");
if (emailButton && contactHint) {
  if (PROFILE.email) {
    emailButton.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Let's work together")}`;
    contactHint.textContent = PROFILE.email;
  } else {
    emailButton.addEventListener("click", (event) => {
      event.preventDefault();
      contactHint.textContent = "Add your public email address in script.js to activate this link.";
    });
  }
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.getElementById("formStatus");
    if (!PROFILE.email) {
      status.textContent = "The form is ready. Add your public email address in PROFILE at the top of script.js to enable email sending.";
      return;
    }

    const formData = new FormData(contactForm);
    const subject = `Portfolio enquiry: ${formData.get("service")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Reply email: ${formData.get("email")}`,
      `Interested in: ${formData.get("service")}`,
      "",
      "Message:",
      formData.get("message")
    ].join("\n");

    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Your email app should open with the enquiry prepared. Please review and send it there.";
  });
}
