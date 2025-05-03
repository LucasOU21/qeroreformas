// src/assets/scripts/navbarScrollIntegration.js
import Lenis from "lenis";

/**
 * Navbar integration with Lenis smooth scrolling
 * Handles smooth scrolling to sections when navbar links are clicked
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lenis for smooth scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out-expo
    orientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false
  });

  // Animation loop
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  // Start the animation loop
  requestAnimationFrame(raf);

  // Get all navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  // Add click event listener to each navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get the target section
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          mobileMenuButton?.setAttribute('aria-expanded', 'false');
          
          const hamburgerIcon = mobileMenuButton?.querySelector('svg:nth-child(1)');
          const closeIcon = mobileMenuButton?.querySelector('svg:nth-child(2)');
          
          if (hamburgerIcon && closeIcon) {
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
          }
        }
        
        // Scroll to the target section smoothly
        lenis.scrollTo(targetSection, {
          offset: -80, // Offset to account for fixed navbar height
          duration: 1.2,
          immediate: false
        });
      }
    });
  });

  // Add active class to the current section's navbar link
  function updateActiveLink() {
    const scrollPosition = window.scrollY;
    
    // Get all sections
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to current section link
        const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }

  // Update active link on scroll
  window.addEventListener('scroll', updateActiveLink);
  
  // Initial update of active link
  updateActiveLink();
});