// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Initialize Typed.js
new Typed(".typing-text", {
  strings: [
    "Full Stack Developer",
    "Python Developer",
    "Web Developer",
    "UI/UX Designer",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(10, 25, 47, 0.95)";
    navbar.style.boxShadow = "0 10px 30px -10px rgba(2,12,27,0.7)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
});

// Update the form submission handling
const form = document.querySelector(".contact-form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: form.querySelector('input[type="text"]').value,
    email: form.querySelector('input[type="email"]').value,
    message: form.querySelector("textarea").value,
  };

  try {
    // Here you would typically send the data to your backend
    // For now, we'll just log it and show a success message
    console.log("Form Data:", formData);

    // Show success message
    alert("Thank you for your message! I will get back to you soon.");
    form.reset();

    // You can implement actual form submission like this:
    /*
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            alert("Thank you for your message! I will get back to you soon.");
            form.reset();
        } else {
            throw new Error('Failed to send message');
        }
        */
  } catch (error) {
    console.error("Error:", error);
    alert("Sorry, there was an error sending your message. Please try again.");
  }
});

// Add scroll progress indicator
window.addEventListener("scroll", () => {
  const scrollProgress = document.querySelector(".scroll-progress");
  const scrolled =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  scrollProgress.style.width = `${scrolled}%`;
});

// Back to top button
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme toggle
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const icon = themeToggle.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

// Loading animation
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 1000);
});
