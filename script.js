// script.js
document.addEventListener('DOMContentLoaded', () => {
   // Security Initialization
   const securitySystem = {
       attempts: 0,
       maxAttempts: 3,
       
       initialize() {
           this.preventDevTools();
           this.preventInspect();
           this.monitorBehavior();
           this.initializeEncryption();
       },

       preventDevTools() {
           // Detect DevTools
           let devtools = function() {};
           devtools.toString = function() {
               this.handleSecurityBreach();
               return '';
           };

           console.log(devtools);
           setInterval(() => {
               console.clear();
               console.log(devtools);
           }, 100);
       },

       preventInspect() {
           document.addEventListener('contextmenu', (e) => e.preventDefault());
           document.addEventListener('keydown', (e) => {
               if ((e.ctrlKey && e.shiftKey && e.key === 'I') || 
                   (e.ctrlKey && e.shiftKey && e.key === 'J') ||
                   (e.ctrlKey && e.key === 'U')) {
                   e.preventDefault();
                   this.handleSecurityBreach();
               }
           });
       },

       monitorBehavior() {
           let suspiciousActions = 0;
           document.addEventListener('mousemove', (e) => {
               if (e.clientY < 20) suspiciousActions++;
               if (suspiciousActions > 3) this.handleSecurityBreach();
           });
       },

       handleSecurityBreach() {
           this.attempts++;
           if (this.attempts >= this.maxAttempts) {
               document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:black;color:red;font-size:48px;">Try Harder</div>';
               setTimeout(() => {
                   window.location.href = 'about:blank';
               }, 2000);
           }
       },

       initializeEncryption() {
           // Basic XOR encryption for data
           this.encryptionKey = Math.random().toString(36).substring(7);
       }
   };

   // Initialize Security
   securitySystem.initialize();

   // Smooth Scrolling
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();
           document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth'
           });
       });
   });

   // Form Handling
   const contactForm = document.querySelector('#contact-form');
   if (contactForm) {
       contactForm.addEventListener('submit', function(e) {
           e.preventDefault();
           
           // Get form data
           const formData = new FormData(this);
           const data = Object.fromEntries(formData);
           
           // Basic validation
           if (!data.email.includes('@')) {
               alert('Please enter a valid email');
               return;
           }

           // Send to email
           window.location.href = `mailto:ThomasStory716@hotmail.com?subject=Website Inquiry&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AMessage: ${data.message}`;
       });
   }

   // Animation on Scroll
   const animateOnScroll = () => {
       const elements = document.querySelectorAll('.animate-on-scroll');
       elements.forEach(element => {
           const elementTop = element.getBoundingClientRect().top;
           const windowHeight = window.innerHeight;
           if (elementTop < windowHeight * 0.75) {
               element.classList.add('animate-fade-in');
           }
       });
   };

   window.addEventListener('scroll', animateOnScroll);

   // Mobile Menu
   const mobileMenuButton = document.querySelector('#mobile-menu-button');
   const mobileMenu = document.querySelector('#mobile-menu');
   
   if (mobileMenuButton && mobileMenu) {
       mobileMenuButton.addEventListener('click', () => {
           mobileMenu.classList.toggle('hidden');
       });
   }

   // Stats Counter Animation
   const animateStats = () => {
       const stats = document.querySelectorAll('.stat-number');
       stats.forEach(stat => {
           const target = parseInt(stat.getAttribute('data-target'));
           const increment = target / 100;
           let current = 0;

           const updateStat = () => {
               if (current < target) {
                   current += increment;
                   stat.textContent = Math.ceil(current);
                   requestAnimationFrame(updateStat);
               } else {
                   stat.textContent = target;
               }
           };

           updateStat();
       });
   };

   // Initialize animations
   animateOnScroll();
   animateStats();
});

// Performance Monitoring
const performance = {
   metrics: {},
   
   startTracking(metricName) {
       this.metrics[metricName] = Date.now();
   },

   endTracking(metricName) {
       if (this.metrics[metricName]) {
           const duration = Date.now() - this.metrics[metricName];
           console.log(`${metricName}: ${duration}ms`);
           return duration;
       }
       return 0;
   }
};

// Initialize performance tracking
performance.startTracking('pageLoad');
window.onload = () => {
   performance.endTracking('pageLoad');
};
