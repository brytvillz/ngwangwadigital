// NgwaNgwa Digital — Main JavaScript

// ===== NAVIGATION SCROLL EFFECT =====
const navigation = document.querySelector(".navigation");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (navigation) {
    if (currentScroll > 50) {
      navigation.classList.add("scrolled");
    } else {
      navigation.classList.remove("scrolled");
    }
  }

  lastScroll = currentScroll;
});

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Close menu when clicking a link
  const links = navLinks.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navigation.contains(e.target)) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
}

// ===== ACTIVE PAGE HIGHLIGHTING =====
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinkElements = document.querySelectorAll(".nav-links a");

navLinkElements.forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (
    linkPage === currentPage ||
    (currentPage === "" && linkPage === "index.html") ||
    (currentPage === "index.html" && linkPage === "index.html")
  ) {
    link.classList.add("active");
  }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const navHeight = navigation ? navigation.offsetHeight : 80;
      const targetPosition = target.offsetTop - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ===== FORM HANDLING =====
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.classList.add("loading");
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      const formData = new FormData(contactForm);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.message);

      showSuccessMessage();
      contactForm.reset();
    } catch (error) {
      alert(
        "Sorry, something went wrong. Please try WhatsApp or email instead.",
      );
    } finally {
      submitBtn.classList.remove("loading");
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

function showSuccessMessage() {
  const form = document.querySelector(".contact-form");
  const successDiv = document.createElement("div");
  successDiv.className = "success-message success-checkmark";

  const heading = document.createElement("h3");
  heading.textContent = "Message Sent! ✓";

  const line1 = document.createElement("p");
  line1.textContent = "We will get back to you within 24 hours.";

  const line2 = document.createElement("p");
  line2.textContent = "😊";
  line2.style.cssText = "font-size: 2rem; margin-top: 1rem;";

  successDiv.appendChild(heading);
  successDiv.appendChild(line1);
  successDiv.appendChild(line2);

  successDiv.style.cssText = `
    background: #f0f9f4;
    border: 2px solid #7A8C68;
    border-radius: 12px;
    padding: 32px;
    text-align: center;
    margin-top: 24px;
  `;

  form.parentElement.insertBefore(successDiv, form.nextSibling);
  form.style.display = "none";

  successDiv.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ===== WAITLIST EMAIL CAPTURE =====
const waitlistForm = document.querySelector(".waitlist-form");

if (waitlistForm) {
  waitlistForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailInput = waitlistForm.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Save to localStorage
    let waitlist = JSON.parse(
      localStorage.getItem("virtualWaitressWaitlist") || "[]",
    );

    if (!waitlist.includes(email)) {
      waitlist.push(email);
      localStorage.setItem("virtualWaitressWaitlist", JSON.stringify(waitlist));

      // Show success
      const submitBtn = waitlistForm.querySelector("button");
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Added! ✓";
      submitBtn.style.background = "#7A8C68";
      emailInput.value = "";

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = "";
      }, 3000);
    } else {
      alert("You're already on the waitlist!");
    }
  });
}

// ===== WHATSAPP LINK HANDLER =====
function openWhatsApp(message = "") {
  const phoneNumber = "2347076077265";
  const encodedMessage = encodeURIComponent(
    message || "Hi NgwaNgwa Digital, I need help with...",
  );
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
}

// Add WhatsApp click handlers
document.querySelectorAll(".whatsapp-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const message = btn.dataset.message || "";
    openWhatsApp(message);
  });
});

// ===== LIVE DEMO LINK =====
document.querySelectorAll(".demo-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    // Track demo clicks (can add analytics here)
  });
});

// ===== UTILITY FUNCTIONS =====
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

// ===== FOUNDER CARD FLIP (click/tap toggle) =====
const flipCard = document.querySelector('.flip-card');
if (flipCard) {
  flipCard.addEventListener('click', () => {
    flipCard.classList.toggle('flipped');
  });
}

// ===== DELIVERY CAROUSEL =====
(function () {
  const wrapper = document.querySelector(".delivery-carousel-wrapper");
  if (!wrapper) return;

  const track = document.getElementById("deliveryTrack");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");
  const dots = document.querySelectorAll(".carousel-dot");
  const totalSlides = dots.length;
  let current = 0;
  let autoplayTimer = null;

  function goTo(index) {
    current = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  function startAutoplay() {
    autoplayTimer = setInterval(() => goTo(current + 1), 10000);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }

  prevBtn.addEventListener("click", () => { stopAutoplay(); goTo(current - 1); startAutoplay(); });
  nextBtn.addEventListener("click", () => { stopAutoplay(); goTo(current + 1); startAutoplay(); });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => { stopAutoplay(); goTo(i); startAutoplay(); });
  });

  wrapper.addEventListener("mouseenter", stopAutoplay);
  wrapper.addEventListener("mouseleave", startAutoplay);

  // Touch/swipe support
  let touchStartX = 0;
  track.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { stopAutoplay(); goTo(diff > 0 ? current + 1 : current - 1); startAutoplay(); }
  }, { passive: true });

  startAutoplay();
})();

// ===== INITIALIZE =====
document.addEventListener("DOMContentLoaded", () => {
  // Add page load animation to hero
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.classList.add("page-load-fade");
  }
});
