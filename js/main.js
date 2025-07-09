// Form submission handling via EmailJS SDK
emailjs.init('MxTHoSsS15FTC24oTFDZ5');
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.getElementById('submitSpinner').classList.remove('d-none');

    const templateParams = {
        first_name: document.getElementById('firstName').value,
        last_name:  document.getElementById('lastName').value,
        reply_to:   document.getElementById('email').value,
        message:    document.getElementById('workDetails').value,
        to_email:   'tauhid.offisial.bd.net@gmail.com'
    };

    try {
        await emailjs.send('service_pr8afid', 'template_3jscxlt', templateParams);
        alert('Message sent successfully!');
        contactForm.reset();
    } catch (error) {
        console.error('EmailJS error:', error);
        alert('Failed to send message. Please check console.');
    } finally {
        document.getElementById('submitSpinner').classList.add('d-none');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all elements with animate-text class
document.querySelectorAll('.animate-text').forEach(element => {
    observer.observe(element);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll event for hero text animation
window.addEventListener('scroll', () => {
    const heroText = document.querySelector('.hero h1');
    const heroSubtext = document.querySelector('.hero h2');
    
    if (window.scrollY > 100) {
        heroText.style.opacity = '0';
        heroSubtext.style.opacity = '0';
    } else {
        heroText.style.opacity = '1';
        heroSubtext.style.opacity = '1';
    }
});
