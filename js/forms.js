//toggle sign-up  password visibility
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }

  function togglePasswordVisibility() {
const passwordInput = document.getElementById('password');
const eyeSlash = document.getElementById('eye-slash');

if (passwordInput.type === 'password') {
passwordInput.type = 'text';
eyeSlash.classList.remove('fa-eye-slash');
eyeSlash.classList.add('fa-eye');
} else {
passwordInput.type = 'password';
eyeSlash.classList.remove('fa-eye');
eyeSlash.classList.add('fa-eye-slash');
}
}
