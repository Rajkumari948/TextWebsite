const maskedInput = document.getElementById('maskedInput');
let actualValue = '';

maskedInput.addEventListener('keydown', function(event) {
    // Prevent the default action of the keypress event
    event.preventDefault();

    // Handle backspace
    if (event.key === 'Backspace') {
        actualValue = actualValue.slice(0, -1);
        maskedInput.value = maskedInput.value.slice(0, -1);
        return;
    }

    // Handle other keys
    if (event.key.length === 1) { // Only handle single character keys
        actualValue += event.key;
        maskedInput.value += '*';
    }

    console.log('Actual Value:', actualValue);
    console.log('Key:', event.key);
});

// To compare the actual value, you can use the `actualValue` variable.