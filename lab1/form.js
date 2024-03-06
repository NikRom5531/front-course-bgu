function toggleLoginForm() {
    var loginForm = document.getElementById('loginForm');
    if (loginForm.style.display === 'none' || loginForm.style.display === '') {
        loginForm.style.display = 'block';
    } else {
        loginForm.style.display = 'none';
    }
}

function toggleRegisterForm() {
    var registerForm = document.getElementById('registerForm');
    if (registerForm.style.display === 'none' || registerForm.style.display === '') {
        registerForm.style.display = 'block';
    } else {
        registerForm.style.display = 'none';
    }
}