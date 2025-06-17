document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Testimonial slider logic
  const testimonials = document.querySelectorAll(".testimonial");
  let current = 0;

  const showTestimonial = (index) => {
    testimonials.forEach((t, i) => {
      t.classList.toggle("active", i === index);
    });
  };

  const nextBtn = document.getElementById("nextTestimonial");
  const prevBtn = document.getElementById("prevTestimonial");

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      current = (current + 1) % testimonials.length;
      showTestimonial(current);
    });

    prevBtn.addEventListener("click", () => {
      current = (current - 1 + testimonials.length) % testimonials.length;
      showTestimonial(current);
    });

    // Initial display
    showTestimonial(current);
  }

  // FAQ toggle logic
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.classList.contains("open");

      // Close all
      document.querySelectorAll(".faq-answer").forEach((el) => {
        el.classList.remove("open");
        el.style.maxHeight = null;
      });

      document.querySelectorAll(".faq-question").forEach((el) => {
        el.classList.remove("active");
      });

      // Open selected
      if (!isOpen) {
        answer.classList.add("open");
        question.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
