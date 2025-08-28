// Smooth scroll to projects section
const viewProjectsBtn = document.getElementById("viewProjectsBtn");
const projectsSection = document.querySelector(".featured-projects");

if (viewProjectsBtn) {
  viewProjectsBtn.addEventListener("click", () => {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });
}

// ==============================
// Contact Form Validation
// ==============================
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "All fields are required!";
      return;
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.textContent = "Please enter a valid email!";
      return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";
    contactForm.reset();
  });
}
