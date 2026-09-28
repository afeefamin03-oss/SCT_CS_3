function checkPassword() {

    const password = document.getElementById("password").value;

    let score = 0;
    let suggestions = [];

    // Check length
    const hasLength = password.length >= 8;

    // Check uppercase
    const hasUppercase = /[A-Z]/.test(password);

    // Check lowercase
    const hasLowercase = /[a-z]/.test(password);

    // Check number
    const hasNumber = /[0-9]/.test(password);

    // Check special character
    const hasSpecial = /[^A-Za-z0-9]/.test(password);


    // Update criteria
    updateCriteria("length", hasLength, "At least 8 characters");
    updateCriteria("uppercase", hasUppercase, "Contains uppercase letter");
    updateCriteria("lowercase", hasLowercase, "Contains lowercase letter");
    updateCriteria("number", hasNumber, "Contains a number");
    updateCriteria("special", hasSpecial, "Contains a special character");


    // Calculate score
    if (hasLength) score++;
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    // Extra points for longer passwords
    if (password.length >= 12) {
        score++;
    }


    // Suggestions
    if (!hasLength) {
        suggestions.push("Use at least 8 characters.");
    }

    if (!hasUppercase) {
        suggestions.push("Add an uppercase letter.");
    }

    if (!hasLowercase) {
        suggestions.push("Add a lowercase letter.");
    }

    if (!hasNumber) {
        suggestions.push("Add a number.");
    }

    if (!hasSpecial) {
        suggestions.push("Add a special character.");
    }

    if (password.length < 12) {
        suggestions.push("Consider using 12 or more characters.");
    }


    // Display strength
    const strengthText = document.getElementById("strengthText");
    const strengthBar = document.getElementById("strengthBar");
    const suggestionBox = document.getElementById("suggestion");


    if (password.length === 0) {

        strengthText.textContent = "Enter a password";
        strengthBar.style.width = "0%";
        suggestionBox.textContent =
            "Enter a password to receive suggestions.";

        return;
    }


    if (score <= 2) {

        strengthText.textContent = "Weak";
        strengthBar.style.width = "25%";

    } else if (score === 3) {

        strengthText.textContent = "Moderate";
        strengthBar.style.width = "50%";

    } else if (score === 4) {

        strengthText.textContent = "Strong";
        strengthBar.style.width = "75%";

    } else {

        strengthText.textContent = "Very Strong";
        strengthBar.style.width = "100%";
    }


    if (suggestions.length === 0) {

        suggestionBox.textContent =
            "Good password composition. Use a unique password and avoid reusing it.";

    } else {

        suggestionBox.innerHTML =
            suggestions.map(item => `• ${item}`).join("<br>");
    }
}


function updateCriteria(id, condition, text) {

    const element = document.getElementById(id);

    if (condition) {

        element.textContent = "✅ " + text;

    } else {

        element.textContent = "❌ " + text;
    }
}


function togglePassword() {

    const passwordInput = document.getElementById("password");
    const button = document.getElementById("toggleBtn");

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        button.textContent = "Hide";

    } else {

        passwordInput.type = "password";
        button.textContent = "Show";
    }
}