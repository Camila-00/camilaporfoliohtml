document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Initialize EmailJS
    (function() {
        emailjs.init('ZKaMSRnzASulnaLgw'); // Replace 'YOUR_USER_ID' with your actual EmailJS User ID
    })();

    themeToggle.addEventListener('click', function (event) {
        event.preventDefault();
        body.classList.toggle('light-mode');

        if (body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal About Me section on scroll
    window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY;
        var aboutOffset = document.getElementById('about').offsetTop - window.innerHeight / 2;
        if (scrollTop >= aboutOffset) {
            document.getElementById('about').classList.add('reveal');
        }
    });

    // Form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_rq6ym1k', 'template_7wcyd5o', this)
            .then(function(response) {
                alert('Your message has been sent successfully!');
                document.getElementById('contact-form').reset(); // Reset form fields
            }, function(error) {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
            });
    });
});
