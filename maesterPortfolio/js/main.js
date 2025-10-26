// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // If you don't have a backend, open the user's mail client with a prefilled message
    const to = 'esdrasfleury@gmail.com';
    const mailSubject = encodeURIComponent(formData.subject || `Contact from ${formData.name}`);
    const mailBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    const mailtoLink = `mailto:${to}?subject=${mailSubject}&body=${mailBody}`;

    // Open mail client
    window.location.href = mailtoLink;

    // Provide quick UI feedback and reset the form
    alert('Your mail client should open — if it does not, please email esdrasfleury@gmail.com directly.');
    this.reset();
});