document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById('password');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const message = document.getElementById('message');
  const loginForm = document.getElementById('loginForm');

  const alertList = document.querySelectorAll('.alert');
  const alerts = [...alertList].map(element => new bootstrap.Alert(element));

  // Form submission handling
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (emailError) emailError.textContent = '';
      if (passwordError) passwordError.textContent = '';
      if (message) message.textContent = '';

      let isValid = true;

      // Validate email
      const email = emailInput.value.trim();
      if (emailInput && !email) {
        emailError.textContent = 'Email is required.';
        isValid = false;
      } else if (emailInput && !/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email.';
        isValid = false;
      }

      // Validate password
      const password = passwordInput.value.trim();
      if (passwordInput && !password) {
        passwordError.textContent = 'Password is required.';
        isValid = false;
      }
      if (isValid) {
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = "home.html"; // Redirect to the home page
      } else {
        message.textContent = "Invalid email or password. Please try again.";
        message.style.color = "red";
      }
    });
  }

  // Helper function to manage alerts
  function setupAlertHandlers(showAlertBtnId, alertId, backdropId) {
    const showAlertBtn = document.getElementById(showAlertBtnId);
    const alertElement = document.getElementById(alertId);
    const backdrop = document.getElementById(backdropId);

    if (showAlertBtn && alertElement && backdrop) {
      showAlertBtn.addEventListener('click', function () {
        backdrop.style.display = 'block';
        alertElement.style.display = 'block';
        setTimeout(function () {
          alertElement.style.display = 'none';
          backdrop.style.display = 'none';
        }, 5000);
      });

      backdrop.addEventListener('click', function () {
        alertElement.style.display = 'none';
        backdrop.style.display = 'none';
      });
    }
  }
  setupAlertHandlers('show-alert-btn-1', 'custom-alert-1', 'alert-backdrop-1');
  setupAlertHandlers('show-alert-btn-2', 'custom-alert-2', 'alert-backdrop-2');
  setupAlertHandlers('show-alert-btn-3', 'custom-alert-3', 'alert-backdrop-3');

});
