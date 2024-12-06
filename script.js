// Switch between Login and Register forms
function toggleForms() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
  
    // Toggle the active class
    loginForm.classList.toggle("active");
    registerForm.classList.toggle("active");
  }
  
  // Initially show the login form by default
  document.addEventListener("DOMContentLoaded", function () {
    // This ensures the login form is visible when the page loads
    const loginForm = document.getElementById("login-form");
    loginForm.classList.add("active"); // Make sure the login form is active initially
  });