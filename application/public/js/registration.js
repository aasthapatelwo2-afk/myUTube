// Get references to the HTML objects
const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");

// Listen for the form submission
form.addEventListener("submit", validateForm);

// Function that validates the registration form
function validateForm(event) {

    // Stop the browser from submitting immediately
    event.preventDefault();

    // Read the current values from the input boxes
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Username:
    // - starts with a letter
    // - only letters and numbers
    // - at least 3 characters
    const usernamePattern = /^[a-zA-Z][a-zA-Z0-9]{2,}$/;

    if (!usernamePattern.test(username)) {
        alert(
            "Username must begin with a letter and contain at least 3 alphanumeric characters."
        );
        return;
    }

    // Password:
    // - minimum 8 characters
    // - one uppercase letter
    // - one number
    // - one special character
    const passwordPattern =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[/*\-+!@#$^&~[\]]).{8,}$/;

    if (!passwordPattern.test(password)) {
        alert(
            "Password must be at least 8 characters long and contain an uppercase letter, a number, and a special character."
        );
        return;
    }

    // Passwords must match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Everything passed
    alert("Registration successful!");

    // Allow the form to submit
    form.submit();
}