document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('backend.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes('Invalid login details')) {
            window.location.href = 'invalid.html'; // Redirect to invalid.html
        } else {
            alert(data); // Display the response from the server
        }
    });
});