document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector(".login-box button"); // Log in button
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");

    loginBtn.addEventListener("click", () => {
        const email = emailInput.value;
        const password = passwordInput.value;

        if (email === "" || password === "") {
            message.style.color = "red";
            message.innerText = "Please enter both Email and Password";
        } else {
            if (email === "pk6635886@gmail.com" && password === "gunjan") {
                message.style.color = "green";
                message.innerText = "Login successful";

                localStorage.setItem("userEmail", email);

                setTimeout(() => {
                    window.location.href = "../HTML/facebook.html";
                }, 1500);
            } else {
                message.style.color = "red";
                message.innerText = "Invalid Email or Password";
            }
        }
    });

    passwordInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            loginBtn.click();
        }
    });

    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
        emailInput.value = savedEmail;
    }
});

 document.addEventListener("DOMContentLoaded", () => {
    const signupbtn = document.getElementById("signupbtn");
    const message = document.getElementById("message");

    signupbtn.addEventListener("click", (event) => {
        event.preventDefault(); 

        
        const fname = document.getElementById("fname").value.trim();
        const lname = document.getElementById("lname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
       
        const gender = document.querySelector('input[name="gender"]:checked');

    
        if (fname === "" || lname === "") {
            message.innerText = "Please Enter your name";
            message.style.color = "red";
        } 
        else if (email === "") {
            message.innerText = "Please Enter your email or mobile number.";
            message.style.color = "red";
        } 
        else if (!gender) {
            message.innerText = "please select your gender.";
            message.style.color = "red";
        } 
        else if (password.length < 6) {
            message.innerText = "Password must be at least 6 characters.";
            message.style.color = "red";
        } 
        else {
          if(email=== "pk6635886@gmail.com" && password=== "gunjan"){
            message.innerText = "Your account has been created successfully!";
            message.style.color = "green";

            localStorage.setItem("useremail", email);
            localStorage.setItem("userpass", password);
    
            setTimeout(() => {
                window.location.href = "../HTML/facebook.html"; 
            }, 2000);
          }
        else {
                message.innerText = "Email or Password does not match our records.";
                message.style.color = "red";
            }  
        }
    });
});