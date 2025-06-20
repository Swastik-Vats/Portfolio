// Dark Mode Toggle with Local Storage - Enhanced Version
function initializeDarkMode() {
  const toggleBtn = document.getElementById("mode-toggle");
  const body = document.body;
  
  if (!toggleBtn) {
    console.error("Dark mode toggle button not found!");
    return;
  }

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  
  // Set initial state
  if (savedTheme === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️";
    toggleVideos(true);
  } else {
    body.classList.remove("dark");
    toggleBtn.textContent = "🌙";
    toggleVideos(false);
  }

  // Toggle theme on button click
  toggleBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleVideos(isDark);
  });
}

// Helper function to toggle videos
function toggleVideos(isDark) {
  const lightVideo = document.getElementById("light-video");
  const darkVideo = document.getElementById("dark-video");
  
  if (lightVideo && darkVideo) {
    lightVideo.style.display = isDark ? "none" : "block";
    darkVideo.style.display = isDark ? "block" : "none";
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeDarkMode();
  
  // Rest of your existing initialization code...
  new Typed('#typed', {
    strings: ['Developer', 'AI Enthusiast', 'Problem Solver', 'Open Source Contributor'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Contact Form
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const status = document.getElementById('form-status');
      if (status) status.innerText = "Sending...";
      
      // Replace with your EmailJS code
      setTimeout(() => {
        if (status) status.innerText = "Message sent successfully!";
        form.reset();
      }, 1000);
    });
  }

  // Video Background - Ensure videos play on mobile when allowed
  const lightVideo = document.getElementById('light-video');
  const darkVideo = document.getElementById('dark-video');
  
  if (lightVideo && darkVideo) {
    const playVideos = () => {
      lightVideo.play().catch(e => console.log("Video play prevented:", e));
      darkVideo.play().catch(e => console.log("Video play prevented:", e));
    };
    
    document.body.addEventListener('click', playVideos, { once: true });
  }

  // Highlight current page in navigation
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (currentPage === linkPage || 
        (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Remove all card switching logic since all cards are visible
  const cards = document.querySelectorAll('.flash-card');
  
  // Just animate the entrance of cards
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Optional: Add simple hover effect
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.25)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
    });
  });
});