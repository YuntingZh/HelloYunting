const sections = document.querySelectorAll('section'); // Sections in your page
const progressItems = document.querySelectorAll('.progress-item'); // TOC items

window.addEventListener('scroll', () => {
    let currentSection = '';

    // Check which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Add active class to the corresponding TOC item
    progressItems.forEach(item => {
        const section = item.getAttribute('data-section').replace('#', '');

        if (section === currentSection) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

<script>
    window.onload = function() {
        // Select the section and image
        var section = document.querySelector('.animated-section');
        var heroImage = document.querySelector('.hero-image');

        // Add the 'active' class to slide the content up
        section.classList.add('active');

        // Add the 'fade-out' class to fade out the background image after a short delay
        setTimeout(function() {
            heroImage.classList.add('fade-out');
        }, 500); // Delays the fade-out slightly after the content slides up
    };
</script>
