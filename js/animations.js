// NgwaNgwa Digital — Scroll Animation Controller

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");

      // Optional: unobserve after animation to improve performance
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
}

// ===== STAGGER ANIMATION HELPER =====
function initStaggerAnimations() {
  const staggerContainers = document.querySelectorAll(".stagger-container");

  staggerContainers.forEach((container) => {
    const children = container.querySelectorAll(".animate-on-scroll");

    children.forEach((child, index) => {
      child.style.transitionDelay = `${index * 0.1}s`;
    });
  });
}

// ===== PARALLAX EFFECT (Optional Enhancement) =====
function initParallax() {
  const parallaxElements = document.querySelectorAll("[data-parallax]");

  if (parallaxElements.length === 0) return;

  const handleParallax = () => {
    parallaxElements.forEach((element) => {
      const speed = element.dataset.parallax || 0.5;
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.style.transform = `translateY(${rate}px)`;
      }
    });
  };

  window.addEventListener("scroll", debounce(handleParallax, 10));
}

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

// Initialize counters when they come into view
function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("counted")
        ) {
          const target = parseInt(entry.target.dataset.counter);
          animateCounter(entry.target, target);
          entry.target.classList.add("counted");
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

// ===== TYPING EFFECT (Optional) =====
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// ===== UTILITY: Debounce =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== INITIALIZE ALL ANIMATIONS =====
document.addEventListener("DOMContentLoaded", () => {
  // Wait a bit for page to settle
  setTimeout(() => {
    initScrollAnimations();
    initStaggerAnimations();
    initCounters();
    // initParallax(); // Uncomment if needed
  }, 100);
});

// ===== EXPORT FOR USE IN OTHER FILES =====
window.NgwaNgwaAnimations = {
  initScrollAnimations,
  initStaggerAnimations,
  animateCounter,
  typeWriter,
};
