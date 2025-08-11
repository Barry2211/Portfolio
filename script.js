const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});
// Smooth scroll for navbar links
document.querySelectorAll('.menu-list-items a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
//Download button functionality
document.getElementById('getResumeBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Assests/Shakthi Ganeshan QA 2 Page Resume.pdf';
    link.download = 'Shakthi Ganeshan QA 2 Page Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});