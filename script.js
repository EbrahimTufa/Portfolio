document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate a form submission
    alert(`Thank you, ${name}. Your message has been sent!`);

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
