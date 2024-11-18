document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for validation
    let isValid = true;

    // Validate Name
    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        name.classList.add('is-invalid');
        isValid = false;
    } else {
        name.classList.remove('is-invalid');
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    if (!emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Validate Message
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        message.classList.add('is-invalid');
        isValid = false;
    } else {
        message.classList.remove('is-invalid');
    }

    // If all fields are valid, submit the form or show a success message
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }
});