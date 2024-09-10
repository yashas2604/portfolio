// script.js

// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle');

// Check the user's previous preference from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Add event listener for the toggle button
darkModeToggle.addEventListener('click', () => {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
