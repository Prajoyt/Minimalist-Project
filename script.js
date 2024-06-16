document.getElementById('mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    this.classList.toggle('toggle');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Remove active background color from all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.backgroundColor = '';
        });

        // Add active background color to the target section
        targetSection.style.backgroundColor = '#e0f7fa';

        // Close the mobile menu after clicking a link
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            document.getElementById('mobile-menu').classList.remove('toggle');
        }
    });
});
