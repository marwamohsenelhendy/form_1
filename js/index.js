
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.querySelector('.submit');
const successMessage = document.createElement('h4');
const errorMessage = document.createElement('h4');
const user_container = []

submitButton.addEventListener('click', function(submit) {
  submit.preventDefault(); 

  successMessage.remove();
  errorMessage.remove();

  const email = emailInput.value;
  const password = passwordInput.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorMessage.textContent = 'Email is not valid';
    errorMessage.style.color = 'red';
    errorMessage.style.marginLeft = "3rem";
    emailInput.parentNode.appendChild(errorMessage);
  } else if (password.trim().length < 6) {
    errorMessage.textContent = 'Password is not valid';
    errorMessage.style.color = 'red';
    errorMessage.style.marginLeft = "3rem";
    passwordInput.parentNode.appendChild(errorMessage);
  } else {
    user_container.push(email);
    user_container.push(password);
    window.localStorage.setItem('data', JSON.stringify(user_container));
    window.location.assign('logout.html');
  }
});






