document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';

    // Name
    if (name === '') {
      nameError.textContent = 'Name is required.';
      isValid = false;
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = 'Invalid email format.';
      isValid = false;
    }

    // Message
    if (message === '') {
      messageError.textContent = 'Message is required.';
      isValid = false;
    }

    // Final check
    if (isValid) {
      successMessage.textContent = 'Form submitted successfully!';
    }
  });
});
