document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('inputField');
    const displayKey = document.getElementById('key');

    inputField.addEventListener('keyup', function(event) {
        //event.preventDefault();
        displayKey.textContent = event.key;
    });
});