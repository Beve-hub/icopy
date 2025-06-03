document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Form submitted successfully!\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});