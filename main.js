const mobileMenuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});




const contactForm = document.getElementById('contact-form');
const nameInput = document.querySelector('#contact-form input[type="text"]');
const emailInput = document.querySelector('#contact-form input[type="email"]');
const messageInput = document.querySelector('#contact-form textarea');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validateForm()) {
        // Simulate form submission (replace with actual submission logic)
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});

function validateForm() {
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}



const backToTopButton = document.getElementById('back-to-top');

backToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});




// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu on smaller screens
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
});