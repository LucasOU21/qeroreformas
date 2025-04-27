// src/assets/scripts/scrollAnimations.js
import Lenis from "lenis";

/**
 * Scroll-triggered animations that work with Lenis smooth scrolling
 * Adds appear animations to elements as they enter the viewport
 */
document.addEventListener('DOMContentLoaded', () => {
  // Define animation classes
  const ANIMATION_CLASSES = {
    fadeIn: 'animate-fade-in',
    fadeInUp: 'animate-fade-in-up',
    fadeInDown: 'animate-fade-in-down',
    fadeInLeft: 'animate-fade-in-left',
    fadeInRight: 'animate-fade-in-right',
    zoomIn: 'animate-zoom-in',
    slideIn: 'animate-slide-in',
  };

  // Get all elements with data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  // Set up Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If element is in viewport
      if (entry.isIntersecting) {
        const element = entry.target;
        const animation = element.dataset.animate || 'fadeIn';
        const delay = element.dataset.delay || '0';
        
        // Apply animation class
        element.classList.add(ANIMATION_CLASSES[animation]);
        element.style.animationDelay = `${delay}s`;
        
        // Unobserve after animation is applied
        if (!element.dataset.repeat) {
          observer.unobserve(element);
        }
      } else if (entry.target.dataset.repeat) {
        // If element has left viewport and has repeat attribute
        const element = entry.target;
        const animation = element.dataset.animate || 'fadeIn';
        
        // Remove animation class
        element.classList.remove(ANIMATION_CLASSES[animation]);
      }
    });
  }, {
    threshold: 0.1, // Trigger when at least 10% of the element is visible
    rootMargin: '0px 0px -100px 0px' // Adjust this to trigger animations earlier or later
  });
  
  // Observe all animated elements
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Add necessary CSS for animations
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    /* Base styles for animated elements */
    [data-animate] {
      opacity: 0;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: transform, opacity;
    }
    
    /* Animation classes */
    .animate-fade-in {
      animation: fadeIn 0.8s ease forwards;
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease forwards;
    }
    
    .animate-fade-in-down {
      animation: fadeInDown 0.8s ease forwards;
    }
    
    .animate-fade-in-left {
      animation: fadeInLeft 0.8s ease forwards;
    }
    
    .animate-fade-in-right {
      animation: fadeInRight 0.8s ease forwards;
    }
    
    .animate-zoom-in {
      animation: zoomIn 0.8s ease forwards;
    }
    
    .animate-slide-in {
      animation: slideIn 0.8s ease forwards;
    }
    
    /* Animation keyframes */
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeInDown {
      0% { opacity: 0; transform: translateY(-30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeInLeft {
      0% { opacity: 0; transform: translateX(-30px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes fadeInRight {
      0% { opacity: 0; transform: translateX(30px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes zoomIn {
      0% { opacity: 0; transform: scale(0.95); }
      100% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes slideIn {
      0% { opacity: 0; transform: translateY(30px) scale(0.95); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
  `;
  
  document.head.appendChild(styleSheet);
});