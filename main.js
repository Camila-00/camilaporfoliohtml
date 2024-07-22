document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

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

    // Initialize EmailJS
    emailjs.init('ZKaMSRnzASulnaLgw');

    // Form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.send('service_rq6ym1k', 'template_7wcyd5o', {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function(response) {
            console.log('Success:', response);
            alert('Your message has been sent!');
        }, function(error) {
            console.error('Error:', error);
            alert('Oops! Something went wrong. Please try again.');
        });
    });
});
