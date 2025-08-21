/* NALOM EDUCATION WEBSITE JAVASCRIPT */

document.addEventListener('DOMContentLoaded', function() {
  initScrollToTop();
  initSmoothScrolling();
  initHeaderScroll();
  initMobileMenu();
  initAnimations();
});

function initScrollToTop() {
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (!scrollTopBtn) return;
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });
  
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('#main-header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });
}

function initHeaderScroll() {
  const header = document.querySelector('#main-header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });
}

function initMobileMenu() {
  const mobileMenuBar = document.querySelector('.mobile-menu-bar');
  if (!mobileMenuBar) return;
  
  mobileMenuBar.addEventListener('click', function() {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      this.style.background = 'transparent';
      this.style.transform = 'rotate(45deg)';
    } else {
      this.style.background = '#333';
      this.style.transform = 'rotate(0deg)';
    }
  });
}

function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll('.program-item, .service-item, .detailed-service-item, .article-item');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Add loading states to buttons
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.cta-button, .quick-link');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      if (this.href && this.href.startsWith('http')) {
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        this.style.pointerEvents = 'none';
        
        setTimeout(() => {
          this.textContent = originalText;
          this.style.pointerEvents = 'auto';
        }, 1000);
      }
    });
  });
  
  // Add scroll class to body
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });
});
