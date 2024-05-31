document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (for demonstration purposes)
    if (username === 'user' && password === 'pass') {
        // Redirect to weather app page
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password.');
    }
});
