// Data ko browser ki memory (LocalStorage) mein save karne ke liye
function handleRegister() {
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;

    if(email && pass) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPass', pass);
        alert("Registration Successful! Now please Login.");
        showLogin(); // Register hote hi login page dikhao
    } else {
        alert("Please fill all details");
    }
}

function handleLogin() {
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;

    const savedEmail = localStorage.getItem('userEmail');
    const savedPass = localStorage.getItem('userPass');

    if(email === savedEmail && pass === savedPass) {
        alert("Welcome to Facebook!");
        window.location.href = "csharp.html"; // Login successful hone par aapke main page par bhej dega
    } else {
        alert("Invalid Email or Password!");
    }
}

function showLogin() {
    document.getElementById('register-box').style.display = 'none';
    document.getElementById('login-box').style.display = 'block';
}

function showRegister() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('register-box').style.display = 'block';
}