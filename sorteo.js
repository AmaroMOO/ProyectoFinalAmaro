document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    setTimeout(function() {
        document.getElementById('registration-form').reset();
        document.getElementById('registration-form').style.display = 'none';
        document.getElementById('confirmation-message').style.display = 'block';
    }, 1000);
});
