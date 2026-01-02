const emailInput = document.getElementById('emailname').getElementsByTagName('input')[0];
const passwordInput = document.getElementById('passwordname').getElementsByTagName('input')[0];
const loginButton = document.getElementById('login').getElementsByTagName('button')[0];
const createAccountButton = document.getElementById('createaccount').getElementsByTagName('button')[0];
const messageDisplay = document.getElementById('message');
// Login button click function
loginButton.onclick = function() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if(emailValue===""){
        messageDisplay.textContent="please enter your email or phone number";
        messageDisplay.style.color="red";
    }
    else if(passwordValue===""){
        messageDisplay.textContent="please enter your password";
        messageDisplay.style.color="red";
    }
    else{
        messageDisplay.textContent="logged in successfully";
        messageDisplay.style.color="green";
    }
}


// Create Account button click function
createAccountButton.onclick = function() {
    alert("Create a new account.");
};

// create account button
const createBtn = document.querySelector('.create-btn');

createBtn.addEventListener('click', function() {
    // location
    window.location.href = "../HTML/signup.html"; 
});

// Signup form
const signupForm = document.getElementById('signupForm');

if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        // Inputs 
        const fname = document.getElementById('fname');
        const sname = document.getElementById('sname');
        const email = document.getElementById('mobileEmail');

        // Error spans 
        const nameError = document.getElementById('nameError');
        const surnameError = document.getElementById('surnameError');
        const emailError = document.getElementById('emailError');

        let isValid = true;

        // First Name Validation
        if (fname.value.trim() === "") {
            fname.style.border = "1px solid red";
            nameError.style.display = "none";
            isValid = false;
        } else {
            fname.style.border = "1px solid #dddfe2";
            nameError.style.display = "none";
        }

        // Surname Validation
        if (sname.value.trim() === "") {
            sname.style.border = "1px solid red";
            surnameError.style.display = "block";
            isValid = false;
        } else {
            sname.style.border = "1px solid #dddfe2";
            surnameError.style.display = "none";
        }

        if (isValid) {
            alert("Form submitted successfully!");
        }
    });
}